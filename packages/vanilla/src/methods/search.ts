/*
 * @Author: 周长升
 * @Date: 2022-02-28 20:30:53
 * @LastEditTime: 2022-02-28 23:05:42
 * @LastEditors: 周长升
 * @Description:
 */
import { State } from "../state";
import { findField } from "../helpers";
import { track } from "./track";

type SearchTextElement = {
  value?: string;

  element: HTMLElement;
};
type Search = (
  text: SearchTextType,
  custom_property?: Record<string, unknown>
) => void;

export type SearchTextType = string | SearchTextElement

/**
 * 扩展的搜索事件
 * @param text - 搜索内容
 * @param custom_property - 自定义属性
 */
export const search: Search = (
  text: SearchTextType,
  custom_property?: Record<string, unknown>
) => {
  const eventName = `${State.customEventKeyPrefix}WebSearch`;
  const searchKey = `${State.customPropKeyPrefix}search_text`;

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
