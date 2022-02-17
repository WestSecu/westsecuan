/*
 * @Author: 周长升
 * @Date: 2022-02-17 23:00:26
 * @LastEditTime: 2022-02-17 23:54:43
 * @LastEditors: 周长升
 * @Description:
 */
import { PluginFunction } from "vue";
import { SDK, InitParam, create, init } from "@westsecuan/vanilla";
import { click } from "./directives";

export type InstallOptions = {
  /**
   * 初始化参数
   */
  initParam: InitParam;

  /**
   * sdk
   */
  sdk: SDK;
};

/**
 * 安装vue 插件
 * @param v
 * @param options
 */
export const install: PluginFunction<InstallOptions> = (v, options): void => {
  if (options) {
    create(options.sdk);
    init({
      ...options.initParam,
    });
  }

  v.directive("westsecuan-click", click);
};
