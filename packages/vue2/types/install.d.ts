import { PluginFunction } from "vue";
import { SDK, InitParam } from "@westsecuan/vanilla";
export declare type InstallOptions = {
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
export declare const install: PluginFunction<InstallOptions>;
