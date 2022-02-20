/*
 * @Author: 周长升
 * @Date: 2022-02-17 22:47:39
 * @LastEditTime: 2022-02-20 20:38:00
 * @LastEditors: 周长升
 * @Description:
 */
import { DirectiveFunction } from "vue";
import { ClickTrackAttr } from "@westsecuan/vanilla";
import { hasProp } from "../utils";

interface ClickValueBase {
  /** 目标为子元素的selector */
  childSelector?: string;
}

interface ClickValueNormal extends ClickValueBase {
  /** 内容 */
  value: string;
}

/**
 * 当 binding value是对象时的模型
 */
interface ClickValueForTopic extends ClickValueBase {
  /** 主题 */
  topics: string | string[];

  /** 动作 */
  action: string;
}

export const click: DirectiveFunction = (el: HTMLElement, binding): void => {
  let value = "";
  let targetEle = el;

  if (typeof binding.value === "object") {
    const obj: ClickValueForTopic | ClickValueNormal = binding.value ?? {};
    if (hasProp(binding.value, "value")) {
      const innerObj = obj as ClickValueNormal;

      value = innerObj.value;
    } else if (hasProp(obj, "topics") && hasProp(obj, "action")) {
      const innerObj = obj as ClickValueForTopic;
      const topics =
        typeof innerObj.topics === "string"
          ? [innerObj.topics]
          : [...innerObj.topics];
      const action = innerObj.action ?? "";

      value = [topics.join(">"), action].join(":");
    }

    if (hasProp(obj, "childSelector")) {
      targetEle = el.querySelector(obj.childSelector);
    }
  } else {
    value = binding.value ?? "";
  }

  if (targetEle) {
    targetEle.setAttribute(ClickTrackAttr, value);
  }
};
