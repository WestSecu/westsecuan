import { SDK } from "../sdk";
declare type Create = (sdk: SDK) => void;
/**
 * 创建指定sdk状态
 * @param sdk - sdk引用
 */
export declare const create: Create;
export {};
