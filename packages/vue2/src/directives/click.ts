/*
 * @Author: 周长升
 * @Date: 2022-02-17 22:47:39
 * @LastEditTime: 2022-02-21 16:30:42
 * @LastEditors: 周长升
 * @Description:
 */
import { DirectiveFunction } from "vue";
import { ClickTrackAttr } from "@westsecuan/vanilla";
import { hasProp } from "../utils";

/**
 * 当 binding value是对象时的模型
 */
interface ClickValueForTopic {
  /** 主题（topics 与 action 组合生成内容） */
  topics?: string | string[];

  /** 动作（topics 与 action 组合生成内容） */
  action?: string;

  /** 内容 */
  value?: string;

  /** 目标为子元素的selector */
  childSelector?: string;

  /** 是否禁用，默认不禁用 */
  disabled?: boolean;
}

export const click: DirectiveFunction = (el: HTMLElement, binding): void => {
  let value = "";
  let targetEle = el;
  let disabled = false;

  if (typeof binding.value === "object") {
    const obj: ClickValueForTopic = binding.value ?? {};

    disabled = obj.disabled ?? disabled;

    if (hasProp(obj, "value")) {
      value = obj.value;
    } else if (hasProp(obj, "topics") && hasProp(obj, "action")) {
      const topics =
        typeof obj.topics === "string"
          ? [obj.topics]
          : [...obj.topics];
      const action = obj.action ?? "";

      value = [topics.join(">"), action].join(":");
    }

    if (hasProp(obj, "childSelector")) {
      targetEle = el.querySelector(obj.childSelector);
    }
  } else {
    value = binding.value ?? "";
  }

  if (targetEle && !disabled) {
    targetEle.setAttribute(ClickTrackAttr, value);
  } else if (disabled) {
    targetEle.removeAttribute(ClickTrackAttr);
  }
};
