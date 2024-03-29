import path from "path";

const commonConfiguration = (() => ({
  entry: ["./src/index.ts"],
  resolve: {
    extensions: [".ts", ".js"],
    modules: [path.resolve("node_modules"), path.resolve("src")]
  }
}))();

export default commonConfiguration;
