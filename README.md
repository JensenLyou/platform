# dicenglian-font

预发布环境

## 目录结构

```shell
├── src                        // 源代码
│   ├── api                    // 所有请求
│   ├── assets                 // 静态资源目录
│   ├── components             // 全局公用组件
│   ├── lang                   // 国际化的配置
│   ├── style                  // 全局样式
│   ├── utils                  // 全局公用方法
│   ├── views                  // 业务模块根目录
│   │	  ├── case               // 技术方案模块
│   │	  ├── developer          // 开发者平台模块
│   │	  │   ├── chain          // 创建链模块
│   │	  │   ├── create         // 创建合约模块
│   │     │   ├── document       // 技术文档模块
│   │     │   ├── mainParams     // 主网参数模块
│   │     │   ├── publish        // 发布通证模块
│   │     │   └── question       // 问题反馈模块
│   │	  ├── home               // 首页模块
│   │	  └── wallet             // 钱包模块
│   ├── App.vue                // 入口页面
│   ├── main.js                // js入口 加载全局组件  全局过滤器 初始化等
│   ├── router                 // 配置路由
│   └── store                  // 全局store管理
├── eslintrc.js                // eslint 配置项
├── .gitignore                 // git 忽略项
└── package.json               // package.json依赖文件
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```
