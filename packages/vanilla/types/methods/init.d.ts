/*
 * @Author: 周长升
 * @Date: 2022-02-17 23:28:20
 * @LastEditTime: 2022-02-18 01:04:32
 * @LastEditors: 周长升
 * @Description:
 */
declare type Init = (para: InitParam) => void;
export declare type InitParamHeatMap = {
    clickmap?: string;
    scroll_notice_map?: string;
    track_attr?: string[];
    custom_property?: (ele: HTMLElement) => Record<string, unknown>;
    [key: string]: unknown;
};
export declare type InitParam = Record<string, unknown> & {
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
export declare const init: Init;
export {};
