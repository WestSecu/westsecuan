/*
 * @Author: 周长升
 * @Date: 2022-02-16 17:08:54
 * @LastEditTime: 2022-02-18 13:41:18
 * @LastEditors: 周长升
 * @Description:
 */
const utilPackageName = require("./utils/package-name");


module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader",
            options: {},
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  externals: {
    vue: "Vue",
    "@westsecuan/vanilla": utilPackageName("@westsecuan/vanilla"),
  },
};
