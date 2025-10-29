---
title: 玩客云Armbian(CasaOS)使用指南
createTime: 2025/10/13 22:35:13
permalink: /blog/n1kut3sl/
---

### **一键换源**

系统源

```
bash <(curl -sSL https://gitee.com/SuperManito/LinuxMirrors/raw/main/ChangeMirrors.sh)
```

```


```

Docker源

```
bash <(curl -sSL https://gitee.com/SuperManito/LinuxMirrors/raw/main/DockerInstallation.sh)
```

## 

### **玩客云**CasaOS商店专属源

```
●
```

**arm/armv7/armhf** (玩客云 等)

```
https://play.cuse.eu.org/Cp0204-AppStore-Play-arm.zip
```

### **修改LED灯颜色 0为关闭, 1为开启**

配置即时生效：例【蓝色】

```
echo 0 > /sys/class/leds/onecloud:red:alive/brightness
echo 1 > /sys/class/leds/onecloud:blue:alive/brightness
echo 0 > /sys/class/leds/onecloud:green:alive/brightness
```

配置永久生效：例【蓝色】

```
nano /sys/class/leds/onecloud:blue:alive/brightness
1
nano /sys/class/leds/onecloud:red:alive/brightness
0
nano /sys/class/leds/onecloud:green:alive/brightness
0
```

## **进阶**

## **OneCloud 设备 LED 控制程序**

#### **项目地址：**[Lance-He/OneCloud-LED (github.com)](https://github.com/Lance-He/OneCloud-LED?tab=readme-ov-file#onecloud-设备-led-控制程序)

本项目为 玩客云OneCloud 设备提供一个自制的 LED 控制程序，基于 hzyitc 大佬的 Armbian 镜像开发，兼容大部分 Debian 系列发行版。让您轻松控制设备的 LED 状态。

作者：Lance

**环境需求：**

```
● 基于 hzyitc 大佬的 Armbian 镜像：“Linux onecloud 5.15.93-meson #23.02.2 SMP Fri Feb 17 22:38:47 UTC 2023 armv7l armv7l armv7l GNU/Linux”
```

```
● 兼容大部分 Debian 系列发行版
```

```
● 用户需要具备基本的 Linux 系统操作知识
```

### **功能**

```
● 可设置关闭 LED 时间和开启 LED 时间，让您在夜晚享受宁静的睡眠
```

```
● 根据 CPU 使用率动态调整 LED 灯光颜色
```

### **LED 颜色与 CPU 使用率对应表**


| **颜色** | **CPU 使用率** |
| -------- | -------------- |
| 红       | 80%-100%       |
| 紫       | 60%-79%        |
| 黄       | 40%-59%        |
| 青       | 20%-39%        |
| 白       | 0%-19%         |

### **使用方法**

```
1.     将 /bin 目录下的 main 文件复制到玩客云的用户目录下，例如 /root/main
```

```
2.     启动方式： cd /root/ chmod +x main ./main "16:35:00" "16:50:00"
```

```
3.     使用 Ctrl+C 结束进程
```

### **设置开机自启**

```
1.     修改 /etc/rc.local 文件
```

```
2.     在文件的 exit 0 之前插入以下内容： /root/main "16:35:00" "16:50:00" &
```

```
3.     保存即可
```
