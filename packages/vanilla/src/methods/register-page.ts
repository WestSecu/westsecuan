/*
 * @Author: 周长升
 * @Date: 2022-02-18 00:49:03
 * @LastEditTime: 2022-02-28 20:21:03
 * @LastEditors: 周长升
 * @Description:
 */
import { State } from "../state";
import { logError } from "../utils";

type RegisterPage = (obj: Record<string, unknown>) => void;

/**
 * 注册页面
 * @param obj - 属性
 */
export const registerPage: RegisterPage = (obj: Record<string, unknown>) => {
  try {
    switch (State.sdk.type) {
      case "sensors":
        {
          State.sdk.syncRef?.registerPage({
            ...obj,
            $user_agent: window.navigator?.userAgent ?? ''
          });
        }
        break;
    }
  } catch (e) {
    logError(e);
  }
};
