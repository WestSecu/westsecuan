/*
 * @Author: 周长升
 * @Date: 2022-02-20 14:34:59
 * @LastEditTime: 2022-02-20 17:48:45
 * @LastEditors: 周长升
 * @Description:
 */
/**
 * 判断目标对象是否指定的属性
 * @param target - 目标对象
 * @param propKey - 键名称
 */
export function hasProp<T = unknown>(target: T, propKey: string): boolean {
  return Object.prototype.hasOwnProperty.call(target, propKey);
}
