### docker命令
```
docker run -d --name mrdoc -p 10086:10086 jonnyan404/mrdoc-alpine:0.8.1
```
![](https://cdn.staticaly.com/gh/codeslive/images-pages@main/2022/202211050446900.webp)

- 账号：admin
- 密码：docker logs mrdoc 2>&1|grep pwd（输入查看）

### 文档
[Docker 安装 mrdoc (开源版)](https://www.mrdoc.fun/doc/18/)

![](https://cdn.staticaly.com/gh/codeslive/images-pages@main/2022/202211050453931.webp)