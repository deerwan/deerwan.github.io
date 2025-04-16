
# 如何部署 Site Status 网站可用性监测页面

### 简介

**Site-Status 是一个基于 UptimeRobot API 的开源站点在线状态监测面板。相比 UptimeRobot 提供的原版界面，Site-Status 更加美观易用，适合展示在个人 Blog 中。该项目基于 Huxt 开发，可以直接部署在 Cloudflare Pages 服务中。相比 Uptime Kuma 等完全自部署的服务，基于 UptimeRobot 和 Cloudflare Pages 的部署方式可以保证监测界面更加稳定，不会出现网站服务和可用性监测 All in Boom 的情况。Site-Status 在 GitHub 仓库中介绍了多种部署方式，本文将以 Cloudflare Pages 为例介绍其基本部署方法及简单的自定义流程。**

![Snipaste_2025-03-30_10-24-29.png](https://img.106996.xyz/file/Snipaste_2025-03-30_10-24-29.png)

### 事先准备

您需要先到 [UptimeRobot](https://uptimerobot.com/dashboard) 添加站点监控，并在 `My Settings` 页面或者 [API 管理](https://dashboard.uptimerobot.com/integrations) 页面获取类型为 `Read-Only API Key` 的 `API Key`，或者使用用于单独监视器的 `Monitor-specific API keys`（ 不要使用 `Main API key` ）

### 部署流程

### 1. Fork 官方仓库

打开 [GitHub](https://github.com/)，进入官方仓库 ，[Fork](https://github.com/imsyy/site-status) 一份到自己的账户中；

`star` 并 `fork` 本项目 😘

### 2. 注册 UptimeRobot 并获取 API

访问 UptimeRobot 官网，注册免费版账户。完成后登陆仪表盘，点击 “**New monitor**” 新建监测任务：

![Snipaste_2025-03-30_10-27-48.png](https://img.106996.xyz/file/Snipaste_2025-03-30_10-27-48.png)

**选择监测类型，包括 Http，Keyword，ping 以及 port 类型，然后输入需要监测服务的地址，设置间隔时间：**

![Snipaste_2025-03-30_10-29-54.png](https://img.106996.xyz/file/Snipaste_2025-03-30_10-29-54.png)

**点击左侧边栏的”Integrations & API“按钮，选择 API，新建一个 Read-only API key 并记录下来。**

![Snipaste_2025-03-30_10-31-40.png](https://img.106996.xyz/file/Snipaste_2025-03-30_10-31-40.png)

### 3. 个性化设置

**回到自己 Fork 的仓库中，修改下列代码：**

首先，为保证 build 过程的兼容性，避免出现 `Error: Failed to publish your Function. Got error: Uncaught Error: No such module "node:async_hooks".`，需要在根目录添加 wrangler.toml 文件，内容如下所示：

![Snipaste_2025-03-30_10-44-58.png](https://img.106996.xyz/file/Snipaste_2025-03-30_10-44-58.png)

```
name = "site-status"
compatibility_date = "2024-01-30"  # 使用当前日期或最新兼容日期
compatibility_flags = ["nodejs_compat"]
pages_build_output_dir = "dist"  # 根据实际构建输出目录调整
```

然后打开 `/app/components/SiteFooter.vue` 文件，在约 52 行处修改 `linkData` 字段中的 `github`，`home` 和 `email` 变量为自己的地址。如下图所示，这三个变量分别对应页脚处的三个 icon，修改后用户可以通过点击 icon 跳转到对应的页面。

![Snipaste_2025-03-30_10-47-32.png](https://img.106996.xyz/file/Snipaste_2025-03-30_10-47-32.png)

```
const linkData = {
  github: "https://github.com/deerwan",
  home: "https://952780.xyz",
  email: "mailto:739914756@qq.com",
};
```

**但这样修改会导致页脚的作者署名超链接变成自己的主页和 GitHub 地址。虽然该项目使用了 MIT License，但出于对作者的尊重，建议添加一个新变量用于存储 IMSYY 和 SiteStatus 字段所指向的链接，例如：**

```
const metaData = {
  author: "https://imsyy.top",
  project: "https://github.com/imsyy/site-status",
};
```

**由于变量名发生了变化，因此需要修改约 19 行处的 jumpLink 为：**

```
<n-text depth="3" @click="jumpLink(metaData.project)">
          SiteStatus
        </n-text>
```

**35 行处的 jumpLink 为：**

```
<n-text depth="3" @click="jumpLink(metaData.author)"> IMSYY </n-text>
```

如果需要其他个性化设置，也可以在 `/app/components/` 目录中修改对应的 Vue 组件。

### 4. 在 Cloudflare Pages 部署

访问 Cloudflare Pages 官网，登陆 Cloudflare 账号。进入 Workers 和 Pages 界面，点击蓝色的 “ **创建**” 按钮并选择建立新的 Pages。

本项目默认使用 [Cloudflare Pages](https://pages.cloudflare.com/) 来行部署

![Snipaste_2025-03-30_11-22-11.png](https://img.106996.xyz/file/Snipaste_2025-03-30_11-22-11.png)

在创建页面点击 “**通过导入现有 Git 存储库创建**”：

![Snipaste_2025-03-30_11-23-27.png](https://img.106996.xyz/file/Snipaste_2025-03-30_11-23-27.png)

绑定 GitHub 账号，选择刚刚 Fork 并修改好的 Site-Status 仓库，点击 “**开始设置**”，然后进入 “**设置构建和部署**” 页面。在构建设置处将框架预设选为 “ **Nuxt.js**”，在环境变量处设置刚才获取的 API Key，如下图所示：

**变量名：**`API_KEY`

![Snipaste_2025-03-30_11-28-12.png](https://img.106996.xyz/file/Snipaste_2025-03-30_11-28-12.png)

然后点击 “**保存并部署**”。当看到页面显示 “ *Success: Your site was deployed!*” 时，代表部署已完成，可以访问并查看状态指示页了。部署完成后，如果环境变量需要改变，可以点击进入详情页进行修改，然后重新生成部署。之后可以按需添加自定义域，以实现使用自己的域名访问状态监控页。另外部署完成后若对 GitHub 仓库进行修改，Cloudflare Pages 也会自动重新部署。

### 如何开启站点加密（可选变量）

在环境变量中添加 **`SITE_PASSWORD` 和 `SITE_SECRE_KEY`，都必须填写，缺一不可，其中 `SITE_PASSWORD`是站点密码，`SITE_SECRE_KEY` 是加密密钥，可随意填写

### 常见问题

**如果部署成功后访问页面出现无法获取的错误，请检查环境变量是否配置成功。如果详情页中的环境变量为空，重新添加环境变量并重新生成部署即可。**

![Snipaste_2025-03-30_11-32-59.png](https://img.106996.xyz/file/Snipaste_2025-03-30_11-32-59.png)
