/*
 * @Author: 周长升
 * @Date: 2022-02-18 00:49:03
 * @LastEditTime: 2022-02-18 00:50:16
 * @LastEditors: 周长升
 * @Description:
 */
import { State } from "../state";
type RegisterPage = (obj: Record<string, unknown>) => void;

/**
 * 注册页面
 * @param obj - 属性
 */
export const registerPage: RegisterPage = (obj: Record<string, unknown>) => {
  switch (State.sdk?.type) {
    case "sensors":
      {
        // @ts-ignore
        State.sdk?.ref.registerPage(obj);
      }
      break;
  }
};
