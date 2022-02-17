import { Sensors } from "./sensors";
declare type SensorSDKType = "sensors";
declare type SensorSDK = {
    type: "sensors";
    ref: Sensors;
};
/**
 * 埋点track标签的attr
 */
export declare const ClickTrackAttr = "data-westsecuan-click";
export declare const ClickTrackAttrKey = "data-westsecuan-click-key";
export declare type SDK = SensorSDK;
export declare type SDKType = SensorSDKType;
export {};
