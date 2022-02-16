/*
 * @Author: 周长升
 * @Date: 2022-02-16 17:08:54
 * @LastEditTime: 2022-02-16 18:11:06
 * @LastEditors: 周长升
 * @Description:
 */
module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: {
          configFile: 'tsconfig.pkg.json'
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
