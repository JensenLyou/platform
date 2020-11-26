import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home/index.vue";
import developer from "./views/developer/router.js";

Vue.use(Router);

const router =  new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/home",
      meta: {
        title: 'UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链',
        content: {
          keywords: 'UDO,udo,UDO链,mybitt钱包,mybitt,区块链,区块链搭建,区块链体验,区块链技术,联盟链搭链,联盟链搭建,搭链体验,公有链,联盟链,私有链,通用型数字化开放平台,数字化开放平台,智能合约,链码,fabric,数据存证,数字安全,',
          description: 'UDO通用型数字化开放平台利用区块链技术提供区块链解决方案,智能合约开发,行业通证解决方案,此外还有通过fabric网络区块链搭链体验,仿真体验搭链过程'
        }
      }
    },
    {
      path: "/home",
      name: "home",
      des: "首页",
      component: Home,
      meta: {
        title: 'UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链',
        content: {
          keywords: 'UDO,udo,UDO链,mybitt钱包,mybitt,区块链,区块链搭建,区块链体验,区块链技术,联盟链搭链,联盟链搭建,搭链体验,公有链,联盟链,私有链,通用型数字化开放平台,数字化开放平台,智能合约,链码,fabric,数据存证,数字安全,',
          description: 'UDO通用型数字化开放平台利用区块链技术提供区块链解决方案,智能合约开发,行业通证解决方案,此外还有通过fabric网络区块链搭链体验,仿真体验搭链过程'
        }
      }
    },
    {
      path: "/case",
      name: "case",
      des: "技术方案",
      component: () => import("./views/case/index.vue"),
      meta: {
        title: 'UDO_通用型数字化开放平台_技术方案_创客区块链',
        content: {
          keywords: 'UDO,技术方案,mybitt钱包,mybitt,UDO链,区块链,区块链搭建,区块链体验,区块链技术,联盟链搭链,联盟链搭建,搭链体验,公有链,联盟链,私有链,通用型数字化开放平台,数字化开放平台,智能合约,链码,fabric,数据存证,数字安全,',
          description: 'UDO通用型数字化开放平台利用区块链技术提供区块链解决方案,智能合约开发,行业通证解决方案,此外还有通过fabric网络区块链搭链体验,仿真体验搭链过程'
        }
      }
    },
    {
      path: "/example",
      name: "example",
      des: "案例",
      component: () => import("./views/example/index.vue"),
      meta: {
        title: 'UDO_通用型数字化开放平台_案例_创客区块链',
        content: {
          keywords: 'UDO,案例,mybitt钱包,mybitt,UDO链,区块链,区块链搭建,区块链体验,区块链技术,联盟链搭链,联盟链搭建,搭链体验,公有链,联盟链,私有链,通用型数字化开放平台,数字化开放平台,智能合约,链码,fabric,数据存证,数字安全,',
          description: 'UDO通用型数字化开放平台利用区块链技术提供区块链解决方案,智能合约开发,行业通证解决方案,此外还有通过fabric网络区块链搭链体验,仿真体验搭链过程'
        }
      }
    },
    {
      path: "/case_demo",
      name: "case_demo",
      des: "技术方案-案例",
      component: () => import("./views/case/case_demo.vue"),
      meta: {
        title: 'UDO_通用型数字化开放平台_技术方案-案例_创客区块链',
        content: {
          keywords: 'UDO,技术方案-案例,mybitt钱包,mybitt,UDO链,区块链,区块链搭建,区块链体验,区块链技术,联盟链搭链,联盟链搭建,搭链体验,公有链,联盟链,私有链,通用型数字化开放平台,数字化开放平台,智能合约,链码,fabric,数据存证,数字安全,',
          description: 'UDO通用型数字化开放平台利用区块链技术提供区块链解决方案,智能合约开发,行业通证解决方案,此外还有通过fabric网络区块链搭链体验,仿真体验搭链过程'
        }
      }
    },
    {
      path: "/wallet",
      name: "wallet",
      des: "钱包",
      component: () => import("./views/wallet/index.vue"),
      meta: {
        title: 'UDO_通用型数字化开放平台_mybitt钱包_创客区块链',
        content: {
          keywords: 'UDO,mybitt钱包,mybitt,UDO链,区块链,区块链搭建,区块链体验,区块链技术,联盟链搭链,联盟链搭建,搭链体验,公有链,联盟链,私有链,通用型数字化开放平台,数字化开放平台,智能合约,链码,fabric,数据存证,数字安全,',
          description: 'UDO通用型数字化开放平台利用区块链技术提供区块链解决方案,智能合约开发,行业通证解决方案,此外还有通过fabric网络区块链搭链体验,仿真体验搭链过程'
        }
      }
    },
    {
      path: "/experience",
      name: "experience",
      des: "仿真体验",
      component: () => import("./views/experience/index.vue"),
      meta: {
        title: 'UDO_通用型数字化开放平台_仿真体验_创客区块链',
        content: {
          keywords: 'UDO,mybitt钱包,mybitt,UDO链,区块链,区块链搭建,区块链体验,区块链技术,联盟链搭链,联盟链搭建,搭链体验,公有链,联盟链,私有链,通用型数字化开放平台,数字化开放平台,智能合约,链码,fabric,数据存证,数字安全,',
          description: 'UDO通用型数字化开放平台利用区块链技术提供区块链解决方案,智能合约开发,行业通证解决方案,此外还有通过fabric网络区块链搭链体验,仿真体验搭链过程'
        }
      }
    },
    {
      path: "/templet",
      name: "templet",
      des: "模板搭建",
      component: () => import("./views/build/templet.vue"),
      meta: {
        title: 'UDO_通用型数字化开放平台_模板搭建_创客区块链',
        content: {
          keywords: 'UDO,模板搭建,mybitt,mybitt钱包,UDO链,区块链,区块链搭建,区块链体验,区块链技术,联盟链搭链,联盟链搭建,搭链体验,公有链,联盟链,私有链,通用型数字化开放平台,数字化开放平台,智能合约,链码,fabric,数据存证,数字安全,',
          description: 'UDO通用型数字化开放平台利用区块链技术提供区块链解决方案,智能合约开发,行业通证解决方案,此外还有通过fabric网络区块链搭链体验,仿真体验搭链过程'
        }
      }
    },
    {
      path: "/complete",
      name: "complete",
      des: "搭建完成",
      component: () => import("./views/build/complete.vue"),
      meta: {
        title: 'UDO_通用型数字化开放平台_搭建完成_创客区块链',
        content: {
          keywords: 'UDO,搭建完成,mybitt,mybitt钱包,UDO链,区块链,区块链搭建,区块链体验,区块链技术,联盟链搭链,联盟链搭建,搭链体验,公有链,联盟链,私有链,通用型数字化开放平台,数字化开放平台,智能合约,链码,fabric,数据存证,数字安全,',
          description: 'UDO通用型数字化开放平台利用区块链技术提供区块链解决方案,智能合约开发,行业通证解决方案,此外还有通过fabric网络区块链搭链体验,仿真体验搭链过程'
        }
      }
    },
    {
      path: "/searchBlockHash",
      name: "searchBlockHash",
      des: "搜索块哈希",
      component: () => import("./views/build/searchBlockHash.vue"),
      meta: {
        title: 'UDO_通用型数字化开放平台_搜索块哈希_创客区块链',
        content: {
          keywords: 'UDO,搜索块哈希,mybitt,mybitt钱包,UDO链,区块链,区块链搭建,区块链体验,区块链技术,联盟链搭链,联盟链搭建,搭链体验,公有链,联盟链,私有链,通用型数字化开放平台,数字化开放平台,智能合约,链码,fabric,数据存证,数字安全,',
          description: 'UDO通用型数字化开放平台利用区块链技术提供区块链解决方案,智能合约开发,行业通证解决方案,此外还有通过fabric网络区块链搭链体验,仿真体验搭链过程'
        }
      }
    },
    {
      path: "/searchTransforHash",
      name: "searchTransforHash",
      des: "搜索块交易哈希",
      component: () => import("./views/build/searchTransforHash.vue"),
      meta: {
        title: 'UDO_通用型数字化开放平台_搜索块交易哈希_创客区块链',
        content: {
          keywords: 'UDO,搜索块交易哈希,mybitt,mybitt钱包,UDO链,区块链,区块链搭建,区块链体验,区块链技术,联盟链搭链,联盟链搭建,搭链体验,公有链,联盟链,私有链,通用型数字化开放平台,数字化开放平台,智能合约,链码,fabric,数据存证,数字安全,',
          description: 'UDO通用型数字化开放平台利用区块链技术提供区块链解决方案,智能合约开发,行业通证解决方案,此外还有通过fabric网络区块链搭链体验,仿真体验搭链过程'
        }
      }
    },
    {
      path: "/searchIdHash",
      name: "searchIdHash",
      des: "搜索ID哈希",
      component: () => import("./views/build/searchIdHash.vue"),
      meta: {
        title: 'UDO_通用型数字化开放平台_搜索ID哈希_创客区块链',
        content: {
          keywords: 'UDO,搜索ID哈希,mybitt,mybitt钱包,UDO链,区块链,区块链搭建,区块链体验,区块链技术,联盟链搭链,联盟链搭建,搭链体验,公有链,联盟链,私有链,通用型数字化开放平台,数字化开放平台,智能合约,链码,fabric,数据存证,数字安全,',
          description: 'UDO通用型数字化开放平台利用区块链技术提供区块链解决方案,智能合约开发,行业通证解决方案,此外还有通过fabric网络区块链搭链体验,仿真体验搭链过程'
        }
      }
    },
    ...developer
  ],
});


export default router;