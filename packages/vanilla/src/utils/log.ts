/*
 * @Author: 周长升
 * @Date: 2022-02-18 17:17:03
 * @LastEditTime: 2022-02-18 17:18:39
 * @LastEditors: 周长升
 * @Description:
 */
export function logError(...args: unknown[]) {
  const log = window?.console?.log ?? (() => {});

  log(...args);
}
