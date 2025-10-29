---
title: 飞牛OS切换ROOT用户
createTime: 2025/10/13 22:35:13
permalink: /blog/p2ukkhbd/
---

首先去web后台打开ssh功能

![](https://blog.106996.xyz/HEXO/fnos/Snipaste_2024-10-26_10-55-09.png)

用你熟悉的ssh软件登录

首先输入

```
sudo passwd root  #给root用户创建密码，第一行为登录密码，第二三行是你要创建的root密码
```

显示 psddword updated successfully 表示设置成功

接着用编辑配置文件

输入

```
sudo nano /etc/ssh/sshd_config
```

将no 改为yes，ctrl＋o写入，ctrl加x保存，ctrl+y回车退出

![](https://blog.106996.xyz/HEXO/fnos/Snipaste_2024-10-26_10-56-32.png)

重启ssh服务使其生效

```
sudo service sshd restart
```
