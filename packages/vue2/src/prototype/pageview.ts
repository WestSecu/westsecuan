/*
 * @Author: 周长升
 * @Date: 2022-02-18 14:55:32
 * @LastEditTime: 2022-02-20 20:07:41
 * @LastEditors: 周长升
 * @Description:
 */
import { quick } from "@westsecuan/vanilla";

/**
 * 在单页面应用中触发页面view事件
 * @param customProperty 自定义属性
 */
export function spaPageView(
  customProperty?: Record<string, unknown>
): void {
  quick("trackSPA", {...customProperty})
}
