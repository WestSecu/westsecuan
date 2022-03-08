/*
 * @Author: 周长升
 * @Date: 2022-02-24 13:32:05
 * @LastEditTime: 2022-02-24 14:44:13
 * @LastEditors: 周长升
 * @Description:
 */
import { TrackFieldAttr, TrackFieldAttrSplit } from "../sdk";
import { State } from "../state";

export type FundField = {
  [key: string]: string;
}

/**
 * 根据当前元素查找当前元素祖先节点中的模块元素并获取模块元素的值
 * @param current - 当前元素节点
 */
export function findField(current: HTMLElement): FundField {
  let parentModule: string[] = [];

  let parentNode = current.parentElement;

  while(parentNode) {
    const moduleVal = parentNode.getAttribute(TrackFieldAttr);

    if (moduleVal) {
      parentModule.unshift(moduleVal);
    }

    parentNode = parentNode.parentElement;
  }

  return {
    [`${State.customPropKeyPrefix}module`]: parentModule.join(TrackFieldAttrSplit)
  }
}
