---
title: Nav书签导航教程
createTime: 2025/11/05 09:04:32
permalink: /blog/pz7g8vjm/
tags:
  - tutorial
  - cloudflare
  - 书签
---

## 📚 项目简介

Nav 是一个基于 **Cloudflare Pages + D1 + Vue 3** 构建的现代化书签管理系统。支持分类管理、私密书签、实时搜索、导入导出等功能，完全免费部署在 Cloudflare 边缘网络上。

**项目地址：** [https://github.com/deerwan/nav](https://github.com/deerwan/nav)

**演示站点：** [nav.lllh.de](https://nav.lllh.de)

---

## ✨ 功能特性

- 📑 **分类管理**：创建、编辑、删除书签分类，支持多级嵌套分类
- 🔖 **书签管理**：添加、编辑、删除书签，支持拖拽排序
- 🔒 **私密书签**：支持设置私密书签，仅登录后可见
- 🔍 **实时搜索**：按名称或URL快速搜索书签，支持防抖优化
- 📥 **导入导出**：支持导出为 JSON/HTML 格式，导入浏览器书签（支持进度显示）
- ⚡ **批量操作**：批量移动、批量编辑属性（私密/公开）、批量删除书签和分类
- 🧹 **清理空分类**：自动检测并清理空分类
- 📊 **数据统计**：显示书签总数和私密书签统计
- 🎨 **主题切换**：支持明暗主题切换
- 🔐 **登录保护**：管理功能需要登录认证
- 📱 **响应式设计**：完美适配桌面端和移动端
- 🔔 **更新通知**：版本更新提示功能
- ⬆️ **回到顶部**：滚动时显示回到顶部按钮
- ⚡ **边缘部署**：基于 Cloudflare Pages，全球加速

---

## 🛠️ 技术栈

- **前端框架**：Vue 3 + Composition API
- **构建工具**：Vite
- **后端**：Cloudflare Pages Functions
- **数据库**：Cloudflare D1 (SQLite)
- **认证**：JWT Token
- **样式**：原生 CSS (现代化设计)

---

## 🚀 部署教程

### 前置准备

1. **Cloudflare 账户**（免费版即可）
2. **GitHub 账户**

### 步骤一：Fork 项目

1. 访问项目仓库：[https://github.com/deerwan/nav](https://github.com/deerwan/nav)
2. 点击右上角的 **Fork** 按钮，将项目 Fork 到自己的 GitHub 账户

### 步骤二：创建 D1 数据库

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 **Workers & Pages** > **D1**
3. 点击 **Create database** 按钮
4. 数据库名称填写：`bookmark-db`
5. 选择区域（建议选择离你最近的区域）
6. 点击 **Create** 创建数据库

#### 初始化数据库表结构

1. 创建数据库后，进入数据库详情页面
2. 点击 **Console** 标签
3. 打开项目仓库中的 `schema.sql` 文件，复制全部内容
4. 粘贴到 D1 Console 中并执行

#### 记录数据库 ID

- 在数据库详情页面可以看到 **Database ID**
- 复制这个 ID，稍后需要用到

### 步骤三：更新数据库配置

1. 回到你的 GitHub 仓库
2. 编辑 `wrangler.toml` 文件
3. 找到第 8 行的 `database_id`，将其替换为你刚才复制的数据库 ID

```toml
database_id = "你的数据库ID"
```

4. 保存并提交更改

### 步骤四：部署到 Cloudflare Pages

1. 在 Cloudflare Dashboard 中，进入 **Workers & Pages** > **Pages**
2. 点击 **Create a project**
3. 选择 **Connect to Git**，连接你的 GitHub 账户
4. 选择你 Fork 的 `nav` 仓库
5. 配置构建设置：
   - **Project name**：自定义项目名称（如：my-bookmarks）
   - **Production branch**：`main`
   - **Framework preset**：`None` 或 `Vite`
   - **Build command**：`npm run build`
   - **Build output directory**：`dist`
6. 点击 **Save and Deploy** 开始部署

### 步骤五：绑定 D1 数据库

1. 部署完成后，进入 Pages 项目设置
2. 进入 **Settings** > **Functions** > **D1 database bindings**
3. 点击 **Add binding**
4. 配置绑定：
   - **Variable name**：`DB`
   - **D1 database**：选择 `bookmark-db`
5. 点击 **Save**

**注意：** 如果绑定失败，请检查：

- 数据库名称是否与 `wrangler.toml` 中的 `database_name` 一致
- 数据库 ID 是否正确更新到 `wrangler.toml` 文件中

### 步骤六：配置环境变量

1. 在 Pages 项目设置中，进入 **Settings** > **Environment variables**
2. 在 **Production** 环境下添加以下变量：

| 变量名 | 值 | 说明 |
|--------|-----|------|
| `ADMIN_USERNAME` | `admin` | 管理员用户名（可自定义） |
| `ADMIN_PASSWORD` | `你的密码` | 管理员密码（建议使用强密码） |
| `JWT_SECRET` | `至少32位的随机字符串` | JWT 密钥（用于登录认证） |

**生成 JWT_SECRET：**

可以使用以下方法生成随机字符串：

```bash
# 使用 openssl（推荐）
openssl rand -base64 32

# 或使用 Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

3. 点击 **Save** 保存

### 步骤七：重新部署

1. 回到 Pages 项目的 **Deployments** 页面
2. 点击最新的部署旁边的 **Retry deployment** 按钮
3. 等待部署完成

---

## 📖 使用指南

### 登录系统

1. 访问你的 Pages 站点 URL
2. 点击右上角的 **登录** 按钮
3. 输入你配置的 `ADMIN_USERNAME` 和 `ADMIN_PASSWORD`
4. 登录成功后即可管理书签

### 添加分类

1. 点击左侧的 **+ 新建分类** 按钮
2. 输入分类名称
3. 可选择父分类创建嵌套分类
4. 点击 **保存**

### 添加书签

1. 点击分类下的 **+ 添加书签** 按钮
2. 填写书签信息：
   - **名称**：书签显示名称
   - **URL**：书签链接地址
   - **图标**：可选，自定义图标 URL
   - **描述**：可选，书签描述信息
   - **私密**：勾选后仅登录用户可见
3. 点击 **保存**

### 导入书签

1. 点击右上角的 **导入** 按钮
2. 选择导入方式：
   - **导入浏览器书签**：选择浏览器导出的 HTML 文件
   - **导入 JSON**：导入之前导出的 JSON 格式书签
3. 等待导入完成（会显示进度）

### 导出书签

1. 点击右上角的 **导出** 按钮
2. 选择导出格式：
   - **导出为 JSON**：保存为 JSON 格式
   - **导出为 HTML**：保存为浏览器可导入的 HTML 格式

### 搜索书签

1. 在顶部搜索框输入关键词
2. 系统会实时搜索书签名称和 URL
3. 支持中文、英文搜索

### 批量操作

1. 勾选需要操作的书签或分类
2. 点击批量操作按钮：
   - **批量移动**：移动到其他分类
   - **批量编辑**：批量修改私密/公开属性
   - **批量删除**：删除选中的书签或分类

### 主题切换

点击右上角的主题切换按钮，可在明暗主题之间切换。

---

## 🔧 高级配置

### 启用多级嵌套分类

如果需要在现有项目上启用多级嵌套分类功能：

1. 进入 D1 数据库的 Console
2. 执行 `migrations/001_add_nested_categories.sql` 文件中的 SQL 语句
3. 重新部署 Pages 项目

### 自定义域名

1. 在 Pages 项目设置中，进入 **Custom domains**
2. 点击 **Set up a custom domain**
3. 输入你的域名
4. 按照提示配置 DNS 记录
5. 等待 DNS 生效（通常几分钟内）

---

## ❓ 常见问题

### Q: 部署后无法访问？

A: 检查以下几点：

- 确认部署状态为 **Success**
- 检查环境变量是否正确配置
- 确认 D1 数据库绑定是否正确

### Q: 登录失败？

A: 检查：

- 环境变量 `ADMIN_USERNAME` 和 `ADMIN_PASSWORD` 是否正确
- 密码是否包含特殊字符（建议使用纯字母数字）
- 清除浏览器缓存后重试

### Q: 书签无法保存？

A: 检查：

- D1 数据库绑定是否正确
- 数据库表结构是否已初始化
- 查看浏览器控制台是否有错误信息

### Q: 如何修改管理员密码？

A: 在 Pages 项目设置中修改 `ADMIN_PASSWORD` 环境变量，然后重新部署。

---

## 📝 许可证

本项目采用 [Apache-2.0](https://github.com/deerwan/nav/blob/main/LICENSE) 许可证。

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

如果觉得这个项目对你有帮助，可以给项目点个 ⭐ Star 支持一下！

---

**相关链接：**

- 项目仓库：[https://github.com/deerwan/nav](https://github.com/deerwan/nav)
- 演示站点：[nav.lllh.de](https://nav.lllh.de)
- VuePress 文档：[https://vuepress.vuejs.org/](https://vuepress.vuejs.org/)
- Cloudflare Pages 文档：[https://developers.cloudflare.com/pages/](https://developers.cloudflare.com/pages/)
