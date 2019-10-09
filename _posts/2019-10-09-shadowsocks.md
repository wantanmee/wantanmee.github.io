---
author: kate
title: "研究了下SS"
categories:
  - blog
tags:
  - shadowsocks
---

> Ubuntu 

```shell
apt update
apt upgrade
apt install git
apt-get install python-m2crypto
apt-get install python-pip
pip install git+https://github.com/shadowsocks/shadowsocks.git@master

apt-get install build-essential
wget https://download.libsodium.org/libsodium/releases/LATEST.tar.gz
tar zxf LATEST.tar.gz
cd libsodium*
./configure
make -j2 && make install
# 修复关联
echo /usr/local/lib > /etc/ld.so.conf.d/usr_local_lib.conf
ldconfig

ssserver -p 8848 -k hello -m aes-256-gcm
sudo ssserver -p 8848 -k hello -m aes-256-gcm --user nobody -d start
less /var/log/shadowsocks.log
```