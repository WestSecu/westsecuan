/*
 * @Author: 周长升
 * @Date: 2022-02-19 21:09:48
 * @LastEditTime: 2022-02-19 21:48:10
 * @LastEditors: 周长升
 * @Description:
 */
/**
 * 解析url地址中的host（不包括端口号）
 * @param url 路径地址
 */
export function parseHost(url: string): string {
  let host = "";
  url.replace(/^http(s)?:\/\/([^\/\\:]*)(:\d+)?\/?/, (matched, p1, p2): string => {
    host = p2 ?? "";

    // 没实际用处
    return matched + p1;
  });

  return host;
}
