---
title: 更改Docker容器时区
createTime: 2025/10/13 22:35:13
permalink: /blog/puz2qla0/
tags:
  - backup
---

### 问题：容器时间与北京时间相差8个小时

### 原因：宿主机设置了时区，而Docker容器并没有设置，导致两者相差8小时

CST应该是指（China Shanghai Time，东八区时间）
UTC应该是指（Coordinated Universal Time，标准时间）
所以，这2个时间实际上应该相差8个小时

所以，必须统一两者的时区

解决方案：正在运行的容器，可以宿主机直接执行命令给某个容器同步时间

#### #方法1  直接在宿主机操作

```markdown
docker cp /etc/localtime 【容器ID或者NAME】:/etc/localtime
docker cp -L /usr/share/zoneinfo/Asia/Shanghai 【容器ID或者NAME】:/etc/localtime
```

#### #方法2  登录容器同步时区timezone，一般是因为时区不同导致时间差

```markdown
ln -sf /usr/share/zoneinfo/Asia/Singapore /etc/localtime
```

在完成后，再通过date命令进行查看当前时间

#### PS

如果出现
“Error response from daemon: Could not find the file /usr/share/zoneinfo/Asia in container 【容器ID或者NAME】”
则说明在名为 “【容器ID或者NAME】” 的容器内部，找不到 “/usr/share/zoneinfo/Asia” 这个文件或目录。

解决办法
从宿主机复制相关目录到容器内

```markdown
docker cp /usr/share/zoneinfo 【容器ID或者NAME】:/usr/share/
```
