const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const { dts } = require("rollup-plugin-dts");

const packageJson = require("./package.json");

module.exports = [
  {
    input: "src/index.ts",
    output: {
      dir: "dist",
      format: "esm",
      sourcemap: true,
    },
    external: ["react", "react-dom"],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  {
    input: "dist/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
]; 