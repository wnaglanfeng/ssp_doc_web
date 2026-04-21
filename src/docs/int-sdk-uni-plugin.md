# Uni-app native插件

## 原生语言插件
支持以`原生语言插件`的方式导入SDK：`uni.requireNativePlugin('GYSdk')`。

## 导入步骤
示例项目源代码已上传至github，下载并解压缩到空白目录。
> github: https://github.com/gbohao/gysdk-uni-app-demo

### 1. 第一步：将插件添加到项目中
将示例项目中的`nativeplugins/GYSdk`目录全部复制到自己的项目中。
![appKey](/images/sdk/uni_plugin_copy.png)

### 2. 第二步：使用插件
在需要使用SDK的地方，调用插件的方法：
```javascript
const GYSdk = uni.requireNativePlugin('GYSdk');
```

### 3. 第三步：启动SDK
启动SDK的方法，例如：
```javascript
GYSdk.start({
        appKey: this.config.appKey,
        targetId: this.config.targetId,
        oaid: this.config.oaid,
        wxAppId: this.config.wxAppId || '',
        themeColor: this.config.themeColor || '',
        showAppBar: this.config.showAppBar,
        showBottomNaviga: this.config.showBottomNavigation,
        title: '亘元任务'
    }, (result) => {
        // 自行实现所需逻辑
        this.loading = false
        if (result && result.code === 0) {
            uni.showToast({ title: '启动成功', icon: 'success' })
        } else {
            uni.showToast({ title: result.msg || '启动失败', icon: 'none' })
        }
})
```
具体的配置参数详见 [配置参数](int-sdk-android#6.配置参数)