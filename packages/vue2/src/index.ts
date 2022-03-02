/*
 * @Author: 周长升
 * @Date: 2022-02-16 14:42:41
 * @LastEditTime: 2022-03-02 10:50:06
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
  CreateOption,
  UseName,
  use,
} from "@westsecuan/vanilla";

import { click, field, clickDisabled } from "./directives";
import { spaPageView, inputSearch } from "./prototype";

export * from "./directives";

export type OptionPlugin = {
  name: UseName;

  config?: Record<string, unknown>;
};

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

  /** 创建时配置项 */
  createOption?: CreateOption;

  /** 插件配置项 */
  plugins?: OptionPlugin[];
};

/**
 * 安装vue 插件
 * @param v
 * @param options
 */
export const install: PluginFunction<InstallOptions> = (v, options): void => {
  if (options) {
    create(options.sdk, options.createOption);

    registerPage({
      ...(options.registerPageParam ?? {}),
    });

    init({
      ...(options.initParam ?? {}),
    });

    options.plugins?.forEach((plugin) => {
      use(plugin.name, plugin.config);
    });
  }

  v.directive("westsecuan-click", click);
  v.directive("westsecuan-module", field);
  v.directive("westsecuan-click-disabled", clickDisabled);
  /**
   * 给vue实例添加可触发SPA PageView 函数
   */
  v.prototype.$westsecuanSPAView = spaPageView;

  /**
   * 给vue实例添加输入框搜索函数
   */
  v.prototype.$westsecuanInputSearch = inputSearch;
};

export default install;

declare module "vue/types/vue" {
  interface Vue {
    $westsecuanSPAView: typeof spaPageView;

    $westsecuanInputSearch: typeof inputSearch;
  }
}
