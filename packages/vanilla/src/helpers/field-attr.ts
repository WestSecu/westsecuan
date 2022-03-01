/*
 * @Author: 周长升
 * @Date: 2022-03-01 17:23:45
 * @LastEditTime: 2022-03-01 17:24:33
 * @LastEditors: 周长升
 * @Description:
 */
import { TrackFieldAttr } from "../sdk";

/**
 * 获取html元素配置模块属性（attr）
 * @param value
 * @returns 配置对象
 */
export const getFieldAttr = (value: string): Record<string, string> => {
  return {
    [TrackFieldAttr]: value,
  };
};
