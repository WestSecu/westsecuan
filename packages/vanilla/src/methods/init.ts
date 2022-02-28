/*
 * @Author: 周长升
 * @Date: 2022-02-17 15:02:03
 * @LastEditTime: 2022-02-28 09:27:36
 * @LastEditors: 周长升
 * @Description:
 */
import { State } from "../state";
import { ClickTrackAttr, ClickDisabledTrackAttr } from "../sdk";
import { logError } from "../utils";
import { findField } from "../helpers";
import { InitParam } from "./init-para";

type Init = (para: InitParam) => void;

/**
 * 初始化sdk
 * @param para - 配置参数
 */
export const init: Init = (para: InitParam) => {
  try {
    switch (State.sdk.type) {
      case "sensors":
        {
          State.sdk.syncRef?.init({
            is_track_single_page: false,
            use_client_time: true,
            show_log: false,
            ...para,

            heatmap: {
              //是否开启点击图，默认 default 表示开启，自动采集 $WebClick 事件，可以设置 'not_collect' 表示关闭
              clickmap: "default",
              //是否开启触达注意力图，默认 default 表示开启，自动采集 $WebStay 事件，可以设置 'not_collect' 表示关闭
              scroll_notice_map: "default",
              track_attr: [ClickTrackAttr],
              collect_element: function(element_target){
                // 如果这个元素有属性禁用，不采集。
                if(element_target.getAttribute(ClickDisabledTrackAttr) === 'true'){
                  return false;
                }else{
                  return true;
                }
              },
              custom_property: (
                element_target: HTMLElement
              ): Record<string, unknown> => {
                //比如您需要给有 data=test 属性的标签的点击事件增加自定义属性 name:'aa' ，则代码如下：
                const eleAttrs = element_target.getAttributeNames();
                const customProp: Record<string, unknown> = {};

                const elementNodeName = (
                  element_target.nodeName || ""
                ).toLowerCase();

                if (eleAttrs.indexOf(ClickTrackAttr) >= 0) {
                  const value =
                    element_target.getAttribute(ClickTrackAttr) ||
                    element_target.innerText;

                  if (value != null) {
                    customProp["$element_content"] = value;
                  }
                } else if (
                  ["input", "textarea"].indexOf(elementNodeName) >= 0
                ) {
                  const eleVal = (element_target as HTMLInputElement).value;

                  if (eleVal) {
                    customProp["$element_content"] = eleVal;
                  }
                }

                // 是否要查找父级关联module名称
                if (State.fundModule) {
                  const result = findField(element_target)

                  Object.assign(customProp, result);
                }

                return customProp;
              },
              ...para.heatmap,
            },
          });
        }
        break;
    }
  } catch (e) {
    logError(e);
  }
};
