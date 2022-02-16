/*
 * @Author: 周长升
 * @Date: 2022-02-16 14:42:41
 * @LastEditTime: 2022-02-16 23:09:38
 * @LastEditors: 周长升
 * @Description:
 */
import { isEven } from '@westsecuan/vanilla';

export function isOdd(i: number): boolean {
    return isEven(i) === false;
}
