/*
 * @Author: 周长升
 * @Date: 2022-02-28 09:29:23
 * @LastEditTime: 2022-02-28 10:01:25
 * @LastEditors: 周长升
 * @Description:
 */
import { DirectiveFunction } from "vue";
import { ClickDisabledTrackAttr } from "@westsecuan/vanilla";
import { hasProp, findParentTarget } from "../utils";

/**
 * 当 binding value是对象时的模型
 */
interface ClickDisabledValue {
  /** 内容 */
  value: boolean;

  /** 目标为子元素的selector */
  childSelector?: string;

  /** 目标为父元素的selector */
  parentSelector?: string;

  /** 查找元素延时时间（毫秒） */
  matchSelectorDelay?: number;
}

const immediateClickDisabled: DirectiveFunction = (el: HTMLElement, binding): void => {
  let value = true;
  let targetEle = el;

  if (typeof binding.value === "object" && binding.value != null) {
    const obj: ClickDisabledValue = binding.value ?? {};

    if (hasProp(obj, "value") && obj.value != null) {
      value = obj.value;
    }

    if (hasProp(obj, "childSelector")) {
      targetEle = el.querySelector(obj.childSelector);
    } else if (hasProp(obj, "parentSelector")) {
      targetEle = findParentTarget(el, obj.parentSelector);
    }
  } else {
    value = binding.value ?? value;
  }

  if (targetEle) {
    targetEle.setAttribute(ClickDisabledTrackAttr, `${value}`);
  }
};

export const clickDisabled: DirectiveFunction = (
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
      immediateClickDisabled(el, binding, vnode, oldVNode);
    }, binding.value.matchSelectorDelay);
  } else {
    immediateClickDisabled(el, binding, vnode, oldVNode);
  }
};
