/*
 * @Author: 周长升
 * @Date: 2022-02-17 09:22:53
 * @LastEditTime: 2022-02-17 09:49:44
 * @LastEditors: 周长升
 * @Description:
 */
const buildConfig = require("../../webpack.build");
const utilPackageName = require("../../utils/package-name");

const path = require("path");

const pkgName = utilPackageName(path.resolve(__dirname, "package.json"));

module.exports = {
  ...buildConfig,
  mode: "development",
  watch: true,
  entry: {
    index: "./src/index.ts"
  },
  experiments: {
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]" + `.umd.js`,
    library: {
      name: pkgName,
      type: "umd",
    },
  },
};;
