/*
 * @Author: 周长升
 * @Date: 2022-02-18 00:46:21
 * @LastEditTime: 2022-02-18 00:50:56
 * @LastEditors: 周长升
 * @Description:
 */
import { State } from "../state";
type Login = (id: string, cb: (...args: unknown[]) => void) => void;

/**
 * 登陆
 * @param id - 用户id
 * @param args - 参数
 */
export const login: Login = (id, ...args) => {
  switch (State.sdk?.type) {
    case "sensors":
      {
        // @ts-ignore
        State.sdk?.ref.login(id, ...args);
      }
      break;
  }
};
