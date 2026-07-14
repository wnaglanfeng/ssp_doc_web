# 服务端配置

## 1. 简要描述
- 接口统一使用的编码为：UTF-8
- 当我们收到用户做单成功后，我们会实时反馈给你们服务器。
- 需要开发者提供一个自己应用获取用户领奖订单反馈地址，接口接收数据的方式：POST
- 接口采用http协议 post json数据 body 是一个json数据

## 2. 接口描述
当用户完成任务后，会根据你们提供的反馈地址，加上相关的参数（具体参数见参数返回表），回调给你们服务器

## 3. 推送参数表
### 3.1 示例数据：
```json
{
  "orderId": "b527074957b14a67b8a57d75c1cc560c",
  "targetId": "000000",
  "appKey": "",
  "taskId": "1e3d649471954e5faed7955bac87b09d",
  "taskName": "方糖试玩",
  "taskType": 0,
  "bundleId": "com.mobaso.bxsw",
  "userReward": 10,
  "totalRReward": 100,
  "deviceType": 0,
  "deviceInfo": "aa9ebaa2-856c-4bdf-b028-8ed5cd1f46fd",
  "timestamp": 1775578442134,
  "sign": "",
}
```
### 3.2 参数描述：
字段 | 类型 | 描述
--- | --- | ---
orderId | string | 订单ID，唯一标识一次任务
targetId | string | 目标用户ID
appKey | string | 媒体appKey
taskId | string | 任务ID
taskName | string | 任务名称
taskType | int | 任务类型：0-关键词，1-测评，2-其它
bundleId | string | 应用包名
userReward | int | 用户奖励，单位分
totalReward | int | 总奖励，单位分
deviceType | int | 设备类型，对应媒体的系统字段：0-Android，1-iOS
deviceInfo | string | 设备信息，oaid或者imei
timestamp | int | 时间戳，单位毫秒
sign | string | 签名，用于验证请求参数是否完整


### 3.3 参数签名规则：
- 对使用到的appSecret、appKey、 targetId、 taskId、 orderId、 timeStamp参数进行URL encode编码
- 按固定顺序：appSecret + appKey + targetId + taskId + orderId + timeStamp 拼接字符串
- 对拼接后的字符串进行MD5加密，并将结果转换为大写字符串
| 签名计算示例：

```java	
String unsigned = encoder.encode(appSecret, StandardCharsets.UTF_8) +
        encoder.encode(task.getAppKey(), StandardCharsets.UTF_8) +
        encoder.encode(task.getTargetId(), StandardCharsets.UTF_8) +
        encoder.encode(task.getTaskId(), StandardCharsets.UTF_8) +
        encoder.encode(task.getOrderId(), StandardCharsets.UTF_8) +
        encoder.encode(String.valueOf(task.getTimestamp()), StandardCharsets.UTF_8);

String sign = MD5.create().digestHex(unsigned).toUpperCase(); // 此处使用的是hutool库中的MD5类

```

### 3.4 返回结果

| 状态码 | 描述 |
| --- | --- |
| 200 | 成功 |
