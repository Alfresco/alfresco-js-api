package com.alfresco.codegen;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.StringEscapeUtils;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import io.swagger.codegen.languages.AbstractTypeScriptClientCodegen;
import io.swagger.codegen.CodegenConfig;
import io.swagger.codegen.CliOption;
import io.swagger.codegen.CodegenModel;
import io.swagger.codegen.CodegenParameter;
import io.swagger.codegen.CodegenOperation;
import io.swagger.codegen.SupportingFile;
import io.swagger.models.ModelImpl;
import io.swagger.models.properties.*;
import io.swagger.codegen.SupportingFile;
import io.swagger.models.Swagger;

public class ApiCodeGenGenerator extends AbstractTypeScriptClientCodegen implements CodegenConfig {

    private static final SimpleDateFormat SNAPSHOT_SUFFIX_FORMAT = new SimpleDateFormat("yyyyMMddHHmm");
    private static final String X_DISCRIMINATOR_TYPE = "x-discriminator-value";

    public static final String NPM_NAME = "npmName";
    public static final String NPM_VERSION = "npmVersion";
    public static final String NPM_REPOSITORY = "npmRepository";
    public static final String SNAPSHOT = "snapshot";
    public static final String TAGGED_UNIONS = "taggedUnions";

    protected String npmName = null;
    protected String npmVersion = "1.0.0";
    protected String npmRepository = null;
    protected String apiDocPath = "docs/";
    protected String modelDocPath = "docs/";

    private boolean taggedUnions = false;

    public ApiCodeGenGenerator() {
        super();
        this.outputFolder = "generated-code/typescript";

        embeddedTemplateDir = templateDir = "api-code-gen";
        modelTemplateFiles.put("model.mustache", ".ts");
        apiTemplateFiles.put("api.service.mustache", ".ts");
        languageSpecificPrimitives.add("Blob");
        typeMapping.put("file", "Blob");
        apiPackage = "api";
        modelPackage = "model";

        apiDocTemplateFiles.put("api_doc.mustache", ".md");
        modelDocTemplateFiles.put("model_doc.mustache", ".md");

        this.cliOptions.add(new CliOption(NPM_NAME, "The name under which you want to publish generated npm package." +
            " Required to generate a full package"));
        this.cliOptions.add(new CliOption(NPM_VERSION, "The version of your npm package. Default is '1.0.0'"));
        this.cliOptions.add(new CliOption(NPM_REPOSITORY,
            "Use this property to set an url your private npmRepo in the package.json"));
        this.cliOptions.add(new CliOption(TAGGED_UNIONS,
            "Use discriminators to create tagged unions instead of extending interfaces.",
            BooleanProperty.TYPE).defaultValue(Boolean.FALSE.toString()));
    }

    @Override
    public void preprocessSwagger(Swagger swagger) {
        super.preprocessSwagger(swagger);
        supportingFiles.add(new SupportingFile("readmeIndex.mustache", "", "README.md"));
    }

    @Override
    protected void addAdditionPropertiesToCodeGenModel(CodegenModel codegenModel, ModelImpl swaggerModel) {
        codegenModel.additionalPropertiesType = getTypeDeclaration(swaggerModel.getAdditionalProperties());
        addImport(codegenModel, codegenModel.additionalPropertiesType);
    }

    public String getName() {
        return "api-code-gen";
    }

    public String getHelp() {
        return "Generates a TypeScript Client library.";
    }

    @Override
    public void processOpts() {
        super.processOpts();
        supportingFiles.add(
            new SupportingFile("models.mustache", modelPackage().replace('.', File.separatorChar), "models.ts"));
        supportingFiles
            .add(new SupportingFile("apis.mustache", apiPackage().replace('.', File.separatorChar), "api.ts"));
        supportingFiles.add(new SupportingFile("base.api.mustache", apiPackage().replace('.', File.separatorChar), "base.api.ts"));
        supportingFiles.add(new SupportingFile("index.mustache", getIndexDirectory(), "index.ts"));

        if (additionalProperties.containsKey(TAGGED_UNIONS)) {
            taggedUnions = Boolean.parseBoolean(additionalProperties.get(TAGGED_UNIONS).toString());
        }

    }

    private String getIndexDirectory() {
        String indexPackage = modelPackage.substring(0, Math.max(0, modelPackage.lastIndexOf('.')));
        return indexPackage.replace('.', File.separatorChar);
    }

    @Override
    public boolean isDataTypeFile(final String dataType) {
        return dataType != null && dataType.equals("Blob");
    }

    @Override
    public String getTypeDeclaration(Property p) {
        if (p instanceof FileProperty) {
            return "Blob";
        } else if (p instanceof ObjectProperty) {
            return "any";
        } else {
            return super.getTypeDeclaration(p);
        }
    }

    public String escapeText(String input) {
        if (input == null) {
            return input;
        }

        // remove \t, \n, \r
        // replace \ with \\
        // replace " with \"
        // outter unescape to retain the original multi-byte characters
        // finally escalate characters avoiding code injection
        return escapeUnsafeCharacters(
            StringEscapeUtils.unescapeJava(
                StringEscapeUtils.escapeJava(input)
                    .replace("`", "")
                    .replace("\\/", "/"))
                .replace("\\", "\\\\")
                .replace("\"", "\\\""));
    }

    @Override
    public String getSwaggerType(Property p) {
        String swaggerType = super.getSwaggerType(p);
        if (isLanguagePrimitive(swaggerType) || isLanguageGenericType(swaggerType)) {
            return swaggerType;
        }
        applyLocalTypeMapping(swaggerType);
        return swaggerType;
    }

    private String applyLocalTypeMapping(String type) {
        if (typeMapping.containsKey(type)) {
            type = typeMapping.get(type);
        }
        return type;
    }

    private boolean isLanguagePrimitive(String type) {
        return languageSpecificPrimitives.contains(type);
    }

    private boolean isLanguageGenericType(String type) {
        for ( String genericType : languageGenericTypes ) {
            if (type.startsWith(genericType + "<")) {
                return true;
            }
        }
        return false;
    }

    @Override
    public void postProcessParameter(CodegenParameter parameter) {
        super.postProcessParameter(parameter);
        parameter.dataType = applyLocalTypeMapping(parameter.dataType);
    }

    @Override
    public Map<String, Object> postProcessOperations(Map<String, Object> operations) {
        Map<String, Object> objs = (Map<String, Object>) operations.get("operations");


        String nameClass = objs.get("classname").toString();
        String instanceClassname = Character.toLowerCase(nameClass.charAt(0)) + nameClass.substring(1);
        objs.put("instanceClassname", instanceClassname);

        // Add filename information for api imports
        objs.put("apiFilename", getApiFilenameFromClassname(objs.get("classname").toString()));


        // Add additional filename information for model imports in the services
        List<Map<String, Object>> imports = (List<Map<String, Object>>) operations.get("imports");
        for ( Map<String, Object> im : imports ) {

            im.put("filename", im.get("import"));
            String className = getModelnameFromModelFilename(im.get("filename").toString());
            im.put("classname", className);

            if (className.equals("ModelError")) {
                objs.put("canReturnError", className);
            }
        }

        if (objs != null) {
            List<CodegenOperation> ops = (List<CodegenOperation>) objs.get("operation");
            for ( CodegenOperation operation : ops ) {
                List<String> argList = new ArrayList<String>();
                boolean hasOptionalParams = false;
                for ( CodegenParameter p : operation.allParams ) {
                    if (p.required) {
                        argList.add(p.paramName + ": " + p.dataType);
                    } else {
                        hasOptionalParams = true;
                    }
                }
                if (hasOptionalParams) {
                    argList.add("opts?: any");
                }

                operation.vendorExtensions.put("x-codegen-argList", StringUtils.join(argList, ", "));
            }
        }

        return objs;
    }

    /**
     * Finds and returns a path parameter of an operation by its name
     *
     * @param operation
     * @param parameterName
     * @return
     */
    private CodegenParameter findPathParameterByName(CodegenOperation operation, String parameterName) {
        for ( CodegenParameter param : operation.pathParams ) {
            if (param.baseName.equals(parameterName)) {
                return param;
            }
        }
        return null;
    }

    @Override
    public Map<String, Object> postProcessModels(Map<String, Object> objs) {
        Map<String, Object> result = super.postProcessModels(objs);

        return postProcessModelsEnum(result);
    }

    @Override
    public Map<String, Object> postProcessAllModels(Map<String, Object> objs) {
        Map<String, Object> result = super.postProcessAllModels(objs);

        for ( Map.Entry<String, Object> entry : result.entrySet() ) {
            Map<String, Object> inner = (Map<String, Object>) entry.getValue();
            List<Map<String, Object>> models = (List<Map<String, Object>>) inner.get("models");
            for ( Map<String, Object> mo : models ) {
                CodegenModel cm = (CodegenModel) mo.get("model");
                if (taggedUnions) {
                    mo.put(TAGGED_UNIONS, true);
                    if (cm.discriminator != null && cm.children != null) {
                        for ( CodegenModel child : cm.children ) {
                            cm.imports.add(child.classname);
                        }
                    }
                    if (cm.parent != null) {
                        cm.imports.remove(cm.parent);
                    }
                }
                // Add additional filename information for imports
                mo.put("tsImports", toTsImports(cm, cm.imports));
            }
        }
        return result;
    }

    private List<Map<String, String>> toTsImports(CodegenModel cm, Set<String> imports) {
        List<Map<String, String>> tsImports = new ArrayList<>();
        for ( String im : imports ) {
            if (!im.equals(cm.classname)) {

                HashMap<String, String> tsImport = new HashMap<>();
                tsImport.put("classname", im);
                tsImport.put("filename", toModelFilename(im));

                if(!im.equals("Map")) {
                    tsImports.add(tsImport);
                }
            }
        }
        return tsImports;
    }

    @Override
    public String toApiName(String name) {
        if (name.length() == 0) {
            return "DefaultService";
        }
        return initialCaps(name) + "Api";
    }

    @Override
    public String toApiFilename(String name) {
        if (name.length() == 0) {
            return "default.api";
        }
        return camelize(name, true) + ".api";
    }

    @Override
    public String apiDocFileFolder() {
        return createPath(outputFolder, apiDocPath);
    }

    @Override
    public String modelDocFileFolder() {
        return createPath(outputFolder, modelDocPath);
    }

    private String createPath(String... segments) {
        StringBuilder buf = new StringBuilder();
        for ( String segment : segments ) {
            if (!StringUtils.isEmpty(segment) && !segment.equals(".")) {
                if (buf.length() != 0)
                    buf.append(File.separatorChar);
                buf.append(segment);
            }
        }
        for ( int i = 0; i < buf.length(); i++ ) {
            char c = buf.charAt(i);
            if ((c == '/' || c == '\\') && c != File.separatorChar)
                buf.setCharAt(i, File.separatorChar);
        }
        return buf.toString();
    }

    @Override
    public String toApiImport(String name) {
        return apiPackage() + "/" + toApiFilename(name);
    }

    @Override
    public String toModelFilename(String name) {
        return camelize(toModelName(name), true);
    }

    @Override
    public String toModelImport(String name) {
        return modelPackage() + "/" + toModelFilename(name);
    }

    public String getNpmName() {
        return npmName;
    }

    public void setNpmName(String npmName) {
        this.npmName = npmName;
    }

    public String getNpmVersion() {
        return npmVersion;
    }

    public void setNpmVersion(String npmVersion) {
        this.npmVersion = npmVersion;
    }

    public String getNpmRepository() {
        return npmRepository;
    }

    public void setNpmRepository(String npmRepository) {
        this.npmRepository = npmRepository;
    }

    private String getApiFilenameFromClassname(String classname) {
        String name = classname.substring(0, classname.length() - "Service".length());
        return toApiFilename(name);
    }

    private String getModelnameFromModelFilename(String filename) {
        String name = filename.substring((modelPackage() + "/").length());
        return camelize(name);
    }
}
