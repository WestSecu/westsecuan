/*
 * @Author: 周长升
 * @Date: 2022-02-18 00:46:21
 * @LastEditTime: 2022-02-20 18:58:25
 * @LastEditors: 周长升
 * @Description:
 */
import { State } from "../state";
import { logError } from "../utils";

type Login = (id: string, ...args: unknown[]) => void;

/**
 * 登陆
 * @param id - 用户id
 * @param args - 参数
 */
export const login: Login = (id, ...args: unknown[]) => {
  try {
    switch (State.sdk.type) {
      case "sensors":
        {
          State.sdk.syncRef?.login(id, ...args);
        }
        break;
    }
  } catch (e) {
    logError(e);
  }
};
