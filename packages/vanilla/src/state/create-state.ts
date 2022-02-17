/*
 * @Author: 周长升
 * @Date: 2022-02-17 21:59:36
 * @LastEditTime: 2022-02-17 22:10:40
 * @LastEditors: 周长升
 * @Description:
 */
import { State, StateType } from "./state";
import { SDK } from "../sdk";

/**
 * 重置状态
 */
export function resetState() {
  const newState: StateType = {
    sdk: null,
  };

  Object.assign(State, newState);
}

/**
 * 创建新状态
 * @param sdk - 埋点sdk引用
 */
export function createState(sdk: SDK) {
  resetState();

  State.sdk = sdk;
}
