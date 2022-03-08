/*
 * @Author: 周长升
 * @Date: 2022-02-17 21:39:11
 * @LastEditTime: 2022-03-02 10:34:23
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

  /**
   * 使用插件
   */
  use: (...args: unknown[]) => void;
};
