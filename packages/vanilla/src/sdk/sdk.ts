/*
 * @Author: 周长升
 * @Date: 2022-02-17 21:48:15
 * @LastEditTime: 2022-02-28 22:56:37
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
   syncRef?: Sensors | null;
};

/**
 * 埋点track标签的点击attr
 */
export const ClickTrackAttr = "data-westsecuan-click";

export const ClickDisabledTrackAttr = "data-westsecuan-click-disabled";

/**
 * 埋点track标签的模块attr
 */
export const TrackFieldAttr = "data-westsecuan-module";

/**
 * 埋点track标签的模块attr分隔符
 */
export const TrackFieldAttrSplit = ">";

export type SDK = SensorSDK;
export type SDKType = SensorSDKType;
