/*
 * @Author: 周长升
 * @Date: 2022-03-04 15:05:40
 * @LastEditTime: 2022-03-07 14:01:47
 * @LastEditors: 周长升
 * @Description:
 */
import { exposure } from "../methods";

/** 检查元素曝光模式（左上角、左下角、左上角以及左下角） */
export type ExposureConfigMode = "topLeft" | "bottomLeft" | "topBottomLeft";

export type ExposureConfig = {
  /** 检查元素曝光模式（左上角、左下角、左上角以及左下角） */
  mode?: ExposureConfigMode;

  /** 间隔时间，默认1000ms */
  intervalTime?: number;
};

export type ExposureElement = {
  /** dom元素 */
  dom: HTMLElement;

  /** 元素名称 */
  name: string;

  /** 自定义元素 */
  custom_property?: Record<string, unknown>;
};

/** 曝光组件类 */
export class ExposureComponent {
  /** 曝光的元素列表 */
  private elements = new Map<string, ExposureElement>();

  /** 模块模式 */
  private mode: ExposureConfig["mode"] = "bottomLeft";

  /** timer */
  private executeTimer: number | null = null;

  /** 执行时间间隔 */
  private executeTimerInterval = 1000;

  constructor(config: ExposureConfig) {
    const modes: ExposureConfig["mode"][] = [
      "bottomLeft",
      "topBottomLeft",
      "topLeft",
    ];

    this.mode = modes.indexOf(config.mode) ? config.mode : this.mode;

    this.executeTimerInterval =
      config?.intervalTime ?? this.executeTimerInterval;

    this.triggerScroll = this.triggerScroll.bind(this);

    this.addDocumentElementListener();
  }

  /** 添加元素函数 */
  addElement(id: string, element: ExposureElement): void {
    if (!this.elements.has(id)) {
      this.elements.set(id, element);
    }
  }

  /** 添加元素函数 */
  removeElement(id: string): void {
    this.elements.delete(id);
  }

  /** 销毁处理函数 */
  destroy(): void {
    this.elements.clear();

    this.removeDocumentElementListener();
  }

  /**
   * 触发滚动检测是否有元素曝光
   */
  triggerScroll(): void {
    if (this.executeTimer == null) {
      // @ts-ignore
      this.executeTimer = setTimeout(() => {
        this.executeExposureElement();
        this.executeTimer = null;
      }, this.executeTimerInterval);
    }
  }

  /**
   * 执行曝光逻辑
   */
  private executeExposureElement(): void {
    const docEle = window.document.documentElement;
    const docEleRect = docEle.getBoundingClientRect();
    const docEleHeight = docEleRect.height;

    this.elements.forEach((element) => {
      const { name, dom, custom_property } = element;
      const domRect = dom.getBoundingClientRect();

      const isMatchedTopLeftDetect =
        domRect.top > 0 && domRect.top < docEleHeight;
      const isMatchedTopBottomDetect =
        domRect.top + domRect.height > 0 &&
        domRect.top + domRect.height < docEleHeight;

      const isMatchedTopLeft =
        this.mode === "topLeft" && isMatchedTopLeftDetect;
      const isMatchedBottomLeft =
        this.mode === "bottomLeft" && isMatchedTopBottomDetect;
      const isMatchedTopBottomLeft =
        this.mode === "topBottomLeft" &&
        isMatchedTopLeftDetect &&
        isMatchedTopBottomDetect;

      if (isMatchedTopLeft || isMatchedBottomLeft || isMatchedTopBottomLeft) {
        exposure(
          {
            value: name,
            element: dom,
          },
          custom_property
        );
      }
    });
  }

  private addDocumentElementListener(): void {
    window.document.addEventListener("scroll", this.triggerScroll, {
      passive: true,
    });
  }

  private removeDocumentElementListener(): void {
    window.document.removeEventListener("scroll", this.triggerScroll);
  }
}

export default ExposureComponent;
