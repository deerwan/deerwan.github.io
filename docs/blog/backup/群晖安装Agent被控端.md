---
title: 群晖安装Agent被控端
createTime: 2025/10/13 22:35:13
permalink: /blog/j3rm7hip/
tags:
  - backup
---

先手动下载nezha-agent程序

我们打开这个链接：https://github.com/nezhahq/agent/releases ，找到和我们系统对应的安装程序。

> 我这个是amd64的，所以我就下载对应的 nezha-agent_linux_amd64.zip,下载下来后进行解压，拿到里面的nezha-agent文件，我们随便找个地方上传上去。

用ssh工具连接你的服务器，切换到root用户

```
sudo -i
```

然后进入到cd到你上传文件的位置，执行下面的命令可以查看帮助：

```
./nezha-agent 
```

如果输出的是：-bash: ./nezha-agent: No such file or directory，则表示没有权限，我们需要赋权一下，执行下面的命令：

```
chmod +x nezha-agent
```

然后，在继续执行

```
./nezha-agent
```

启动被控端agent

下面我们就可以启动了，输入

```
./nezha-agent -s 面板域名/IP:面板端口 -p 秘钥
```

面板域名：哪吒面板通讯的域名/IP

面板端口：默认是5555，要是改了的话就按照改后的

秘钥，从面板上创建的服务器，都有个秘钥，复制下来即可。

执行完命令之后，我们就可以从服务端看到服务器的情况了。

#### 配置服务

上面的这种方法虽然可以看到服务器的情况了，但是我们关闭ssh之后，就看不到了，所以，我们需要把该启动命令配置成服务，让服务器一开机就执行该命令

进入到 /usr/lib/systemd/system/目录下，我们执行创建个名字为：nezha-agent.service的服务文件。

```
cd /usr/lib/systemd/system/
```

```
touch nezha-agent.service
```

使用vi命令，写入如下信息

```
Description=哪吒探针监控端
ConditionFileIsExecutable=/root/nezha-agent

[Service]
StartLimitInterval=5
StartLimitBurst=10
ExecStart=/root/nezha-agent "-s" "xxxx.com:5555" "-p" "xxx"
WorkingDirectory=/root
Restart=always
RestartSec=120
EnvironmentFile=-/etc/sysconfig/nezha-agent
[Install]

WantedBy=multi-user.target
```

注意ExecStart的值，一定是你nezga-agent文件的全路径+执行命令，比如我的是：/root/nezha-agent -s 面板域名:面板端口 -p 秘钥

然后保存文件即可。

加载配置文件

```
systemctl daemon-reload
```

设置服务自启动

```
systemctl enable nezha-agent4
```

启动服务

```
systemctl start nezha-agent
```

查看服务的启动状态

```
systemctl status nezha-agent
```

启动成功
