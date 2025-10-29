---
title: 小雅emby全家桶+家庭影院服务器
createTime: 2025/10/13 22:35:13
permalink: /blog/snpop3v2/
---

视频教程

https://www.bilibili.com/video/BV1vK421x7eM/?spm_id_from=333.999.0.0

安装常用软件

```
apt install -y curl wget sudo bash
```

debian默认不能root用户直接登录，我们需要修改下

```
sudo nano /etc/ssh/sshd_config
```

找到并用#注释掉这行

```
PermitRootLogin prohibit-password
```

新建一行 添加

```
PermitRootLogin yes
```

重启服务

```
sudo service ssh restart
```

一键更新（先更新一下）

```
apt update -y && apt full-upgrade -y && apt autoremove -y && apt autoclean -y
```

挂载U盘

查看挂载情况

```
df -h
```

Debian 开机自动挂载磁盘

查看磁盘所有UUID

```
sudo blkid
```

编辑/etc/fstab文件, 在文件尾部添加需要挂载磁盘的UUID 并添加一些信息例如 ↓

```
UUID=******* /home/h1/ ext4 defaults 0 2
```


UUID是磁盘的信息标签, /home/h1是挂载的文件夹, txt4是磁盘格式, defaults 默认.
第一个数字：0表示开机不检查磁盘，1表示开机检查磁盘；
第二个数字：0表示交换分区，1代表启动分区（Linux），2表示普通分区

安装docker

这里用脚本吧，选择一种方式
一键脚本（工具箱}

```markdown
curl -sS -O https://kejilion.pro/kejilion.sh && chmod +x kejilion.sh && ./kejilion.sh
```


docker一键脚本

```markdown
bash <(curl -sSL https://linuxmirrors.cn/docker.sh)
```


安装小雅
官网地址： https://github.com/DDS-Derek/xiaoya-alist

```markdown
bash -c "$(curl -sLk https://ddsrem.com/xiaoya_install.sh)"
```


需要两个token和一个id
短token：https://alist.nn.ci/zh/guide/drivers/aliyundrive.html
长token：https://alist.nn.ci/zh/guide/drivers/aliyundrive_open.html
文件夹id：https://www.alipan.com/
阿里云盘的资源盘建立一个文件夹，然后填入地址栏中的id

推荐使用host模式

web界面
http://自己的ip地址:5678/
这里是正常的 等的几分钟刷新一下

emby全家桶

1. 安装需要的条件：

1.1. 正确安装小雅Docker版，并可以正常使用。

1.2. 硬盘空间有160G剩余空间。

1. 在我们刚刚挂载点硬盘上创建文件夹，例如/home/h1/xiaoyaemby
2. 使用命令开始安装

```
bash -c "$(curl -sLk https://ddsrem.com/xiaoya_install.sh)"
```

默认使用官方emby，可自行选择开心版1.3
看一下目录是否正确，回车
一路回车，开始拉去resilio镜像
这里默认早上六点更新同步，自己更改或者默认
我这里选择14天

1. 安装完毕之后，使用2345或者6908端口进行登录emby。
   例如：http://192.168.1.28:2345/
   用户名：`xiaoya`
   密码：`1234`

阿里云盘缓存清理

```
bash -c "$(curl -sLk https://ddsrem.com/xiaoya_install.sh)"
```

1. xiaoyakeeper

github地址
https://github.com/DDS-Derek/xiaoya-alist/blob/master/xiaoyahelper/README.md

1. Alist-tvbox

自带清理缓存文件工具
用户名密码都是admin
