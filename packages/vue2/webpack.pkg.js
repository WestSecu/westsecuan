/*
 * @Author: 周长升
 * @Date: 2022-02-17 09:23:02
 * @LastEditTime: 2022-02-17 23:34:16
 * @LastEditors: 周长升
 * @Description:
 */
const buildConfig = require("../../webpack.build");
const utilPackageName = require("../../utils/package-name");

const path = require("path");

const pkgName = utilPackageName(path.resolve(__dirname, "package.json"));

function createConfig(options) {
  const outputPath = options.outputPath;
  const target = options.target;
  const isTargetModule = target === "module";

  return {
    ...buildConfig,
    entry: {
      index: "./src/index.ts",
    },
    experiments: {
      outputModule: isTargetModule,
    },
    output: {
      path: path.resolve(__dirname, outputPath),
      filename: "[name]" + `.${target}.js`,
      library: {
        name: isTargetModule ? undefined : pkgName,
        type: target,
      },
    },
  };
}

module.exports = createConfig({
  target: "umd",
  outputPath: "dist",
});
