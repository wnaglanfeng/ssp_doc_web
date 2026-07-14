# Uni-app-x uts 插件

## UTS 插件
支持以 `UTS插件` 的方式导入 SDK，适用于 uni-app-x 项目。插件基于亘元有量 Android SDK 的 UTS 封装模块，为 uni-app-x 应用提供统一的入口，从 App 页面内直接拉起亘元有量的业务页面。

> 插件市场: https://ext.dcloud.net.cn/plugin?id=28192

## 使用前准备

- **必须使用自定义基座**：由于插件包含本地 AAR 文件和多项 Android 原生依赖，标准基座无法保证功能生效，必须使用自定义基座或云端自定义包。
- **获取必要参数**：需从亘元有量平台获取 `appKey` 和 `targetId`。
- **设备标识**：推荐传入 OAID，若无法获取，插件会自动降级使用 `Android ID`。uni-app-x 项目可使用免费的 [OAID UTS 插件](https://ext.dcloud.net.cn/plugin?id=28098) 获取。详见 [OAID 获取指南](reference-oaid)。
- **微信能力**：如果业务需要微信相关能力，需传入 `wxAppId`，否则可留空。

## 导入步骤

### 1. 第一步：从插件市场导入插件
访问插件市场页面，将插件导入到项目中：

![uni uts plugin market](/images/docs/2026-06-11_184321_090.png)

### 2. 第二步：使用插件
在需要使用 SDK 的地方，导入并调用插件方法：

```javascript
// #ifdef APP-ANDROID
import { start } from '@/uni_modules/ad-youliang-sdk'
import type { GYStartOptions } from '@/uni_modules/ad-youliang-sdk/utssdk/interface.uts'
// #endif
```

### 3. 第三步：启动SDK
启动 SDK 的方法：

```javascript
// #ifdef APP-ANDROID
const options : GYStartOptions = {
    appKey: '你的appKey',
    targetId: '你的用户ID',
    oaid: '优先传oaid',
    imei: '',
    wxAppId: '',
    themeColor: '#FE2C55',
    title: '应用试玩',
    showAppBar: true
}
start(options)
// #endif
```

### 推荐封装方式
建议将启动逻辑封装成一个业务启动器，集中管理配置：

```javascript
// #ifdef APP-ANDROID
import { start as startGYSdk } from '@/uni_modules/ad-youliang-sdk'
import type { GYStartOptions } from '@/uni_modules/ad-youliang-sdk/utssdk/interface.uts'
// #endif

const GYSDK_APP_KEY = '你的appKey'

export function openGYSdkTask(targetId : string, title : string, oaid : string) : boolean {
  // #ifdef APP-ANDROID
  const options : GYStartOptions = {
    appKey: GYSDK_APP_KEY,
    targetId: targetId,
    oaid: oaid,
    imei: '',
    wxAppId: '',
    themeColor: '#FE2C55',
    title: title,
    showAppBar: true
  }
  return startGYSdk(options)
  // #endif

  return false
}
```

## 配置参数

| 参数 | 类型 | 说明 |
| :--- | :--- | :--- |
| `appKey` | `string` | 由渠道后台分配的应用标识，必填 |
| `targetId` | `string` | 目标用户ID，建议传入业务系统中的用户唯一标识，必填 |
| `oaid` | `string` | 匿名设备标识符，推荐传入。若为空，SDK内部回退到 `Android ID` |
| `imei` | `string` | 设备IMEI。若无明确需求可传空字符串 |
| `wxAppId` | `string` | 微信应用ID，仅在需要微信相关能力时传入 |
| `themeColor` | `string` | 主题色，用于控制页面UI风格，例如 `'#FE2C55'` |
| `title` | `string` | 页面标题，例如 `'应用试玩'` |
| `showAppBar` | `boolean` | 是否显示顶部栏，默认 `true` |

## 返回值

`start(options)` 方法返回 `boolean`：
- `true`：SDK 反射调用成功，页面已发起启动
- `false`：启动失败，可能原因包括 Activity 缺失、依赖未生效、AAR 未打入或当前环境非自定义基座

## 常见问题

| 问题 | 原因 | 解决方案 |
| :--- | :--- | :--- |
| 提示缺少 `SwipeRefreshLayout` 或 `HttpLoggingInterceptor` | 原生依赖未正确打入运行环境 | 确认正在使用最新制作并安装的自定义基座 |
| 启动时报 AAR 未生效 | AAR 文件缺失或基座未更新 | 检查 `utssdk/app-android/libs/gysdk-v0.1.aar` 是否存在，并重新制作安装自定义基座 |
| 没有 OAID 能否启动？ | 可以 | 插件会自动回退到 `Android ID` 作为设备标识 |

**调试建议**：在启动前打印 `targetId`、`oaid` 等参数；出现失败时，优先查看 Android 控制台中带 `[gysdk]` 前缀的日志。
