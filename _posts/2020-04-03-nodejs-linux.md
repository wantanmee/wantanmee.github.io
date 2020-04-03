---
title: "在WSL/Ubuntu中安装Nodejs"
author: kate
categories:
  - blog
tags:
  - nodejs
  - wsl
  - ubuntu
---

官方教程需要用cURL，但是公司没法用，所以用[install Node.js via binary archive on Linux](https://github.com/nodejs/help/wiki/Installation)的方法，而且可以同时放好多个版本，需要的时候改`~/.bashrc`的`PATH`指向。

> How to install Node.js via binary archive on Linux?
1. Unzip the binary archive to any directory you wanna install Node, I use `/usr/local/lib/nodejs`

```bash
 VERSION=v10.15.0
 DISTRO=linux-x64
 sudo mkdir -p /usr/local/lib/nodejs
 sudo tar -xJvf node-$VERSION-$DISTRO.tar.xz -C /usr/local/lib/nodejs 
```

1. Set the environment variable `~/.bashrc`, add below to the end

```bash
# Nodejs
VERSION=v10.15.0
DISTRO=linux-x64
export PATH=/usr/local/lib/nodejs/node-$VERSION-$DISTRO/bin:$PATH
```

1. Refresh bash

1. Test installation using

```bash
node -v

npm version

npx -v
```

the normal output is:

```bash
➜  node -v
v10.15.1
➜  npm version
{ npm: '6.4.1',
 ares: '1.15.0',
 cldr: '33.1',
 http_parser: '2.8.0',
 icu: '62.1',
 modules: '64',
 napi: '3',
 nghttp2: '1.34.0',
 node: '10.15.1',
 openssl: '1.1.0j',
 tz: '2018e',
 unicode: '11.0',
 uv: '1.23.2',
 v8: '6.8.275.32-node.12',
 zlib: '1.2.11' }
```
