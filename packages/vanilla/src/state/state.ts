/*
 * @Author: 周长升
 * @Date: 2022-02-17 21:33:24
 * @LastEditTime: 2022-02-20 19:31:20
 * @LastEditors: 周长升
 * @Description:
 */
import { SDK } from "../sdk";

import { createDefaultState } from "./create-state";

/**
 * 内部状态模型
 */
export type StateType = {
  sdk: SDK;

  /** 单页面应用程序页面的refferer（通过track('pageview')） */
  spaPageViewRefferer: string;

  /** 是否启用埋点（默认启用） */
  enabled: boolean
};

/**
 * 内部状态
 */
export const State: StateType = {
  ...createDefaultState(),
};
