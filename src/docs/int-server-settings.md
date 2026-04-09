# 服务端配置

## 1. 与用户的分成比例设置

## 2. 服务端回调地址设置
- 目前SDK不支持提现系统，所以必须接入自有提现系统。
- 在您的后台服务中添加可直接访问的POST请求地址，用于接收任务成功回调。
- 接收的参数为String类型的JSON数据，请自行解析妥善存储。
### 回调参数
示例数据：
```json
{
  "order_id": "b527074957b14a67b8a57d75c1cc560c",
  "target_id": "000000",
  "app_key": "",
  "task_id": "1e3d649471954e5faed7955bac87b09d",
  "task_name": "果冻试玩",
  "task_type": 0,
  "bundle_id": "com.mobaso.bxsw",
  "user_reward": 10,
  "total_reward": 100,
  "device_type": 0,
  "device_info": "aa9ebaa2-856c-4bdf-b028-8ed5cd1f46fd",
  "time_stamp": 1775578442134,
  "sign": "",
}
```
字段 | 类型 | 描述
--- | --- | ---
order_id | string | 订单ID，唯一标识一次任务
target_id | string | 目标用户ID
app_key | string | 媒体appKey
task_id | string | 任务ID
task_name | string | 任务名称
task_type | int | 任务类型：
bundle_id | string | 应用包名
user_reward | int | 用户奖励，单位分
total_reward | int | 总奖励，单位分
device_type | int | 设备类型：0-Android，1-iOS
device_info | string | 设备信息，oaid或者imei
time_stamp | int | 时间戳，单位毫秒
sign | string | 签名，用于验证请求参数是否完整

***注意***：
- 签名计算规则：
  - 对使用到的appKey、 targetId、 taskId、 orderId、 timeStamp参数进行URL encode编码
  - 按固定顺序：appKey + targetId + taskId + orderId + timeStamp 拼接字符串
  - 对拼接后的字符串进行MD5加密，并将结果转换为大写字符串
- 签名计算示例：
```java
String unsigned = "efc9d9e32b" +
        encoder.encode(task.getAppKey(), StandardCharsets.UTF_8) +
        encoder.encode(task.getTargetId(), StandardCharsets.UTF_8) +
        encoder.encode(task.getTaskId(), StandardCharsets.UTF_8) +
        encoder.encode(task.getOrderId(), StandardCharsets.UTF_8) +
        encoder.encode(String.valueOf(task.getTimestamp()), StandardCharsets.UTF_8);

String sign = MD5.create().digestHex(unsigned).toUpperCase(); // 此处使用的是hutool库中的MD5类

```

### 返回结果
只需成功时响应http状态码200即可。