# 设备标识获取指南

本文档介绍各平台设备标识的获取方式，包括 Android OAID、iOS IDFA 以及鸿蒙 OAID。

## 什么是设备标识

设备标识用于在保护用户隐私的前提下唯一标识用户设备，替代 IMEI 等传统隐私敏感标识。不同平台有不同的设备标识方案：

- **Android**：OAID（Open Anonymous Device Identifier），由移动安全联盟（MSA）推出
- **iOS**：IDFA（Identifier for Advertisers），由 Apple 提供
- **鸿蒙**：OAID，由华为提供

相比传统 IMEI，设备标识具有以下优势：

- **隐私合规**：用户可随时重置或关闭，符合日益严格的隐私法规要求
- **覆盖广泛**：主流国产手机厂商（华为、小米、OPPO、vivo 等）均已支持
- **稳定可靠**：在一定时间内保持稳定，适合作为设备标识使用

## Android 原生开发

### 方式一：移动安全联盟统一 SDK（推荐）

移动安全联盟提供了统一的 OAID SDK，支持主流手机厂商，集成后可通过统一接口获取 OAID。

> 官方地址：http://www.msa-alliance.cn/

#### 集成步骤

1. 下载 [移动安全联盟 OAID SDK](http://www.msa-alliance.cn/)，将 `msa_mdid_x.x.x.aar` 放入项目 `libs` 目录
2. 在 `build.gradle` 中添加依赖：

```groovy
implementation files('libs/msa_mdid_x.x.x.aar')
```

3. 调用方式示例：

```java
// 初始化
MdidSdkHelper.InitSdk(context, new IIdentifierListener() {
    @Override
    public void OnSupport(boolean support, IdSupplier idSupplier) {
        if (support && idSupplier != null) {
            String oaid = idSupplier.getOAID();
            // 将 oaid 传入 GYSdk 配置
        }
    }
});
```

### 方式二：各厂商单独获取

如果不需要覆盖全部厂商，也可以针对主流品牌单独获取：

| 厂商 | 获取方式 |
| :--- | :--- |
| 华为 | 集成华为 HMS Core，调用 `HuaweiId.getOAID()` |
| 小米 | 集成小米 SDK，调用 `MiId.getOAID()` |
| OPPO | 集成 OPPO SDK，调用 `OppOaid.getOAID()` |
| vivo | 集成 vivo SDK，调用 `VivoOaid.getOAID()` |

### 方式三：使用第三方开源库

推荐使用开源项目 [Android_CN_OAID](https://github.com/gzu-liyujiang/Android_CN_OAID)，该项目支持获取国内主流手机厂商的 OAID，集成简单，覆盖全面。

#### 集成方式

1. 在项目根目录 `build.gradle` 中添加仓库：

```groovy
allprojects {
    repositories {
        maven { url 'https://jitpack.io' }
    }
}
```

2. 在模块 `build.gradle` 中添加依赖：

```groovy
dependencies {
    implementation 'com.github.gzu-liyujiang:Android_CN_OAID:latest_version'
}
```

3. 调用示例：

```java
// 获取 OAID
DeviceIdentifier.getOAID(context, new IGetOaidCallback() {
    @Override
    public void onGetOaid(String oaid) {
        // 将 oaid 传入 GYSdk 配置
    }
});
```

## Uni-app-x 开发

对于 uni-app-x 项目，可使用 DCloud 插件市场提供的免费 UTS 插件获取 OAID：

> 插件市场: https://ext.dcloud.net.cn/plugin?id=28098

导入后即可在 uni-app-x 项目中直接调用获取 OAID，无需手动集成原生 SDK。

## 鸿蒙（HarmonyOS）开发

鸿蒙系统提供了 OAID 获取能力，开发者可通过华为官方 API 获取：

```java
import ohos.id.Identifier;

// 获取 OAID
Identifier identifier = new Identifier(context);
String oaid = identifier.getOAID();
```

> 更多信息参考华为官方文档：https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/identifier-oaid

## iOS 开发

iOS 系统使用 **IDFA**（Identifier for Advertisers，广告标识符）作为设备标识，功能上与 Android 的 OAID 类似：

```swift
import AdSupport

// 获取 IDFA
let idfa = ASIdentifierManager.shared().advertisingIdentifier.uuidString
```

### 注意事项

- 需要在 `Info.plist` 中添加 `NSUserTrackingUsageDescription` 权限描述
- iOS 14+ 需要通过 `ATTrackingManager.requestTrackingAuthorization` 请求用户授权
- 用户可在"设置 > 隐私 > 跟踪"中关闭跟踪，此时 IDFA 将返回全零字符串
- 建议同时获取 IDFV（Identifier for Vendor）作为降级方案：

```swift
import UIKit

// 获取 IDFV
let idfv = UIDevice.current.identifierForVendor?.uuidString
```

## 注意事项

- OAID / IDFA 的获取通常是**异步**的，建议在应用启动时尽早初始化，确保调用 SDK 前已获取到设备标识
- Android：部分厂商设备可能不支持 OAID，SDK 会自动降级使用 `Android ID`，不影响正常使用
- iOS：用户拒绝跟踪授权后 IDFA 不可用，可降级使用 IDFV
- 用户在系统设置中关闭"个性化广告推荐"后，OAID / IDFA 可能返回空值，这也是 SDK 自动降级的原因
- 首次安装应用时，设备标识可能需要一定时间才能获取到，建议做好重试机制
