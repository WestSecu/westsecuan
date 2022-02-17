/*
 * @Author: 周长升
 * @Date: 2022-02-17 21:39:11
 * @LastEditTime: 2022-02-18 00:47:48
 * @LastEditors: 周长升
 * @Description:
 */
import sa from "sa-sdk-javascript";

export type Sensors = {
  /**
   * 初始化
   */
  init: typeof sa.init;

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
    * 注册页面属性
    */
   registerPage: typeof sa.registerPage;
};
