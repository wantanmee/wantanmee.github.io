---
title: "又又又搞了个blog"
author: kate
categories:
  - Post Formats
tags:
  - Post Formats
  - readability
  - standard
---

我是按照github的教程，先建repo再clone，这样的话就没法用Jekyll的[Quickstar教程](https://jekyllrb.com/docs/)的`jekyll new myblog`了，因为已经先有文件夹了。

这种情况的话，就按照[Step by Step Tutorial](https://jekyllrb.com/docs/step-by-step/01-setup/)里面先init，再加dependency好了。但是这样也不好，这样出来的是没有主题的，非常简陋。所以其实要先找一个主题。

于是又在[Themes](https://jekyllrb.com/docs/themes/)这里推荐的<https://jamstackthemes.dev/ssg/jekyll/>里面随便找了个主题[so-simple-theme](https://github.com/mmistakes/so-simple-theme)。这个主题的说明文档还是挺详细的。暂时按照这个一步步来弄。样式当然不是很适合中文，以后再慢慢调整。

话说公司的网络真是折腾人， 每一步操作都需要proxy:(，比如`gem install --http-proxy http://company-proxy:80 jekyll-theme-so-simple`, bundle的proxy是依赖于环境变量的，`export http_proxy=http://company-proxy:80`, 然后执行的时候需要`sudo -E bundle`
