/*
 * @Author: 周长升
 * @Date: 2022-02-17 21:48:15
 * @LastEditTime: 2022-02-17 23:08:03
 * @LastEditors: 周长升
 * @Description:
 */
import { Sensors } from "./sensors";

type SensorSDKType = "sensors";
type SensorSDK = {
  type: "sensors";

  ref: Sensors;
};

/**
 * 埋点track标签的attr
 */
export const ClickTrackAttr = "data-westsecuan-click";
export const ClickTrackAttrKey = "data-westsecuan-click-key";

export type SDK = SensorSDK;
export type SDKType = SensorSDKType;
