/*
 * @Author: 周长升
 * @Date: 2022-03-02 10:28:03
 * @LastEditTime: 2022-03-02 10:37:37
 * @LastEditors: 周长升
 * @Description:
 */
import { State } from "../state";
import { logError } from "../utils";

type Use = (
  name: UseName,
  config?: Record<string, unknown>,
  ...args: unknown[]
) => void;

export type UseName = "pageLeave" | "pageLoad";

/**
 * 使用插件
 * @param name - 名称
 * @param config - 自定义配置项
 * @param args - 参数
 */
export const use: Use = (name, config, ...args) => {
  try {
    switch (State.sdk.type) {
      case "sensors":
        {
          const useName =
            {
              pageLeave: "PageLeave",
              pageLoad: "PageLoad",
            }[name] ?? name;

          State.sdk.syncRef?.use(useName, config, ...args);
        }
        break;
    }
  } catch (e) {
    logError(e);
  }
};
