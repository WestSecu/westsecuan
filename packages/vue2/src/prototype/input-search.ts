/*
 * @Author: 周长升
 * @Date: 2022-02-28 20:48:30
 * @LastEditTime: 2022-02-28 20:56:10
 * @LastEditors: 周长升
 * @Description:
 */
import { search, SearchTextType } from "@westsecuan/vanilla";

/**
 * 输入框搜索事件
 * @param text 搜索内容
 * @param customProperty 自定义属性
 */
export function inputSearch(
  text: SearchTextType,
  customProperty?: Record<string, unknown>
): void {
  search(text, {...customProperty})
}
