/*
 * @Author: 周长升
 * @Date: 2022-02-17 21:48:15
 * @LastEditTime: 2022-02-20 20:38:25
 * @LastEditors: 周长升
 * @Description:
 */
import { Sensors } from "./sensors";

type SensorSDKType = "sensors";

type SensorSDK = {
  type: "sensors";

  /**
   * 同步sdk引用
   */
   syncRef?: Sensors;

  /**
   * 异步sdk source 标志
   */
  asyncSourceSymbol?: string;

  /**
   * 异步sdk target 标志
   */
  asyncTargetSymbol?: string;
};

/**
 * 埋点track标签的attr
 */
export const ClickTrackAttr = "data-westsecuan-click";

export type SDK = SensorSDK;
export type SDKType = SensorSDKType;
