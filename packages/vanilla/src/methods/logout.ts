/*
 * @Author: 周长升
 * @Date: 2022-02-20 17:55:51
 * @LastEditTime: 2022-02-20 18:17:33
 * @LastEditors: 周长升
 * @Description:
 */
import { State } from "../state";
import { logError } from "../utils";

type Logout = (isChangeId?: boolean) => void;

/**
 * 登陆
 * @param isChangeId - 是否重新标志
 */
export const logout: Logout = (isChangeId = true) => {
  try {
    switch (State.sdk.type) {
      case "sensors":
        {
          State.sdk.syncRef?.logout(isChangeId);
        }
        break;
    }
  } catch (e) {
    logError(e);
  }
};
