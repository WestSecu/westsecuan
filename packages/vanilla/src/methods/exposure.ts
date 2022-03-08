/*
 * @Author: 周长升
 * @Date: 2022-03-04 14:43:48
 * @LastEditTime: 2022-03-04 14:54:26
 * @LastEditors: 周长升
 * @Description:
 */
import { State } from "../state";
import { findField } from "../helpers";
import { track } from "./track";

type ExposureTextElement = {
  value?: string;

  element: HTMLElement;
};
type Exposure = (
  text: ExposureTextType,
  custom_property?: Record<string, unknown>
) => void;

export type ExposureTextType = string | ExposureTextElement

/**
 * 扩展的曝光事件
 * @param text - 曝光内容
 * @param custom_property - 自定义属性
 */
export const exposure: Exposure = (
  text: ExposureTextType,
  custom_property?: Record<string, unknown>
) => {
  const eventName = `${State.customEventKeyPrefix}WebExposure`;
  const searchKey = `${State.customPropKeyPrefix}business_name`;

  if (typeof text === "string") {
    // @ts-ignore
    track(eventName, {
      [searchKey]: text,
      ...custom_property,
    });
  } else if (typeof text === "object" && text != null) {
    const { element, value } = text;
    const latestVal = value ?? (element as HTMLInputElement).value ?? '';

    let field : Record<string, unknown> = {};

    if (element && State.fundModule) {
      field = findField(element);
    }

    // @ts-ignore
    track(eventName, {
      [searchKey]: latestVal,
      ...field,
      ...custom_property,
    });
  }
};
