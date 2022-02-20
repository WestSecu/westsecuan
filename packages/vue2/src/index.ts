/*
 * @Author: 周长升
 * @Date: 2022-02-16 14:42:41
 * @LastEditTime: 2022-02-20 20:09:16
 * @LastEditors: 周长升
 * @Description:
 */
import { PluginFunction } from "vue";
import {
  SDK,
  InitParam,
  create,
  init,
  registerPage,
} from "@westsecuan/vanilla";

import { click } from "./directives";
import { spaPageView } from "./prototype";

export type InstallOptions = {
  /**
   * 初始化参数
   */
  initParam?: InitParam;

  /**
   * 注册页面参数
   */
  registerPageParam?: Record<string, unknown>;

  /**
   * sdk
   */
  sdk: SDK;

  /** 是否启用埋点（默认启用） */
  enabled?: boolean;
};

/**
 * 安装vue 插件
 * @param v
 * @param options
 */
export const install: PluginFunction<InstallOptions> = (v, options): void => {
  if (options) {
    create(options.sdk, options.enabled);

    registerPage({
      ...(options.registerPageParam ?? {}),
    });

    init({
      ...(options.initParam ?? {}),
    });
  }

  v.directive("westsecuan-click", click);
  /**
   * 给vue实例添加可触发SPA PageView 函数
   */
  v.prototype.$westsecuanSPAView = spaPageView;
};

export default install;

declare module "vue/types/vue" {
  interface Vue {
    $westsecuanSPAView: typeof spaPageView;
  }
}
