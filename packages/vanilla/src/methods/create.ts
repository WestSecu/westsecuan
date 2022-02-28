/*
 * @Author: 周长升
 * @Date: 2022-02-17 21:40:37
 * @LastEditTime: 2022-02-28 22:58:09
 * @LastEditors: 周长升
 * @Description:
 */
import { createState } from "../state";
import { SDK } from "../sdk";
import { logError } from "../utils";

type Create = (sdk: SDK, option?: CreateOption) => void;

export type CreateOption = {
  /** 是否启用 */
  enabled?: boolean;

  /** 是否归属模块 */
  fundModule?: boolean;

  /** 自定义属性前缀 */
  customPropKeyPrefix?: string;

  /** 自定义事件前缀 */
  customEventKeyPrefix?: string;
}

/**
 * 创建指定sdk状态
 * @param sdk - sdk引用
 * @param enabled - 是否启用埋点（默认启用）
 */
export const create: Create = (sdk: SDK, option?: CreateOption) => {
  try {
    createState(
      {
        type: sdk.type,
        syncRef: sdk.syncRef,
      },
      option
    );
  } catch (e) {
    logError(e);
  }
};
