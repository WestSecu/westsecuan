/*
 * @Author: 周长升
 * @Date: 2022-03-07 09:20:00
 * @LastEditTime: 2022-03-07 13:21:38
 * @LastEditors: 周长升
 * @Description:
 */
import Vue from "vue";

import { ExposureElement, guid } from "@westsecuan/vanilla";

type DataType = {
  exposureId: string;
};

type MethodsType = {
  /** 增加曝光元素 */
  addExposureChild: (id: string, element: ExposureElement) => void;

  /** 移除曝光元素 */
  removeExposureChild: (id: string) => void;
};

type ComputedType = {};

type PropsType = {
  /**
   * 曝光元素名称
   */
  name: string;

  /**
   * 自定义属性
   */
  customProperty: Record<string, string | number | boolean>;
};

type VueContext = DataType & MethodsType & ComputedType & PropsType & Vue;

export default Vue.extend<DataType, MethodsType, ComputedType, PropsType>({
  name: "exposure-child",
  props: {
    name: {
      default: "",
      type: String,
    },
    customProperty: {
      default: () => ({}),
      type: Object,
    }
  },
  data: () => {
    return {
      exposureId: "",
    }
  },
  inject: ["addExposureChild", "removeExposureChild"],
  beforeDestroy() {
    const thiz: VueContext = this;

    thiz.removeExposureChild(thiz.exposureId);
  },
  mounted() {
    const thiz: VueContext = this;

    thiz.exposureId = guid();

    thiz.$nextTick(() => {
      thiz.addExposureChild(thiz.exposureId, {
        dom: thiz.$el as HTMLElement,
        name: thiz.name,
        custom_property: {
          ...thiz.customProperty,
        },
      });
    });
  },
  render(h) {
    const thiz: VueContext = this;
    return h("div", {}, [thiz.$slots.default]);
  },
});
