/*
 * @Author: 周长升
 * @Date: 2022-02-18 00:42:50
 * @LastEditTime: 2022-02-18 00:42:51
 * @LastEditors: 周长升
 * @Description:
 */
import { State } from "../state";
type Track = (name: string, ...args: unknown[]) => void;

/**
 * 追踪
 * @param name - 名称
 * @param args - 参数
 */
export const track: Track = (name, ...args) => {
  switch (State.sdk?.type) {
    case "sensors":
      {
        // @ts-ignore
        State.sdk?.ref.track(name, ...args);
      }
      break;
  }
};
