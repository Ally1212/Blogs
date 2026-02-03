# My Blog

基于 [Astro](https://astro.build) + [AstroPaper](https://github.com/satnaing/astro-paper) 的个人博客。

## 使用

```bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 构建
npm run build

# 预览构建结果
npm run preview
```

## 写文章

在 `src/content/blog/` 目录下创建 `.md` 文件：

```markdown
---
title: 文章标题
description: 文章描述
pubDatetime: 2024-01-01T00:00:00Z
tags:
  - 标签1
  - 标签2
---

正文内容...
```

## 功能

- 中英文切换
- 深色/浅色模式
- 文章搜索
- 标签分类
- RSS 订阅

## 目录结构

```
src/
├── content/blog/   # 博客文章
├── components/     # 组件
├── layouts/        # 布局
├── pages/          # 页面
├── i18n/           # 国际化
└── config.ts       # 站点配置
```
