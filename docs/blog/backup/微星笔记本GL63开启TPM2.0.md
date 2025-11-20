---
title: 微星笔记本GL63开启TPM2.0
createTime: 2025/10/13 22:35:13
permalink: /blog/pm4wkj29/
tags:
  - backup
---
### 微星笔记本GL63开启TPM2.0

型号：GL63 8RE 
其他机型可做参考

首先开机进入按下`DELETE`键进入BIOS（个别型号是图形BIOS）

然后按右边的`CTRL+SHIFT+左边的ALT+F2`开启超级模式

之后在高级选项中找到PCH-FW Configuration

![1.jpeg](https://img.106996.xyz/file/1763645393417_1.jpeg)

找到PTT Configuration

![2.jpeg](https://img.106996.xyz/file/1763645491436_2.jpeg)

把dTPM改为PTT（如果已经是PTT可以跳过此步）。

![3.jpeg](https://img.106996.xyz/file/1763645493683_3.jpeg)

之后在安全性中找到Trusted Computing
注：有个别型号的Trusted Computing选项则是在高级选项中当中

![4.jpeg](https://img.106996.xyz/file/1763645497152_4.jpeg)

找到Security Device Support，将Disable改为Enable

![5.jpeg](https://img.106996.xyz/file/1763645501439_5.jpeg)

按F10保存
