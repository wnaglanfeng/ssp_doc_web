# 快速开始

欢迎使用亘元有量组件库！本节将指导您快速开始使用我们的组件库。

## 安装

使用 npm 或 yarn 安装组件库：

```bash
npm install 亘元有量
# 或
yarn add 亘元有量
```

## 基本用法

在您的 React 项目中引入组件：

```jsx
import React from 'react';
import { Button, Card, Input } from '亘元有量';

function App() {
  return (
    <Card title="欢迎使用">
      <Input placeholder="请输入内容" />
      <Button type="primary">提交</Button>
    </Card>
  );
}

export default App;
```

## 主题定制

组件库支持主题定制：

```jsx
import { ThemeProvider } from '亘元有量';

const customTheme = {
  primaryColor: '#1890ff',
  borderRadius: '8px',
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px'
  }
};

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      {/* 您的应用组件 */}
    </ThemeProvider>
  );
}
```

## 注意事项

- 确保您的项目使用 React 18.0.0 或更高版本
- 推荐使用 TypeScript 以获得更好的类型支持
- 在生产环境使用前请充分测试组件功能

## 下一步

- 查看 [设计原则](/doc/design-principles) 了解组件设计理念
- 学习 [安装指南](/doc/installation) 获取详细配置说明
- 探索 [色彩系统](/doc/color-system) 了解设计规范