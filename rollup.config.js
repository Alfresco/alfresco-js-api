import copy from "rollup-plugin-copy";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
import del from "rollup-plugin-delete";
import generatePackageJson from "rollup-plugin-generate-package-json";
import pkg from "./package.json";
import * as path from "path";
import * as fs from "fs";

const banner = fs
    .readFileSync(path.join(__dirname, "assets", "license.txt"))
    .toString();

export default [
    {
        input: "src/index.ts",
        external: ["superagent", "minimatch", "event-emitter"],
        plugins: [
            del({ targets: "dist/*" }),
            generatePackageJson({
                baseContents: (pkg) => ({
                    ...pkg,
                    name: pkg.name,
                    scripts: {},
                    dependencies: pkg.dependencies,
                    devDependencies: {},
                    private: true,
                }),
            }),
            typescript({
                typescript: require("typescript"),
            }),
            copy({
                targets: [
                    { src: "README.md", dest: "dist" },
                    { src: "LICENSE.txt", dest: "dist" },
                ],
            }),
            terser({
                output: {
                    comments: /@preserve/,
                },
            }),
        ],
        output: [
            {
                name: pkg.name,
                file: `dist/alfresco-js-api.umd.js`,
                format: "umd",
                banner,
                globals: {
                    superagent: "superagent",
                    minimatch: "minimatch",
                    "event-emitter": "event-emitter",
                },
                sourcemap: true
            },
            {
                file: `dist/alfresco-js-api.cjs.js`,
                format: "cjs",
                banner,
            },
            {
                file: `dist/alfresco-js-api.esm.js`,
                format: "es",
                banner,
            },
        ],
    },
];
