const ClosureCompiler = require('google-closure-compiler').jsCompiler;
const fs = require('fs');
const path = require('path');

module.exports = function makeClosure(sourcePath) {
    const source = fs.readFileSync(sourcePath, 'utf8');

    const compiler = new ClosureCompiler({
        compilation_level: 'ADVANCED'
    });

    const output = compiler.run([
        {
            jsCode: [{src: source}],
            languageIn: 'ES2015',
            createSourceMap: true
        }
    ]);

    const dest = sourcePath.replace(/.js$/, '.min.js');
    const sourceMapDest = dest + '.map';
    output.compiledCode = output.compiledCode + '\n//# sourceMappingURL=' + path.basename(sourceMapDest);

    fs.writeFileSync(dest, output.compiledCode, 'utf8');
    fs.writeFileSync(sourceMapDest, output.sourceMap, 'utf8');
};
