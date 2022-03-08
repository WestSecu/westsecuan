/*
 * @Author: 周长升
 * @Date: 2022-02-19 20:58:34
 * @LastEditTime: 2022-02-19 21:59:12
 * @LastEditors: 周长升
 * @Description:
 */
import { parseHost } from '../utils';

/** 页面refferer */
export type PageRefferer = {
  /** host */
  $referrer_host: string;

  /** 地址 */
  $referrer: string;
};

/**
 * 根据记录的浏览页面查找对应的refferer 如果为空则取location
 * @param curPageRefferer
 * @returns
 */
export function findPageRefferer(curPageRefferer: string): PageRefferer {
  let lastReferrer = '';
  let lastReferrerHost = '';

  if (curPageRefferer) {
    lastReferrer = curPageRefferer;
    lastReferrerHost = parseHost(lastReferrer);
  } else if (window.location.href) {
    lastReferrer = window.location.href;
    lastReferrerHost = parseHost(lastReferrer);
  }

  return {
    $referrer: lastReferrer,
    $referrer_host: lastReferrerHost
  }
}
