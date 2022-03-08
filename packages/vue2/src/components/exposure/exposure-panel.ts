/*
 * @Author: 周长升
 * @Date: 2022-03-07 09:19:49
 * @LastEditTime: 2022-03-07 14:05:16
 * @LastEditors: 周长升
 * @Description:
 */
import Vue from "vue";

import {
  ExposureComponent,
  ExposureConfigMode,
  ExposureElement,
} from "@westsecuan/vanilla";

type DataType = {
  exposureIns: ExposureComponent | null;
};

type MethodsType = {};

type ComputedType = {};

type PropsType = {
  /** 模式 */
  mode?: ExposureConfigMode;

  /**
   * 间隔时间（毫秒）
   */
  interval?: number;

  /** 是否首次渲染触发（默认触发） */
  firstRenderTrigger?: boolean;

  /** 是否首次渲染触发延迟时间（默认500毫秒） */
  firstRenderTriggerDelay?: number;
};

type VueContext = DataType & MethodsType & ComputedType & PropsType & Vue;

export default Vue.extend<DataType, MethodsType, ComputedType, PropsType>({
  name: "exposure-panel",
  props: {
    mode: {
      default: "bottomLeft",
    },
    interval: {
      default: 1000,
      type: Number,
    },
    firstRenderTrigger: {
      default: true,
      type: Boolean,
    },
    firstRenderTriggerDelay: {
      default: 500,
      type: Number,
    },
  },
  data: () => {
    return {
      exposureIns: null,
    };
  },
  provide() {
    const thiz: VueContext = this;

    return {
      addExposureChild(id: string, element: ExposureElement) {
        if (thiz.exposureIns) {
          thiz.exposureIns.addElement(id, element);
        }
      },

      removeExposureChild(id: string) {
        if (thiz.exposureIns) {
          thiz.exposureIns.removeElement(id);
        }
      },
    };
  },

  beforeDestroy() {
    const thiz: VueContext = this;

    if (thiz.exposureIns) {
      thiz.exposureIns.destroy();
    }
  },
  mounted() {
    const thiz: VueContext = this;

    thiz.$nextTick(() => {

      thiz.exposureIns = new ExposureComponent({
        mode: thiz.mode,
        intervalTime: thiz.interval,
      });


      // 是否首次触发执行
      if (thiz.firstRenderTrigger) {
        setTimeout(() => {
          thiz.exposureIns.triggerScroll();
        }, thiz.firstRenderTriggerDelay);
      }
    });
  },
  render(h) {
    const thiz: VueContext = this;
    return h("div", {}, [thiz.$slots.default]);
  },
});
