---
comments: true
---

### 拉取镜像

> docker pull star7th/showdoc 

### 新建存放showdoc数据的目录

> mkdir -p /showdoc_data/html
chmod  -R 777 /showdoc_data

### 启动showdoc容器

> docker run -d --name showdoc --user=root --privileged=true -p 4999:80 \
-v /showdoc_data/html:/var/www/html/ star7th/showdoc

### 如何升级

> 从原版官方库更新镜像

`
docker pull star7th/showdoc
`

> 中国大陆镜像更新命令

```
docker pull registry.cn-shenzhen.aliyuncs.com/star7th/showdoc
docker tag registry.cn-shenzhen.aliyuncs.com/star7th/showdoc:latest star7th/showdoc:latest
```


### 原帖

[showdoc安装部署](https://blog.csdn.net/jialiu111111/article/details/120102227)


### 页面显示

![](https://cdn.staticaly.com/gh/codeslive/images-pages@main/2022/202211050830370.webp)

<br>
<script src="https://giscus.app/client.js"
        data-repo="Codeslive/giscus"
        data-repo-id="R_kgDOIYYAGg"
        data-category-id="DIC_kwDOIYYAGs4CSZj8"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="1"
        data-input-position="top"
        data-theme="preferred_color_scheme"
        data-lang="zh-CN"
        data-loading="lazy"
        crossorigin="anonymous"
        async>
</script>