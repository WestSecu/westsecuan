<!--
 * @Author: 周长升
 * @Date: 2022-02-16 13:57:41
 * @LastEditTime: 2022-03-08 22:00:50
 * @LastEditors: 周长升
 * @Description:
-->


<p align="center">
  <a href="https://npmcharts.com/compare/@westsecuan/vanilla?minimal=true"><img src="https://img.shields.io/npm/dm/@westsecuan/vanilla.svg?sanitize=true" /></a>
  <a href="https://www.npmjs.com/package/@westsecuan/vanilla"><img src="https://img.shields.io/npm/v/@westsecuan/vanilla.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/@westsecuan/vanilla"><img src="https://img.shields.io/npm/l/@westsecuan/vanilla.svg?sanitize=true" alt="License"></a>
</p>

<hr>

## Documentation

Get started with Westsecuan, learn the fundamentals and explore advanced topics on documentation website.

## Introduction

Westsecuan is an adapter that eliminating the differences in variety of libraries for tracking user actions and unifing the workflow, so that developers can quickly apply it to vanilla JavaScript projects or Vue projects.

**THE TRACKING SDKS SUPPORTED AS BELOW:**
| Package Name | Version | Description |
| -- | -- | -- |
| [sa-sdk-javascript](https://www.npmjs.com/package/sa-sdk-javascript) | ^1.13.10 |  |

## Development Setup

### Prerequisites

- Install [Node.js](https://nodejs.org/) which includes [Node Package Manager](https://www.npmjs.com/get-npm)

### Setting up on [Vue2](https://github.com/vuejs/vue/tree/v2.6.14) project

Install the packages

```bash
npm install @westsecuan/vanilla @westsecuan/vue2 -S
```

Setting up

```TypeScript
import Vue from 'vue';

import Westsecuan, { InstallOptions } from '@westsecuan/vue2';


Vue.use(Westsecuan, {
  registerPageParam: {
    prefix_platform: 'h5',
    prefix_version: '1.0.0'
  },
  initParam: {
    show_log: process.env.NODE_ENV !== 'production'
  },
  sdk: {
    syncRef: window['sensorsDataAnalytic201505'],

    type: 'sensors'
  },
  createOption: {
    enabled: process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test',
    customEventKeyPrefix: 'PREFIX_',
    customPropKeyPrefix: 'prefix_'
  },
  plugins: [{ name: 'pageLeave' }, { name: 'pageLoad' }]
} as InstallOptions);
```


<!-- ## Quickstart -->

## Changelog
[Learn about the latest improvements.](./CHANGELOG.md)

## LICENSE

[GNU GPL V3](https://opensource.org/licenses/GPL-3.0)
