/*
 * @Author: 周长升
 * @Date: 2022-02-17 22:47:39
 * @LastEditTime: 2022-02-17 23:12:15
 * @LastEditors: 周长升
 * @Description:
 */
import { DirectiveFunction } from "vue";
import { ClickTrackAttrKey, ClickTrackAttr } from "@westsecuan/vanilla";

export const click: DirectiveFunction = (el: HTMLElement, binding): void => {
  let value = "";
  let key = "";
  if (typeof binding.value === "object") {
    const obj = binding.value ?? {};
    if (Object.prototype.hasOwnProperty.call(obj, "value")) {
      value = obj.value ?? "";
    } else if (
      Object.prototype.hasOwnProperty.call(obj, "topics") &&
      Object.prototype.hasOwnProperty.call(obj, "action")
    ) {
      const topics =
        typeof obj.topics === "string" ? [obj.topics] : [...obj.topics];
      const action = obj.action ?? "";

      value = [topics.join(">"), action].join(":");
    }

    if (Object.prototype.hasOwnProperty.call(obj, "key")) {
      key = obj.key ?? "";
    }
  } else {
    value = binding.value ?? "";
  }

  if (el) {
    el.setAttribute(ClickTrackAttr, value);

    if (key) {
      el.setAttribute(ClickTrackAttrKey, key);
    } else {
      el.removeAttribute(key);
    }
  }
};
