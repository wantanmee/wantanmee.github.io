var store = [{
        "title": "研究了下ffmpeg",
        "excerpt":"用ffmpeg来压手机拍的视频，首先可以参考下这两篇FFmpeg and H.265 Encoding Guide ","categories": ["blog"],
        "tags": ["ffmpeg"],
        "url": "http://localhost:4000/blog/2019/10/08/use-ffmpeg.html"
      },{
        "title": "又折腾docker",
        "excerpt":"  docker for windows 版本 有用的命令 # 先确认docker装了&gt;docker --version&gt;docker image ls&gt;docker image ls -a&gt;docker image rm IMAGE_ID&gt;docker container ls&gt;docker rm CONTAINER_ID# build dockerfile&gt;docker build .问题解决 “docker build” immediately hangs indefinitely. Windows 10 解决办法里面有提到https://github.com/docker/toolbox/issues/613#issuecomment-464471215，就是加个.dockerignore文件 ","categories": ["blog","技术"],
        "tags": ["docker"],
        "url": "http://localhost:4000/blog/%E6%8A%80%E6%9C%AF/2019/10/09/docker.html"
      },{
        "title": "又又又搞了个blog",
        "excerpt":"我是按照github的教程，先建repo再clone，这样的话就没法用Jekyll的Quickstar教程的jekyll new myblog了，因为已经先有文件夹了。 这种情况的话，就按照Step by Step Tutorial里面先init，再加dependency好了。但是这样也不好，这样出来的是没有主题的，非常简陋。所以其实要先找一个主题。 于是又在Themes这里推荐的https://jamstackthemes.dev/ssg/jekyll/里面随便找了个主题so-simple-theme。这个主题的说明文档还是挺详细的。暂时按照这个一步步来弄。样式当然不是很适合中文，以后再慢慢调整。 话说公司的网络真是折腾人， 每一步操作都需要proxy:(，比如gem install --http-proxy http://company-proxy:80 jekyll-theme-so-simple, bundle的proxy是依赖于环境变量的，export http_proxy=http://company-proxy:80, 然后执行的时候需要sudo -E bundle ","categories": ["misc"],
        "tags": ["misc"],
        "url": "http://localhost:4000/misc/2019/10/09/start-a-blog.html"
      },]
