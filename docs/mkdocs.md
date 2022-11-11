### 一、安装mkdocs
```
pip install mkdocs
```

### 二、创建项目
```
mkdocs new testdocs
```

### 三、文档预览
```
mkdocs serve
```

### 四、更换主题

1. 下载主题

```
pip install mkdocs-material mkdocs-windmill

```
2. mkdocs.yml里添加:

```
theme:
  name: 'material'
```

### 五、进行mkdocs.yml配置
```
site_name: My Docs
site_description: 在线云文档
site_author: 小康
copyright: Copyright &copy; 2022 - 2099 小康
site_url: https://mkdocs.codeslive.top/
repo_url: https://github.com/codeslive/mkdocs
repo_name: mkdocs
edit_uri: ""
# 主题配置
theme: 
    name: material
    language: en
    search_index_only: true
    palette:
    - media: "(prefers-color-scheme: light)"
      scheme: default
      toggle:
        icon: material//weather-sunny
        name: Switch to dark mode
    - media: "(prefers-color-scheme: dark)"
      primary: teal
      scheme: slate
      toggle:
        icon: material/weather-night
        name: Switch to light mode
    features:
    #- navigation.instant # 点击内部链接时，不用全部刷新页面
    - navigation.tracking # 在url中使用标题定位锚点
    - navigation.tabs # 顶部显示导航顶层nav（也就是第一个节点）
    - navigation.tabs.sticky # 滚动是隐藏顶部nav，需要配合navigation.tabs使用
    - navigation.sections # nav节点缩进
    - navigation.expand # 不折叠左侧nav节点
    - navigation.indexes # 指定节点index pages ，跟instant不兼容
    - toc.integrate # 右侧生产目录
    - toc.integrate #导航集成
    - navigation.top # 一键回顶部
    - header.autohide
    - search.share # 搜索分享
    - search.suggest # 搜索建议
    - search.highlight #搜索高亮




plugins:
  - search:
      jieba_dict: user_dict.txt




# 图标
icon:
    admonition:
      note: octicons/tag-16
      abstract: octicons/checklist-16
      info: octicons/info-16
      tip: octicons/squirrel-16
      success: octicons/check-16
      question: octicons/question-16
      warning: octicons/alert-16
      failure: octicons/x-circle-16
      danger: octicons/zap-16
      bug: octicons/bug-16
      example: octicons/beaker-16
      quote: octicons/quote-16

# 扩展
markdown_extensions:
  - admonition
  - pymdownx.details
  - pymdownx.superfences
  - abbr
  - pymdownx.snippets
  - def_list
  - tables
  - pymdownx.tasklist:
      custom_checkbox: true
  - attr_list
  - md_in_html
  - meta
  - pymdownx.highlight:
      anchor_linenums: true
  - pymdownx.inlinehilite
  - pymdownx.caret #下划线
  - pymdownx.mark #文本高亮
  - pymdownx.tilde #删除线



# 自定义css
extra_css: 
   - '//cdn.staticaly.com/gh/codeslive/cdn@main/css/imageszoom.css' #图片放大css
  #- '//cdn.staticaly.com/gh/codeslive/images-pages@main/cdn/css/custom.css'
  #- '//cdn.staticaly.com/gh/codeslive/images-pages@main/cdn/css/simplelightbox.min.css' #图片放大css

# 自定义js
extra_javascript: 
  - '//cdn.staticaly.com/gh/codeslive/cdn@main/js/busuanzi.pure.mini.js' # 网站访问统计
  - '//cdn.staticaly.com/gh/codeslive/cdn@main/js/imageszoom.js' # 图片放大js
  #- '//cdn.staticaly.com/gh/codeslive/cdn@main/js/jquery-3.2.1.min.js' 
  #- '//cdn.staticaly.com/gh/codeslive/cdn@main/js/simplelightbox.min.js'  #图片放大js
  #- '//cdn.staticaly.com/gh/codeslive/cdn@main/js/custom.js'


# 设置
extra:
    social:
        -   icon: fontawesome/brands/github
            link: https://github.com/codeslive
            name: github
        -   icon: fontawesome/brands/slack
            link: https://codeslive.github.io
            name: myblog
        -   icon: fontawesome/solid/paper-plane
            link: 2783779285@qq.com
            name: 邮箱地址

# 文档区
nav:
    - 文档介绍: 'index.md'
    - '在线云文档':
        - '静态云文档':
            - mkdoc : 'mkdocs.md'
            - docsify : 'docsify.md'
        - '动态云文档':
            - leanote : 'leanote.md'
            - mrdoc : 'mrdoc.md'
            - showdoc: 'showdoc.md'
    - 个人博客搭建:
        - '静态博客':
            - hexo : 'hexo.md'
            - vuepress : 'vuepress.md'
        - '动态博客':
            - halo : 'halo.md'
            - worldpress : 'worldpress.md'
    - 开发记录: 'record.md'

```



###  部署站点

```

 1. 打包命令
 mkdocs build
 2. 添加仓库
 git init
 git remote add origin gh repo clone codeslive/mkdocs
 3. 上传
 mkdocs gh-deploy
 or
 mkdocs build --clean && mkdocs gh-deploy

```

### 六、相关教程
- [快来美化你的MKDocs吧](https://juejin.cn/post/7066641709198737416#heading-5)

- [mkdocs-material](https://squidfunk.github.io/mkdocs-material/setup/changing-the-colors/)

### 七、效果演示

###### 白天模式

![](https://cdn.staticaly.com/gh/codeslive/images-pages@main/2022/202211072046868.webp)

###### 夜间模式

![](https://cdn.staticaly.com/gh/codeslive/images-pages@main/2022/202211072045847.webp)
