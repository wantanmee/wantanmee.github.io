---
title: "Ubuntu开机自动运行"
author: kate
categories:
  - blog
tags:
  - ubuntu
  - linux
---

## 原理

> https://blog.csdn.net/qq_14989227/article/details/79227283

1. 开机启动时自动运行程序

    Linux加载后, 它将初始化硬件和设备驱动, 然后运行第一个进程init。init根据配置文件继续引导过程，启动其它进程。通常情况下，修改放置在`/etc/rc`或`/etc/rc.d`或`/etc/rc?.d`目录下的脚本文件，可以使init自动启动其它程序。例如：编辑`/etc/rc.d/rc.local`文件(该文件通常是系统最后启动的脚本)，在文件最末加上一行`xinit`或`startx`，可以在开机启动后直接进入X－Window。

1. 登录时自动运行程序

    用户登录时，bash先自动执行系统管理员建立的全局登录script`/ect/profile`。然后bash在用户起始目录下按顺序查找三个特殊文件中的一个`/.bash_profile`、`/.bash_login`、`/.profile`，但只执行最先找到的一个。因此，只需根据实际需要在上述文件中加入命令就可以实现用户登录时自动运行某些程序（类似于DOS下的Autoexec.bat）。

1. 退出登录时自动运行程序

    退出登录时，bash自动执行个人的退出登录脚本`/.bash_logout`。例如，在`/.bash_logout`中加入命令`tar －cvzf c.source.tgz *.c`，则在每次退出登录时自动执行 “tar” 命令备份*.c文件。

1. 定期自动运行程序

    Linux有一个称为crond的守护程序，主要功能是周期性地检查`/var/spool/cron`目录下的一组命令文件的内容，并在设定的时间执行这些文件中的命令。用户可以通过`crontab`命令来建立、修改、删除这些命令文件。例如，建立文件crondFile，内容为`00 9 23 Jan * HappyBirthday`，运行“crontabcronFile”命令后，每当元月23日上午9:00系统自动执行“HappyBirthday”的程序（“*”表示不管当天是星期几）。

1. 定时自动运行程序一次

    定时执行命令at 与crond 类似（但它只执行一次）：命令在给定的时间执行，但不自动重复。at命令的一般格式为：at [ －f file ] time ，在指定的时间执行file文件中所给出的所有命令。也可直接从键盘输入命令：

    ```bash
    $ at 12:00
    at>mailto Roger －s ″Have a lunch″ < plan.txt
    at>Ctr－D
    Job 1 at 2000－11－09 12:00
    # 2000－11－09 12:00时候自动发一标题为“Have a lunch”，内容为plan.txt文件内容的邮件给Roger.
    ```

## 实现

> http://jackqdyulei.github.io/2016/03/06/linux-auto-script/

### 编辑`rc.local`脚本

rc.local脚本是一个ubuntu开机后会自动执行的脚本，我们可以在该脚本内添加命令行指令。该脚本位于/etc/路径下，需要root权限才能修改。该脚本具体格式如下：

```shell
#!/bin/sh -e
#
# rc.local
#
# This script is executed at the end of each multiuser runlevel.
# Make sure that the script will "exit 0" on success or any other
# value on error.
#
# In order to enable or disable this script just change the execution
# bits.
#
# By default this script does nothing.

exit 0
```

注意: 一定要将命令添加在`exit 0`之前

### 添加一个开机启动脚本

上面的方法虽然奏效，但是将所有不同的脚本指令写入同一个文件不是一个好的style。我们可以自己写一个run.sh,然后让系统在开机时自动执行。

1. 建立自己的脚本
    首先我们需要写一个需要执行的脚本。在这里我们已一个开启服务器的脚本为例：

    ```bash
    #!/bin/bash
    cd /home/ubuntu/undertow-server/
    sudo mvn exec:java
    ```

    随后将脚本保存为run_server.sh

1. 修改脚本权限
    一定要让脚本具备可执行权限，可以执行如下指令：

    ```bash
    sudo chmod 755 run_server.sh
    ```

1. 将脚本放置在启动路径下
    将run_server.sh移动到/etc/init.d路径下，可以直接拷贝，也可以链接过去

    ```bash
    $ sudo cp run_server.sh /etc/init.d/
    ```

1. 将脚本添加到启动脚本。
    执行如下指令，在这里90表明一个优先级，越高表示执行的越晚

    ```bash
    cd /etc/init.d/
    sudo update-rc.d run_server defaults 90
    ```

1. 如何移除该脚本
    很简单，执行如下指令：

    ```bash
    sudo update-rc.d -f run_server.sh remove
    ```
