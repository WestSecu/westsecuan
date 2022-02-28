/*
 * @Author: 周长升
 * @Date: 2022-02-26 14:56:43
 * @LastEditTime: 2022-02-26 14:59:05
 * @LastEditors: 周长升
 * @Description:
 */
/**
 * 基于当前元素查找匹配selector 的父级元素
 * @param currEle 当前元素
 * @param parentSelector 父级元素selector
 * @returns
 */
export function findParentTarget(
  currEle: HTMLElement,
  parentSelector: string
): null | HTMLElement {
  const parentNode = currEle.parentElement;

  if (parentNode && parentNode.parentElement) {
    if (parentNode.parentElement.querySelector(parentSelector) === parentNode) {
      return parentNode;
    } else {
      return findParentTarget(parentNode, parentSelector);
    }
  }

  return null;
}
