/*
 * @Author: 周长升
 * @Date: 2022-02-16 17:39:52
 * @LastEditTime: 2022-02-16 17:59:55
 * @LastEditors: 周长升
 * @Description:
 */
/**
 * 读取pkgFile包名称，并将其转化为特定格式如
 * @scope/pkg -> scope_pkg
 * @param { string } pkgFile
 */
function getPackageName(pkgFile) {
  var pkgName = require(pkgFile).name;

  // 移除首尾非英文、数字字符
  pkgName = pkgName.replace(/(^[^A-Za-z0-9]+)|([^A-Za-z0-9]+$)/gi, "");

  // 将中间的非数字字符替换为 _
  pkgName = pkgName.replace(/[^A-Za-z0-9]+/gi, "_");

  return pkgName
}

module.exports = getPackageName;
