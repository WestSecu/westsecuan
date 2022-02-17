/*
 * @Author: 周长升
 * @Date: 2022-02-17 15:02:03
 * @LastEditTime: 2022-02-17 23:09:38
 * @LastEditors: 周长升
 * @Description:
 */
import { State } from "../state";
import { ClickTrackAttr, ClickTrackAttrKey } from "../sdk";

type Init = (para: InitParam) => void;

export type InitParamHeatMap = {
  clickmap?: string;

  scroll_notice_map?: string;

  track_attr?: string[];

  custom_property?: (ele: HTMLElement) => Record<string, unknown>;

  [key: string]: unknown;
};
export type InitParam = Record<string, unknown> & {
  sdk_url?: string;

  heatmap_url?: string;

  is_track_single_page?: boolean;

  use_client_time?: boolean;

  show_log?: boolean;

  /**
   * 服务端接受地址
   */
  server_url?: string;

  heatmap?: InitParamHeatMap;

  [key: string]: unknown;
};

/**
 * 初始化sdk
 * @param para - 配置参数
 */
export const init: Init = (para: InitParam) => {
  switch (State.sdk?.type) {
    case "sensors":
      {
        State.sdk?.ref.init({
          is_track_single_page: false,
          use_client_time: true,
          ...para,
          heatmap: {
            //是否开启点击图，默认 default 表示开启，自动采集 $WebClick 事件，可以设置 'not_collect' 表示关闭
            clickmap: "default",
            //是否开启触达注意力图，默认 default 表示开启，自动采集 $WebStay 事件，可以设置 'not_collect' 表示关闭
            scroll_notice_map: "default",
            track_attr: [ClickTrackAttr],
            custom_property: (
              element_target: HTMLElement
            ): Record<string, unknown> => {
              //比如您需要给有 data=test 属性的标签的点击事件增加自定义属性 name:'aa' ，则代码如下：
              const eleAttrs = element_target.getAttributeNames();
              const customProp: Record<string, unknown> = {};

              if (eleAttrs.indexOf(ClickTrackAttr) >= 0) {
                const key =
                  element_target.getAttribute(ClickTrackAttrKey) ||
                  "$element_content";
                const value =
                  element_target.getAttribute(ClickTrackAttr) ||
                  element_target.innerText;

                if (key && value != null) {
                  customProp[key] = value;
                }
              }

              return customProp;
            },
            ...para.heatmap,
          },
        });
      }
      break;
  }

  /* const defaultTrackAttrs = ["data-westsecuan"];
  const defaultSDKUrl =
    "https://cdn.jsdelivr.net/npm/sa-sdk-javascript@1.21.6/sensorsdata.min.js";
  const defaultHeatMapUrl =
    "https://cdn.jsdelivr.net/npm/sa-sdk-javascript@1.21.6/heatmap.min.js";
  const defaultName = "westsecuan";

  (function (para: InitParam) {
    const p = para.sdk_url;
    const n = para.name;
    const w = window;
    const d = window.document;
    const s = "script";
    let x = null;
    let y = null;

    // @ts-ignore
    w["WestSecuAN202202"] = n;
    // @ts-ignore
    w[n] =
      // @ts-ignore
      w[n] ||
      // @ts-ignore
      function (a) {
        return function () {
          // @ts-ignore
          (w[n]._q = w[n]._q || []).push([a, arguments]);
        };
      };
    var ifs = [
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
      // @ts-ignore
      w[n][ifs[i]] = w[n].call(null, ifs[i]);
    }
    // @ts-ignore
    if (!w[n]._t) {
      // @ts-ignore
      (x = d.createElement(s)), (y = d.getElementsByTagName(s)[0]);
      // @ts-ignore
      x.async = 1;
      // @ts-ignore
      x.src = p;
      // @ts-ignore
      w[n].para = para;
      y?.parentNode?.insertBefore(x, y);
    }
  })({
    sdk_url: defaultSDKUrl,
    heatmap_url: defaultHeatMapUrl,
    name: defaultName,
    is_track_single_page: false,
    use_client_time: true,
    show_log: para.show_log,
    server_url: para.server_url,
    ...para,
    heatmap: {
      //是否开启点击图，默认 default 表示开启，自动采集 $WebClick 事件，可以设置 'not_collect' 表示关闭
      clickmap: "default",
      //是否开启触达注意力图，默认 default 表示开启，自动采集 $WebStay 事件，可以设置 'not_collect' 表示关闭
      scroll_notice_map: "default",
      track_attr: defaultTrackAttrs,
      custom_property: function (element_target) {
        //比如您需要给有 data=test 属性的标签的点击事件增加自定义属性 name:'aa' ，则代码如下：
        const eleAttrs = element_target.getAttributeNames();
        const customProp: Record<string, unknown> = {};

        defaultTrackAttrs.forEach((trackAttr) => {
          if (eleAttrs.indexOf(trackAttr) >= 0) {
            var key =
              element_target.getAttribute(trackAttr + "-key") ||
              "$element_content";
            var value =
              element_target.getAttribute(trackAttr) ||
              element_target.innerText;

            if (key && value != null) {
              customProp[key] = value;
            }
          }
        });

        return customProp;
      },
      ...para.heatmap,
    },
  }); */
};
