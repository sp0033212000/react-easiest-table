import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";

/**
 * @type {import("rollup").RollupOptions}
 */
const config = {
  input: "./src/index.tsx",
  output: [
    { file: "./lib/esm/index.js", format: "esm" },
    { file: "./lib/cjs/index.js", format: "cjs" },
  ],
  plugins: [
    typescript({
      tsconfig: "tsconfig.json",
    }),
    postcss({
      config: { path: "./postcss.config.js" },
      extensions: ["css"],
      minimize: true,
      inject: { insertAt: "top" },
    }),
  ],
  external: ["react", "react-dom"],
};

export default config;
//
// import postcss from "rollup-plugin-postcss";
// import typescript from "rollup-plugin-typescript2";
//
// /**
//  * @type {import("rollup").RollupOptions}
//  */
// const config = [
//   {
//     input: "./dist/lib/cjs/index.js",
//     output: [
//       { file: "./lib/cjs/index.js", format: "cjs" },
//     ],
//     plugins: [
//       postcss({
//         config: { path: "./postcss.config.js" },
//         extensions: ["css"],
//         minimize: true,
//         inject: { insertAt: "top" },
//       }),
//     ],
//     external: ["react", "react-dom"],
//   },
//   {
//     input: "./dist/lib/esm/index.js",
//     output: [
//       { file: "./lib/esm/index.js", format: "esm" },
//     ],
//     plugins: [
//       postcss({
//         config: { path: "./postcss.config.js" },
//         extensions: ["css"],
//         minimize: true,
//         inject: { insertAt: "top" },
//       }),
//     ],
//     external: ["react", "react-dom"],
//   },
// ];
//
// export default config;
