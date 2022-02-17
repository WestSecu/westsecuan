/*
 * @Author: 周长升
 * @Date: 2022-02-17 22:25:13
 * @LastEditTime: 2022-02-18 00:45:58
 * @LastEditors: 周长升
 * @Description:
 */
import { State } from "../state";
type Quick = (name: string, ...args: unknown[]) => void;

/**
 * 追踪
 * @param name - 名称
 * @param args - 参数
 */
export const quick: Quick = (name, ...args) => {
  switch (State.sdk?.type) {
    case "sensors":
      {
        // @ts-ignore
        State.sdk?.ref.quick(name, ...args);
      }
      break;
  }
};
