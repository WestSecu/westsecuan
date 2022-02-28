/*
 * @Author: 周长升
 * @Date: 2022-02-17 21:39:11
 * @LastEditTime: 2022-02-28 22:56:12
 * @LastEditors: 周长升
 * @Description:
 */

export type Sensors = Function & {
  /**
   * 初始化
   */
  init: (...args: unknown[]) => void;

  /**
   * 初始化参数
   */
  initPara: (...args: unknown[]) => void;

  /**
   * 追踪
   */
  track: (...args: unknown[]) => void;

  /**
   * 追踪
   */
  quick: (...args: unknown[]) => unknown;

  /**
   * 登陆
   */
  login: (...args: unknown[]) => void;

  /**
   * 登出
   */
  logout: (...args: unknown[]) => void;

  /**
   * 注册页面属性
   */
  registerPage: (...args: unknown[]) => void;
};

/** 创建sdk默认值 */
// export const createDefaultSensorSDK = (
//   name: string,
//   runningSdkFallback?: () => Record<string, unknown>
// ): Sensors => {
//   const sdkFactory: Sensors = Object.assign(function (cmd: string) {
//     return function (...args: unknown[]) {
//       // 如果有运行中的sdk，则使用运行中的
//       if (runningSdkFallback) {
//         const runningSdk = runningSdkFallback();
//         const cmdFunc = (runningSdk || {})[cmd];

//         if (typeof cmdFunc === "function") {
//           cmdFunc(...args);

//           return;
//         }

//         if (["init", "initPara"].indexOf(cmd) >= 0) {
//           sdkFactory["para"] = Object.assign({}, sdkFactory["para"], args[0]);
//         }
//       }

//       (sdkFactory["_q"] = sdkFactory["_q"] || []).push([cmd, args]);
//     };
//   });

//   const ifs = [
//     "init",
//     "initPara",
//     "track",
//     "quick",
//     "register",
//     "registerPage",
//     "registerOnce",
//     "clearAllRegister",
//     "trackSignup",
//     "trackAbtest",
//     "setProfile",
//     "setOnceProfile",
//     "appendProfile",
//     "incrementProfile",
//     "deleteProfile",
//     "unsetProfile",
//     "identify",
//     "login",
//     "logout",
//     "trackLink",
//     "clearAllRegister",
//   ];
//   for (let i = 0; i < ifs.length; i++) {
//     sdkFactory[ifs[i]] = sdkFactory.call(null, ifs[i]);
//   }

//   sdkFactory['para'] = {
//     name,
//     server_url: ''
//   };

//   return sdkFactory;
// };
