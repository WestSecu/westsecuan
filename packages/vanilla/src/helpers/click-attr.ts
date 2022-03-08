/*
 * @Author: 周长升
 * @Date: 2022-03-01 16:10:45
 * @LastEditTime: 2022-03-01 16:20:02
 * @LastEditors: 周长升
 * @Description:
 */
import { ClickTrackAttr } from "../sdk";

/**
 * 获取可点击html元素配置属性（attr）
 * @param value
 * @returns 配置对象
 */
export const getClickAttr = (value: string): Record<string, string> => {
  return {
    [ClickTrackAttr]: value,
  };
};
