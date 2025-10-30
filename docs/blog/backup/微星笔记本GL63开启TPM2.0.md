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

![Image](https://github.com/user-attachments/assets/f99056b2-2034-46f5-a86c-56849032420c)

找到PTT Configuration

![Image](https://github.com/user-attachments/assets/1584daed-d735-477d-a07f-f6fc9f2903e3)

把dTPM改为PTT（如果已经是PTT可以跳过此步）。

![Image](https://github.com/user-attachments/assets/67c3a8a4-7464-4bdd-a7ed-cb013e154ef1)

之后在安全性中找到Trusted Computing
注：有个别型号的Trusted Computing选项则是在高级选项中当中

![Image](https://github.com/user-attachments/assets/fec4563a-8ce1-41c7-901d-7e39afe51ad6)

找到Security Device Support，将Disable改为Enable

![Image](https://github.com/user-attachments/assets/22ee5b40-a06c-4420-9b75-bb31814b399f)

按F10保存
