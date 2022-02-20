/*
 * @Author: 周长升
 * @Date: 2022-02-19 22:15:44
 * @LastEditTime: 2022-02-19 22:18:19
 * @LastEditors: 周长升
 * @Description:
 */

/** 页面 path */
export type PagePath = {
  /** 当前页面地址 pathname */
  $url_path: string;
};

/**
 * 获取当前页面地址 path
 */
export function findPagePath(): PagePath {
  return {
    $url_path: window.location.pathname,
  };
}
