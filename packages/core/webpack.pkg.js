/*
 * @Author: 周长升
 * @Date: 2022-02-16 17:11:38
 * @LastEditTime: 2022-02-16 18:30:49
 * @LastEditors: 周长升
 * @Description:
 */
const buildConfig = require("../../webpack.build");
const utilPackageName = require("../../utils/package-name");

const path = require("path");

module.exports = {
  ...buildConfig,
  entry: "./index.ts",
  experiments: {
    outputModule: true,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: utilPackageName(path.resolve(__dirname, "package.json")) + ".js",
    library: {
      type: "module",
    },
  },
};
