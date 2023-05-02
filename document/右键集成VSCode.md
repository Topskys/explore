<!--
 * @Author: Topskys
 * @Date: 2023-04-07 22:49:00
 * @LastEditTime: 2023-04-07 22:55:15
-->

安装VSCode的时候，如果你没有勾选下面这两项，那么右键菜单就没有VSCode，但你又特别想要怎么办？最简单的方法就是卸载重装，要不你就通过注册表将VSCode添加到右键菜单，注册表添加教程如下。
在这里插入图片描述

![Install VSCode](https://img-blog.csdnimg.cn/b987641a3f814dc2adff6fcc9f379216.png)

教程

1、新建vscode.reg文件，并写入以下内容
```bash
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\*\shell\VSCode]
@="Open with Code"
"Icon"="D:\\Program Files (x86)\\VS Code\\Microsoft VS Code\\Code.exe"

[HKEY_CLASSES_ROOT\*\shell\VSCode\command]
@="\"D:\\Program Files\\Microsoft VS Code\\Code.exe\" \"%1\""

Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\Directory\shell\VSCode]
@="Open with Code"
"Icon"="D:\\Program Files (x86)\\VS Code\\Microsoft VS Code\\Code.exe"

[HKEY_CLASSES_ROOT\Directory\shell\VSCode\command]
@="\"D:\\Program Files (x86)\\VS Code\\Microsoft VS Code\\Code.exe\" \"%V\""

Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\Directory\Background\shell\VSCode]
@="Open with Code"
"Icon"="D:\\Program Files (x86)\\VS Code\\Microsoft VS Code\\Code.exe"

[HKEY_CLASSES_ROOT\Directory\Background\shell\VSCode\command]
@="\"D:\\Program Files (x86)\\VS Code\\Microsoft VS Code\\Code.exe\" \"%V\""
```
双击运行