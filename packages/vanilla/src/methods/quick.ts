/*
 * @Author: 周长升
 * @Date: 2022-02-17 22:25:13
 * @LastEditTime: 2022-02-20 18:33:12
 * @LastEditors: 周长升
 * @Description:
 */
import { State } from "../state";
import { logError } from "../utils";

type Quick = (name: QuickName, ...args: unknown[]) => void;

export type QuickName = "trackSPA" | "track" | "trackClick";

/**
 * 追踪
 * @param name - 名称
 * @param args - 参数
 */
export const quick: Quick = (name, ...args) => {
  try {
    switch (State.sdk.type) {
      case "sensors":
        {
          const quickName = {
            trackSPA: "autoTrackSinglePage",
            track: "autoTrack",
            trackClick: "trackAllHeatMap"
          }[name] ?? name;

          State.sdk.syncRef?.quick(quickName, ...args);
        }
        break;
    }
  } catch (e) {
    logError(e);
  }
};
