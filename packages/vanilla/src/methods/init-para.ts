/*
 * @Author: 周长升
 * @Date: 2022-02-19 18:50:58
 * @LastEditTime: 2022-02-19 18:54:29
 * @LastEditors: 周长升
 * @Description:
 */
import { State } from "../state";
import { logError } from "../utils";

type InitPara = (para: InitParam) => void;

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
 * 初始化参数
 * @param para - 配置参数
 */
export const initPara: InitPara = (para: InitParam) => {
  try {
    switch (State.sdk.type) {
      case "sensors":
        {
          State.sdk.syncRef?.initPara({
            ...para,
          });
        }
        break;
    }
  } catch (e) {
    logError(e);
  }
};
