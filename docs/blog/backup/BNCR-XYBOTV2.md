---
title: BNCR-XYBOTV2
createTime: 2025/10/13 22:35:13
permalink: /blog/83pawa9e/
---

### 安装命令

#### amd

```
docker run -dit \
 -p 9000:9000 \
 --restart=on-failure:3 \
 --name XYBotV2 \
 --log-opt max-size=5m \
 -v /root/XYBotV2:/app \
xmoxmo/xybotv2
```

#### arm

```
docker run -dit \
 -p 9000:9000 \
 --restart=on-failure:3 \
 --name XYBotV2 \
 --log-opt max-size=5m \
 -v /root/XYBotV2:/app \
xmoxmo/xybotv2:arm
```

### 查看日志并登录微信

```
docker logs -f XYBotV2
```

### 修改配置文件

```
nano /root/XYBotV2/plugins/all_in_one_config.toml 
```

![](https://img.106996.xyz/file/Snipaste_2025-03-08_21-16-26.png)

#### 修改完配置文件需要重启使配置生效

```
docker restart XYBotV2
```

### 无界端配置

![](https://img.106996.xyz/file/Snipaste_2025-03-08_21-28-46.png)

### 设置管理员

```
set XYBotV2 admin xxxxxxx
```

<!-- ##{"timestamp":1741392623}## -->