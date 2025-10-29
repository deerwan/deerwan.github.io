---
title: 玩客云Armbian版本区别
createTime: 2025/10/13 22:35:13
permalink: /blog/kvd3he46/
---

**bookworm_current**和**bullseye_current**和**jammy_current**的区别

以**hzyitc**大佬的仓库为标准
大佬仓库地址:**https://github.com/hzyitc/armbian-onecloud**

Bookworm 和 Bullseye 都是 Debian 发行版，前者是 Debian 12，后者是 Debian 11，主要区别在于版本的更新程度和支持时间。
Jammy 则是 Ubuntu 发行版，它基于 Debian，但与 Debian 相比，Ubuntu 更注重用户友好性和桌面体验。Jammy 是 Ubuntu 22.04 LTS 的代号，具有长期支持。

1. edge和current区别
   BRANCH	     内核版本
   edge	     edge
   current	      v6.1

有burn和没有区别
burn 可是直接写入到eMMC，没有的可以u盘启动

minimal精简的系统镜像
推荐刷经典版，除非你知道刷入minimal版本代表什么

检查时间

```
date -R
```

如果时区及时间不对。执行下面的操作

```
cp /usr/share/zoneinfo/Asia/Shanghai  /etc/localtime
```

```
apt-get install -y curl
```

换源

```
bash <(curl -sSL https://linuxmirrors.cn/main.sh)
```

换docker源

```
bash <(curl -sSL https://linuxmirrors.cn/docker.sh)
```

```


```

科技lion

```
bash <(curl -sL kejilion.sh)
```

更新

```
apt update -y  && apt install -y curl
```

解压缩工具

```
sudo apt install unzip
```
