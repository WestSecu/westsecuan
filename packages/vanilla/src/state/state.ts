/*
 * @Author: 周长升
 * @Date: 2022-02-17 21:33:24
 * @LastEditTime: 2022-02-17 22:03:15
 * @LastEditors: 周长升
 * @Description:
 */
import { SDK } from '../sdk'

/**
 * 内部状态模型
 */
export type StateType = {
  sdk: SDK | null;
}

/**
 * 内部状态
 */
export const State: StateType = {
  /** 默认无指定sdk */
  sdk: null
};
