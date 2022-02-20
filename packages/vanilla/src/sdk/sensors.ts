/*
 * @Author: 周长升
 * @Date: 2022-02-17 21:39:11
 * @LastEditTime: 2022-02-20 18:17:09
 * @LastEditors: 周长升
 * @Description:
 */
import sa from "sa-sdk-javascript";

export type Sensors = Function & {
  /**
   * 初始化
   */
  init: typeof sa.init;

  /**
   * 初始化参数
   */
  initPara: typeof sa.init;

  /**
   * 追踪
   */
  track: typeof sa.track;

  /**
   * 追踪
   */
  quick: typeof sa.quick;

  /**
   * 登陆
   */
  login: typeof sa.login;

  /**
   * 登出
   */
  logout: typeof sa.logout;

  /**
   * 注册页面属性
   */
  registerPage: typeof sa.registerPage;

  /** 执行任务队列 */
  _q?: unknown[];
};

/** 创建sdk默认值 */
export const createDefaultSensorSDK = (
  runningSdkFallback?: () => Record<string, unknown>
): Sensors => {
  const sdkFactory: Sensors = Object.assign(function (cmd: string) {
    return function (...args: unknown[]) {
      // 如果有运行中的sdk，则使用运行中的
      if (runningSdkFallback) {
        const runningSdk = runningSdkFallback();
        const cmdFunc = runningSdk[cmd];

        if (typeof cmdFunc === "function") {
          cmdFunc(...args);

          return;
        }
      }

      (sdkFactory["_q"] = sdkFactory["_q"] || []).push([cmd, args]);
    };
  });

  const ifs = [
    "init",
    "initPara",
    "track",
    "quick",
    "register",
    "registerPage",
    "registerOnce",
    "clearAllRegister",
    "trackSignup",
    "trackAbtest",
    "setProfile",
    "setOnceProfile",
    "appendProfile",
    "incrementProfile",
    "deleteProfile",
    "unsetProfile",
    "identify",
    "login",
    "logout",
    "trackLink",
    "clearAllRegister",
  ];
  for (let i = 0; i < ifs.length; i++) {
    sdkFactory[ifs[i]] = sdkFactory.call(null, ifs[i]);
  }

  return sdkFactory;
};
