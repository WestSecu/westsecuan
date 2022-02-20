/*
 * @Author: 周长升
 * @Date: 2022-02-17 21:40:37
 * @LastEditTime: 2022-02-20 19:39:40
 * @LastEditors: 周长升
 * @Description:
 */
import { createState } from "../state";
import { SDK } from "../sdk";
import { logError } from "../utils";

type Create = (sdk: SDK, enabled?: boolean) => void;

/**
 * 创建指定sdk状态
 * @param sdk - sdk引用
 * @param enabled - 是否启用埋点（默认启用）
 */
export const create: Create = (sdk: SDK, enabled?: boolean) => {
  try {
    createState(
      {
        type: sdk.type,
        asyncSourceSymbol: sdk.asyncSourceSymbol,
        asyncTargetSymbol: sdk.asyncTargetSymbol,
        syncRef: sdk.syncRef,
      },
      enabled
    );
  } catch (e) {
    logError(e);
  }
};
