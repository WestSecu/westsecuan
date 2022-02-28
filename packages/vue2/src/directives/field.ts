/*
 * @Author: 周长升
 * @Date: 2022-02-24 14:06:49
 * @LastEditTime: 2022-02-28 15:17:12
 * @LastEditors: 周长升
 * @Description:
 */
import { DirectiveFunction } from "vue";
import { TrackFieldAttrSplit, TrackFieldAttr } from "@westsecuan/vanilla";
import { hasProp, findParentTarget } from "../utils";

/**
 * 当 binding value是对象时的模型
 */
interface FieldValue {
  /** 内容 */
  value: string | string[];

  /** 以子元素textContent为值的selector */
  valueChildSelector?: string;

  /** 以父元素下的某个子元素textContent为值的selector */
  valueParentSelector?: string[];

  /** 目标为子元素的selector */
  childSelector?: string;

  /** 目标为父元素的selector */
  parentSelector?: string;

  /** 查找元素延时时间（毫秒） */
  matchSelectorDelay?: number;
}

const immediateField: DirectiveFunction = (el: HTMLElement, binding): void => {
  let value = "";
  let targetEle = el;

  if (binding.value instanceof Array) {
    value = binding.value.join(TrackFieldAttrSplit);
  } else if (typeof binding.value === "object" && binding.value != null) {
    const obj: FieldValue = binding.value ?? {};

    if (hasProp(obj, "valueChildSelector") && obj.valueChildSelector) {
      value = el.querySelector(obj.valueChildSelector)?.textContent ?? "";
    } else if (
      obj.valueParentSelector instanceof Array &&
      obj.valueParentSelector.length === 2
    ) {
      const [firstSelector, secondSelector] = obj.valueParentSelector;
      value =
        findParentTarget(el, firstSelector)?.querySelector(secondSelector)?.textContent ??
        "";
    } else if (hasProp(obj, "value") && obj.value != null) {
      value =
        typeof obj.value === "string"
          ? obj.value
          : obj.value.join(TrackFieldAttrSplit);
    }

    if (hasProp(obj, "childSelector")) {
      targetEle = el.querySelector(obj.childSelector);
    } else if (hasProp(obj, "parentSelector")) {
      targetEle = findParentTarget(el, obj.parentSelector);
    }
  } else {
    value = binding.value ?? "";
  }

  if (targetEle) {
    targetEle.setAttribute(TrackFieldAttr, value);
  }
};

export const field: DirectiveFunction = (
  el: HTMLElement,
  binding,
  vnode,
  oldVNode
): void => {
  if (
    binding.value != null &&
    hasProp(binding.value, "matchSelectorDelay") &&
    binding.value.matchSelectorDelay > 0
  ) {
    setTimeout(() => {
      immediateField(el, binding, vnode, oldVNode);
    }, binding.value.matchSelectorDelay);
  } else {
    immediateField(el, binding, vnode, oldVNode);
  }
};
