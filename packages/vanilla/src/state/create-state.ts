/*
 * @Author: 周长升
 * @Date: 2022-02-17 21:59:36
 * @LastEditTime: 2022-02-20 19:43:39
 * @LastEditors: 周长升
 * @Description:
 */
import { State, StateType } from "./state";
import { SDK, createDefaultSensorSDK } from "../sdk";

export function createDefaultState(): StateType {
  const newState: StateType = {
    // 默认sdk
    sdk: {
      type: "sensors",
      syncRef: createDefaultSensorSDK(),
    },

    spaPageViewRefferer: "",

    enabled: true,
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
 * @param enabled - 是否启用埋点（默认启用）
 */
export function createState(sdk: SDK, enabled?: boolean) {
  resetState();

  State.enabled = enabled ?? State.enabled;

  // 不启用埋点，则下列关联取消以不响应埋点操作
  if (!State.enabled) {
    return;
  }

  State.sdk = {
    ...State.sdk,
    ...sdk,
  };

  // 如果 asyncSourceSymbol 与 asyncTargetSymbol 存在则使用异步获取sdk方式
  // 此时需要先自己生成sdk占位
  if (
    !sdk.syncRef &&
    sdk.asyncSourceSymbol &&
    sdk.asyncTargetSymbol &&
    typeof window === "object"
  ) {
    if (window[sdk.asyncSourceSymbol]) {
      State.sdk.syncRef = window[sdk.asyncSourceSymbol];
    } else {
      State.sdk.syncRef = createDefaultSensorSDK(() => {
        if (State.sdk.syncRef !== window[sdk.asyncTargetSymbol]) {
          return window[sdk.asyncTargetSymbol];
        }
      });

      window[sdk.asyncSourceSymbol] = sdk.asyncTargetSymbol;
      window[sdk.asyncTargetSymbol] = State.sdk.syncRef;
    }

    // @ts-ignore
    State.sdk.syncRef.para = {
      // @ts-ignore
      ...State.sdk.syncRef.para,
      name: sdk.asyncTargetSymbol,
    };
  }
}
