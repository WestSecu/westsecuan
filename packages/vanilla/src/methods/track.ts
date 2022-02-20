/*
 * @Author: 周长升
 * @Date: 2022-02-18 00:42:50
 * @LastEditTime: 2022-02-19 22:18:44
 * @LastEditors: 周长升
 * @Description:
 */
import { State } from "../state";
import { logError } from "../utils";
import { findPageRefferer, findPagePath } from "../helpers";

type Track = (trackType: TrackType, ...args: unknown[]) => void;

export type TrackType = "pageview" | "click";

/**
 * 追踪
 * @param trackType - 名称
 * @param args - 参数
 */
export const track: Track = (trackType: TrackType, ...args: unknown[]) => {
  try {
    switch (State.sdk.type) {
      case "sensors":
        {
          const trackName =
            {
              pageview: "$pageview",
              click: "$WebClick",
            }[trackType] ?? trackType;

          // 记录每次pageview，并查找refferer
          if (trackType === "pageview" && window.location) {
            const customProp = (args[0] || (args[0] = {})) as Record<
              string,
              unknown
            >;
            Object.assign(
              customProp,
              findPageRefferer(State.spaPageViewRefferer),
              findPagePath()
            );

            State.spaPageViewRefferer = window.location.href;
          }

          State.sdk.syncRef?.track(
            trackName,
            // @ts-ignore
            ...args
          );
        }
        break;
    }
  } catch (e) {
    logError(e);
  }
};
