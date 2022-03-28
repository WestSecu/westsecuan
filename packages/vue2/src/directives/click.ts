/*
 * @Author: 周长升
 * @Date: 2022-02-17 22:47:39
 * @LastEditTime: 2022-03-28 15:15:49
 * @LastEditors: 周长升
 * @Description:
 */
import { DirectiveFunction } from "vue";
import { ClickTrackAttr, getClickAttr } from "@westsecuan/vanilla";
import { hasProp, findParentTarget } from "../utils";

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

  valueSelector?: string;

  /** 目标为子元素的selector */
  childSelector?: string;

  /** 目标为副元素的selector */
  parentSelector?: string | string[];

  /** 查找元素延时时间（毫秒） */
  matchSelectorDelay?: number;

  /** 是否禁用，默认不禁用 */
  disabled?: boolean;
}

const immediateClick: DirectiveFunction = (el: HTMLElement, binding): void => {
  let value = "";
  let targetEle = el;
  let disabled = false;

  if (typeof binding.value === "object" && binding.value != null) {
    const obj: ClickValueForTopic = binding.value ?? {};

    disabled = obj.disabled ?? disabled;

    if (hasProp(obj, "value")) {
      value = obj.value;
    } else if (hasProp(obj, "valueSelector")) {
      value = el.querySelector(obj.valueSelector)?.textContent?.trim() ?? '';
    } else if (hasProp(obj, "topics") && hasProp(obj, "action")) {
      const topics =
        typeof obj.topics === "string" ? [obj.topics] : [...obj.topics];
      const action = obj.action ?? "";

      value = [topics.join(">"), action].join(":");
    }

    if (hasProp(obj, "childSelector") && obj.childSelector) {
      targetEle = el.querySelector(obj.childSelector);
    } else if (hasProp(obj, "parentSelector") && obj.parentSelector) {
      if (typeof obj.parentSelector === "string") {
        targetEle = findParentTarget(el, obj.parentSelector);
      } else {
        const [paSelector, chSelector] = obj.parentSelector;

        if (paSelector && chSelector) {
          const tmpTargetEle = findParentTarget(el, paSelector);

          targetEle = tmpTargetEle?.querySelector(chSelector) ?? null;
        }
      }
    }
  } else {
    value = binding.value ?? "";
  }

  if (targetEle && !disabled) {
    const attr = getClickAttr(value);
    Object.keys(attr).forEach((key) => {
      targetEle.setAttribute(key, attr[key]);
    });
  } else if (disabled) {
    targetEle.removeAttribute(ClickTrackAttr);
  }
};

export const click: DirectiveFunction = (
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
      immediateClick(el, binding, vnode, oldVNode);
    }, binding.value.matchSelectorDelay);
  } else {
    immediateClick(el, binding, vnode, oldVNode);
  }
};
