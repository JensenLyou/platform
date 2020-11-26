export default [
  {
    path: "/developer",
    name: "developer",
    component: () => import("./index.vue"),
    redirect: "/developer/create",
    children: [
      // 创建智能合约
      {
        path: "/developer/create",
        name: "developer_create",
        des: "创建智能合约-介绍",
        component: () => import("./create/index.vue")
      },
      {
        path: "/developer/create_content",
        name: "developer_create_content",
        des: "创建智能合约-填写步骤",
        component: () => import("./create/content.vue")
      },
      {
        path: "/developer/create_list",
        name: "developer_create_list",
        des: "智能合约列表",
        component: () => import("./create/list.vue")
      },
      {
        path: "/developer/create_detail",
        name: "developer_create_detail",
        des: "智能合约详情",
        component: () => import("./create/detail.vue")
      },
      {
        path: "/developer/create_update",
        name: "developer_create_update",
        des: "升级智能合约",
        component: () => import("./create/update.vue")
      },
      {
        path: "/developer/create_starting",
        name: "developer_create_starting",
        des: "初始化参数",
        component: () => import("./create/starting.vue")
      },
      // 发布通证
      {
        path: "/developer/publish_token",
        name: "developer_publish_token",
        des: "发行token",
        component: () => import("./publish/index.vue")
      },
      {
        path: "/developer/publish_content",
        name: "developer_publish_content",
        des: "发行token-填写步骤",
        component: () => import("./publish/content.vue")
      },
      // 设置多重签名
      {
        path: "/developer/multipleSign",
        name: "developer_multipleSign",
        des: "设置多重签名",
        component: () => import("./publish/multipleSign.vue")
      },
      {
        path: "/developer/multipleSign_detail",
        name: "developer_multipleSign_detail",
        des: "设置多重签名详情",
        component: () => import("./publish/multipleSign_detail.vue")
      },
      {
        path: "/developer/multipleSign_detail_handle",
        name: "developer_multipleSign_detail_handle",
        des: "设置多重签名详情-操作结果",
        component: () => import("./publish/detail.vue")
      },
      {
        path: "/developer/multipleSign_setting",
        name: "developer_multipleSign_setting",
        des: "设置多重签名",
        component: () => import("./publish/setting_multipleSign.vue")
      },
      // 创建链
      {
        path: "/developer/chain",
        name: "developer_chain",
        des: "创建链",
        component: () => import("./chain/index.vue")
      },
      {
        path: "/developer/chain_list",
        name: "developer_chain_list",
        des: "链列表",
        component: () => import("./chain/list.vue")
      },
      {
        path: "/developer/chain_detail",
        name: "developer_chain_detail",
        des: "链列表",
        component: () => import("./chain/detail.vue")
      },
      // 主网参数
      {
        path: "/developer/mainParams",
        name: "developer_mainParams",
        des: "主网参数",
        component: () => import("./mainParams/index.vue")
      },
      {
        path: "/developer/mainParams_success",
        name: "developer_mainParam__success",
        des: "主网参数修改成功",
        component: () => import("./mainParams/success.vue")
      },
      // 技术文档
      {
        path: "/developer/document",
        name: "developer_document",
        des: "技术文档",
        component: () => import("./document/index.vue")
      },
      // 技术文档-新手指导
      {
        path: "/developer/document_greenhand",
        name: "developer_document_greenhand",
        component: () => import("./document/greenhand.vue")
      },
      // 技术文档-新手指导
      {
        path: "/developer/document_allgreenhand",
        name: "developer_document_allgreenhand",
        component: () => import("./document/allGreenhand.vue")
      },
      // 技术文档-api
      {
        path: "/developer/document_api",
        name: "developer_document_api",
        component: () => import("./document/api.vue")
      },
      // 技术文档-faq
      {
        path: "/developer/document_FAQ",
        name: "developer_document_FAQ",
        component: () => import("./document/FAQ.vue")
      },
      // 技术文档搜索结果
      {
        path: "/developer/document_search_result",
        name: "developer_document_search_result",
        component: () => import("./document/search_result.vue")
      },
      // 问题反馈
      {
        path: "/developer/question",
        name: "developer_question",
        des: "问题反馈",
        component: () => import("./question/index.vue")
      },
      {
        path: "/developer/question_success",
        name: "developer_question_success",
        des: "问题反馈-成功",
        component: () => import("./question/success.vue")
      }
    ]
  }
];
