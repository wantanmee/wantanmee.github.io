---
author: kate
title: "研究了下ffmpeg"
categories:
  - blog
tags:
  - ffmpeg
---
用ffmpeg来压手机拍的视频，首先可以参考下这两篇[FFmpeg and H.265 Encoding Guide](http://trac.ffmpeg.org/wiki/Encode/H.265)以及[H.264 Video Encoding Guide](http://trac.ffmpeg.org/wiki/Encode/H.264)

```bash
#linux
for f in *.mp4; do ffmpeg -i "$f" -c:v libx265 -preset veryslow -c:a aac -b:a 128k -ar 44100 "${f%.*}-x265.mp4"; done
#window
for %f in (*.mp4) do ffmpeg -i "%f" -c:v libx265 -preset veryslow -c:a aac -b:a 128k -ar 44100 "%~nf-x265.mp4"
```
> ffmpeg wiki: <http://trac.ffmpeg.org/wiki/WikiStart>