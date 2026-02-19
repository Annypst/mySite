# 个人博客网站模板

基于 Next.js 15 + Tailwind CSS 3 + Velite.js 的现代化个人博客网站模板。

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install --force
```

> 注意：使用 `--force` 选项可以绕过 sharp 包的编译问题。

### 2. 启动开发服务器

```bash
npm run dev
```

服务器将在 http://localhost:3000 上运行。

### 3. 构建生产版本

```bash
npm run build
```

## 📁 项目结构

```
├── src/
│   ├── app/             # Next.js App Router 结构
│   │   ├── (about)/     # 关于和联系页面
│   │   ├── blogs/[slug]/ # 博客详情页面
│   │   ├── categories/[slug]/ # 分类页面
│   │   ├── page.js      # 首页
│   │   └── layout.js    # 全局布局
│   ├── components/      # 组件目录
│   │   ├── About/       # 关于页面组件
│   │   ├── Blog/        # 博客相关组件
│   │   ├── Contact/     # 联系页面组件
│   │   ├── Footer/      # 页脚组件
│   │   ├── Header/      # 头部组件
│   │   └── Home/        # 首页组件
│   ├── utils/           # 工具函数
│   │   └── siteMetaData.js # 网站元数据
├── content/             # 博客内容
│   └── blogs/           # 博客文章（MDX格式）
├── public/              # 静态资源
├── package.json         # 项目配置
└── next.config.js       # Next.js 配置
```

## ✏️ 自定义内容

### 1. 修改网站元数据

编辑 `src/utils/siteMetaData.js` 文件，修改网站标题、描述、作者信息等。

### 2. 添加/修改博客文章

在 `content/blogs/` 目录下创建新的文件夹，每个文件夹对应一篇博客文章。

**博客文章结构：**
- `index.mdx` - 博客内容（MDX格式）
- 文章中引用的图片文件

**MDX 文件格式：**
```mdx
---
title: "博客标题"
description: "博客描述"
date: "2024-01-01"
category: "技术"
author: "作者名"
image: "./图片文件名.jpg"
tags: ["标签1", "标签2"]
---

博客内容...
```

### 3. 修改页面内容

- **首页**：编辑 `src/app/page.js` 和 `src/components/Home/` 目录下的组件
- **关于页**：编辑 `src/app/(about)/about/page.js` 和 `src/components/About/` 目录下的组件
- **联系页**：编辑 `src/app/(about)/contact/page.js` 和 `src/components/Contact/` 目录下的组件

### 4. 修改样式

- 全局样式：编辑 `src/app/globals.css`
- 组件样式：使用 Tailwind CSS 类名直接在组件中修改

## 🎨 主题配置

项目支持明暗主题切换，配置位于：
- `src/components/Hooks/useThemeSwitch.js` - 主题切换逻辑
- `src/app/layout.js` - 主题应用

## 📦 部署

### Vercel 部署（推荐）

1. 登录 Vercel 账号
2. 导入项目仓库
3. 配置构建命令：`npm run build`
4. 部署完成！

### 其他部署方式

- **Netlify**：配置构建命令为 `npm run build`，发布目录为 `.next`
- **GitHub Pages**：需要使用 `next export` 命令生成静态文件

## 🔧 技术栈

- **前端框架**：Next.js 15（App Router）
- **样式方案**：Tailwind CSS 3
- **内容管理**：Velite.js（MDX 处理）
- **图标库**：Iconify
- **动画**：Lottie（联系页面）
- **代码高亮**：Shiki

## 📝 开发指南

### 添加新页面

1. 在 `src/app/` 目录下创建新的文件夹
2. 添加 `page.js` 文件作为页面组件
3. 在 `src/components/` 目录下创建对应的组件

### 添加新组件

1. 在 `src/components/` 目录下创建新的文件夹
2. 创建组件文件
3. 在需要的页面中导入并使用

### 修改导航栏

编辑 `src/components/Header/index.js` 文件，修改导航链接和样式。

### 修改页脚

编辑 `src/components/Footer/index.js` 文件，修改页脚内容和链接。

## 🐛 常见问题

### 1. 依赖安装失败

**问题**：安装依赖时出现 sharp 包编译错误。

**解决方案**：使用 `npm install --force` 命令安装。

### 2. 博客文章不显示

**问题**：添加新博客后，页面不显示。

**解决方案**：确保 MDX 文件格式正确，包含必要的 frontmatter 字段。

### 3. 图片不显示

**问题**：博客文章中的图片不显示。

**解决方案**：确保图片路径正确，使用相对路径引用同一目录下的图片。

## 📚 资源

- [Next.js 文档](https://nextjs.org/docs)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [Velite.js 文档](https://velite.js.org/)
- [MDX 文档](https://mdxjs.com/docs/)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个模板！

---

**开始创建你的个人博客吧！** 🎉

