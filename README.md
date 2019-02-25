# 第一步

> svn 获取到项目后，项目中使用的包资源是不存在的，所以要使用 cnpm 把包资源下载下来。(为了统一管理要求使用 cnpm)

```bash
# 转换为淘宝镜像
$ npm install -g cnpm --registry=https://registry.npm.taobao.org

# 通过cnpm下载包资源
$ cnpm install

# 运行项目
$ cnpm run dev

# 打包编译项目
$ cnpm run build
```

# 项目结构

> 项目使用 vue+Vux 作为主项目架构，使用 webpack 作为打包工具。使用 vue-cli 脚手架生产项目。

```
src
│--   main.js  │  项目主入口
│--   app.vue  │  起始页面
│
└───api  │  api接口存放
│   │--   login.js  │ 登陆接口
│   │--   user.js   │ 用户接口
│
└───assets │  资源类
│   │--   css │ css样式
│   │--   icons | 图标svg
│   │--   images | 资源图片
│   │--   js | js文件
│   │--   less | less样式
│   │--   lib | 第三方js插件
│
└───components │  公共组件
│
└───data │  JSON/XML数据
│
└───router │  路由管理
│
└───store │ 本地缓存
│
└───utils │ 基础类封装
│   │--   auth │ 认证
│   │--   index | 基础
│   │--   request | http请求
│   │--   validate | 验证
└───view │ 视图页面
│   │--   login │ 登陆
│   └──────   index.vue | 登陆vue

```

# 项目技术点

```bash
    "axios": "^0.18.0",
    "js-cookie": "^2.2.0",
    "lib-flexible": "^0.3.2",
    "svg-sprite-loader": "^4.1.3",
    "vue": "^2.5.2",
    "vue-router": "^3.0.1",
    "vue-wechat-title": "^2.0.5",
    "vuex": "^3.1.0",
    "vux": "^2.9.2",
    "vux-loader": "^1.2.9"
    "autoprefixer": "^7.1.2",
    "babel-core": "^6.22.1",
    "babel-eslint": "^8.2.1",
    "babel-helper-vue-jsx-merge-props": "^2.0.3",
    "babel-loader": "^7.1.1",
    "babel-plugin-syntax-jsx": "^6.18.0",
    "babel-plugin-transform-runtime": "^6.22.0",
    "babel-plugin-transform-vue-jsx": "^3.5.0",
    "babel-preset-env": "^1.3.2",
    "babel-preset-stage-2": "^6.22.0",
    "chalk": "^2.0.1",
    "copy-webpack-plugin": "^4.0.1",
    "css-loader": "^0.28.0",
    "eslint": "^4.15.0",
    "eslint-config-standard": "^10.2.1",
    "eslint-friendly-formatter": "^3.0.0",
    "eslint-loader": "^1.7.1",
    "eslint-plugin-import": "^2.7.0",
    "eslint-plugin-node": "^5.2.0",
    "eslint-plugin-promise": "^3.4.0",
    "eslint-plugin-standard": "^3.0.1",
    "eslint-plugin-vue": "^4.0.0",
    "extract-text-webpack-plugin": "^3.0.0",
    "file-loader": "^1.1.4",
    "friendly-errors-webpack-plugin": "^1.6.1",
    "html-webpack-plugin": "^2.30.1",
    "less": "^3.9.0",
    "less-loader": "^4.1.0",
    "node-notifier": "^5.1.2",
    "optimize-css-assets-webpack-plugin": "^3.2.0",
    "ora": "^1.2.0",
    "portfinder": "^1.0.13",
    "postcss-import": "^11.0.0",
    "postcss-loader": "^2.0.8",
    "postcss-url": "^7.2.1",
    "rimraf": "^2.6.0",
    "semver": "^5.3.0",
    "shelljs": "^0.7.6",
    "uglifyjs-webpack-plugin": "^1.1.1",
    "url-loader": "^0.5.8",
    "vue-loader": "^13.3.0",
    "vue-style-loader": "^3.0.1",
    "vue-template-compiler": "^2.5.2",
    "webpack": "^3.6.0",

```

