# cqcomponent

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
核心配置webpack.config.js
本事例搭建一个简单vue单文件组件的例子


--所有命令后面的 --save-dev 代表的是: 
    --save 是[package.json]文件内dependencies生产环境依赖的插件
    --dev 是[package.json]文件内 devdependencies 开发环境的依赖插件
--创建vue-cli
    --从头学习 用这个命令
    vue init webpack-simple  cqcomponent
    --真正开发用这个命令创建项目
    vue inti webpack cqcomponent
    --加载node-moudle 初始化项目
    npm install
    --处理.css文件用的loader
    npm install --save-dev css-loader
    npm install --save-dev style-loader
    --从build.js中把css单独提出 ,这个插件有个坑，版本不对会报错
    npm install --save-dev extract-text-webpack-plugin@2.1.2 
    --图片2种加载器
    npm install --save-dev url-loader
    --安装less loader
    npm install --save-dev less-loader less
    --http协议插件
    npm install --save-dev  vue-resource
    --路由插件
    npm install --save-del  vue-router
    --转码用插件
    npm install --save-dev babel-plugin-transform-runtime
    npm install babel-core babel-preset-stage-2 babel-eslint babel-loader babel-preset-es2015     babel-preset-stage-2 --save-dev
    --打包自动生成 index.html插件
    npm install --save-dev html-webpack-plugi

    --解决按需引用组件时既要导入js 也要导入 css 文件的问题
    npm install babel-plugin-component --dev
    https://zhuanlan.zhihu.com/p/21802181  //知乎解释
    https://github.com/QingWei-Li/babel-plugin-component  //github api

    --webpack.config.js 配置中加入
    libraryTarget: 'umd',
