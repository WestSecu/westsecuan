/*
 * @Author: 周长升
 * @Date: 2022-02-17 21:59:36
 * @LastEditTime: 2022-02-28 22:56:48
 * @LastEditors: 周长升
 * @Description:
 */
import { State, StateType } from "./state";
import { SDK } from "../sdk";
import { CreateOption } from "../methods";

export function createDefaultState(): StateType {
  const newState: StateType = {
    // 默认sdk
    sdk: {
      type: "sensors",
      syncRef: null
    },

    spaPageViewRefferer: "",

    enabled: true,

    fundModule: true,

    customEventKeyPrefix: '',

    customPropKeyPrefix: ''
  };

  return newState;
}

/**
 * 重置状态
 */
export function resetState() {
  const newState: StateType = {
    ...createDefaultState(),
  };

  Object.assign(State, newState);
}

/**
 * 创建新状态
 * @param sdk - 埋点sdk引用
 * @param option - 配置
 */
export function createState(sdk: SDK, option?: CreateOption) {
  resetState();

  State.enabled = option?.enabled ?? State.enabled;

  State.fundModule = option?.fundModule ?? State.fundModule;

  State.customEventKeyPrefix = option?.customEventKeyPrefix ?? State.customEventKeyPrefix;

  State.customPropKeyPrefix = option?.customPropKeyPrefix ?? State.customPropKeyPrefix;

  // 不启用埋点，则下列关联取消以不响应埋点操作
  if (!State.enabled) {
    return;
  }

  State.sdk = {
    ...State.sdk,
    ...sdk,
  };
}
