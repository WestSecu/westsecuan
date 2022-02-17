/*
 * @Author: 周长升
 * @Date: 2022-02-17 21:40:37
 * @LastEditTime: 2022-02-17 22:11:57
 * @LastEditors: 周长升
 * @Description:
 */
import { createState } from "../state";
import { SDK } from "../sdk";

type Create = (sdk: SDK) => void;

/**
 * 创建指定sdk状态
 * @param sdk - sdk引用
 */
export const create: Create = (sdk) => {
  createState({
    type: sdk.type,
    ref: sdk.ref,
  });
};
