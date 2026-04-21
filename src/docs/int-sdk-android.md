# Android SDK 接入

开发者拥有自己的Android应用，通过接入亘元有量的SDK实现丰富的广告集成。只需要增加一个入口，即可获得丰富的广告资源，进行广告变现。

## 1. 下载Android SDK
下载官方SDK，当前最新版为：v0.1
```text
https://cdn02.aso.igenyuan.com/sdk/gysdk-v0.1.aar
```
或者直接点击 [下载Android SDK](https://cdn02.aso.igenyuan.com/sdk/gysdk-v0.1.aar)。

## 2. 项目中引入SDK文件
将下载的SDK文件gysdk-x.x.aar，引入到您的Android项目的libs目录下，并设置依赖。其中x.x为SDK版本号，根据实际情况修改。
```groovy
implementation files('libs/gysdk-x.x.aar') 
```

## 3. 添加依赖
- 如果您的项目使用的是AndroidX库，请确保在您的`build.gradle`文件中添加以下依赖：
```groovy
dependencies {
    // 亘元有量sdk aar文件，根据实际文件名修改
    implementation files('libs/gysdk-x.x.aar') 

    implementation 'androidx.appcompat:appcompat:1.7.0'
    implementation 'androidx.appcompat.swiperefreshlayout:1.2.0'
    implementation 'com.google.android.material:material:1.12.0'
    // okhttp
    implementation "com.squareup.okhttp3:okhttp:4.12.0"
    implementation 'com.squareup.okhttp3:logging-interceptor:4.12.0'

    // retrofit
    implementation 'com.alibaba:fastjson:1.2.83'
    implementation "com.squareup.retrofit2:retrofit:2.9.0"
    implementation 'com.squareup.retrofit2:adapter-rxjava3:2.9.0'
    implementation 'com.squareup.retrofit2:converter-scalars:2.9.0'
    implementation 'com.squareup.retrofit2:converter-gson:2.9.0'

    // rxjava
    implementation "io.reactivex.rxjava3:rxjava:3.0.2"
    implementation "io.reactivex.rxjava3:rxandroid:3.0.2"

    // 加载图片
    implementation "com.github.bumptech.glide:glide:4.9.0"
    implementation 'jp.wasabeef:glide-transformations:4.3.0'

    // wechat
    implementation 'com.tencent.mm.opensdk:wechat-sdk-android:6.8.24'
}
```
## 4. 添加混淆
在您的`proguard-rules.pro`文件中添加以下规则：
```proguard
# SDK 内部类
-keep class com.gyyl.gysdk.** { *; }
-keep interface com.gyyl.gysdk.** { *; }

# FastJSON
-dontwarn com.alibaba.fastjson.**
-keep class com.alibaba.fastjson.** { *; }
-keep class com.alibaba.fastjson.annotation.** { *; }

# FastJSON 实体类（JSON 解析需要）
-keepclassmembers class * {
    @com.alibaba.fastjson.annotation.JSONField <fields>;
}

# Retrofit2 保留规则
-dontwarn retrofit2.**
-keep class retrofit2.** { *; }
-keepattributes Exceptions

# Retrofit Service 接口
-keepattributes Signature, InnerClasses, EnclosingMethod
-keepattributes RuntimeVisibleAnnotations, RuntimeVisibleParameterAnnotations
-keepclassmembers,allowshrinking,allowobfuscation interface * {
    @retrofit2.http.* <methods>;
}

# OkHttp3 保留规则
-dontwarn okhttp3.**
-dontwarn okio.**
-keep class okhttp3.** { *; }
-keep class okio.** { *; }
-keep interface okhttp3.** { *; }

# RxJava3 保留规则
-dontwarn io.reactivex.rxjava3.**
-keep class io.reactivex.rxjava3.** { *; }
-keepclassmembers class io.reactivex.rxjava3.** { *; }

# Glide 保留规则
-keep public class * implements com.bumptech.glide.module.GlideModule
-keep public class * extends com.bumptech.glide.module.AppGlideModule
-keep public enum com.bumptech.glide.load.ImageHeaderParser$** {
    **[] $VALUES;
    public *;
}
-keep class com.bumptech.glide.** { *; }
-dontwarn com.bumptech.glide.**

# Glide 使用的注解
-keep class com.bumptech.glide.load.annotation.** { *; }

# 微信SDK 保留规则
-keep class com.tencent.mm.opensdk.** { *; }
-keep class com.tencent.wxop.** { *; }
-dontwarn com.tencent.mm.opensdk.**
-dontwarn com.tencent.wxop.**

# OkDownload
-keep class com.gyyl.okdownload.** { *; }
-dontwarn com.gyyl.okdownload.**

# JSR 305 注解保留
-keepattributes javax.annotation.**
-keep class javax.annotation.** { *; }
-dontwarn javax.annotation.**

```

## 5. 配置权限
在您的`AndroidManifest.xml`文件中添加以下权限：
```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.REQUEST_INSTALL_PACKAGES" />
<uses-permission
    android:name="android.permission.INSTALL_PACKAGES"
    tools:ignore="ProtectedPermissions" />
<uses-permission android:name="android.permission.READ_PHONE_STATE" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.REORDER_TASKS" />
<uses-permission android:name="android.permission.READ_MEDIA_AUDIO" />
<uses-permission android:name="android.permission.READ_MEDIA_IMAGES" />
<uses-permission android:name="android.permission.READ_MEDIA_VIDEO" />
<uses-permission android:name="android.permission.POST_NOTIFICATIONS" />
<uses-permission
    android:name="android.permission.PACKAGE_USAGE_STATS"
    tools:ignore="ProtectedPermissions" />
```
## 6. 配置参数

```java
GYOption options = new GYOption();
// 配置appKey，必填
options.setAppKey("");
// 配置oaid，和imei必须至少有一个，推荐oaid
options.setOaid("");
// 配置imei，和oaid必须至少有一个，推荐oaid
options.setImei("");
// 配置用户唯一标识，必填
options.setTargetId("");
// 配置是否显示AppBar，默认true显示
options.setShowAppBar(true);
// 配置主题色
options.setThemeColor("#2196F3");
// 配置列表页面标题，默认"亘元有量"
options.setTitle("");
// 配置微信appId，如果需要打开微信小程序则必须设置
options.setWxAppId("");
```

## 7. 启动SDK
```java
GYSdk.start(context, options);
```

## 8. 常见问题说明
### 1. 为兼容更多版本的手机，官方SDK的最低版本为API21，对应Android 5.0 (Lollipop)。
### 2. 如果您项目的`targetSdkVersion`大于28，请为`AndroidManifest`文件中的`<application>`节点添加属性`android:requestLegacyExternalStorage="true"`，以确保在Android 10及以上版本上正常运行。
### 3. Android 13 以下sdk中需要使用到的动态权限包括`READ_EXTERNAL_STORAGE`及`READ_PHONE_STATE`，调用`GYSdk.start()`方法时sdk会去申请这两个权限
请确保在调用startSDK()方法前已经获取到了这两个动态权限，否则抛出异常。Android 13(API33)及以上READ_EXTERNAL_STORAGE权限已无效，需要申请以下权限：
```xml
<uses-permission android:name="android.permission.READ_MEDIA_AUDIO"/>
<uses-permission android:name="android.permission.READ_MEDIA_IMAGES"/>
<uses-permission android:name="android.permission.READ_MEDIA_VIDEO"/>
```