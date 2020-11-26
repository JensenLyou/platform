export default {
  developer: {
    // 发布智能合约
    create: {
      searchPlaceholder: "请输入合约地址、钱包地址搜索",
      introduce_title: "介绍",
      introduce: [
        "智能合约是能够自动执行合约条款的计算机程序，当一个预先编好的条件被触发时，智能合约便执行相应的合同条款。",
        "智能合约并不依赖单个中心化的服务器，而是分布式的，通过网络节点来自动运行。",
        "它不但是由代码进行定义的，也是由代码强制执行的，完全自动而无法干预。可以最大限度地减少信任的方式来解决一些普通事情。"
      ],
      explain_title: "说明",
      Explain: [
        "创建智能合约需要按照规定填写智能合约的相关信息，发布成功之后智能合约的信息将<span class='text-yellow'>不能修改</span>，填写合约信息时要慎重。",
        "创建智能合约是免费的，但是为了杜绝恶意创建，签名的钱包账户必须有足够的UC否则签名不成功。",
        "抵押的手续费只是暂时冻结在您的账户里，然后会按照一定的时间和比例周期性地返还到您的余额帐户。",
        "智能合约发布成功只是将合约发布到链上并未启动运行，如需启动合约需要填写初始化参数，才可启动合约。",
        "不能删除当前运行的合约"
      ],
      steps_title: "创建合约的流程",
      steps: [
        // 步骤一
        {
          title: "填写资料",
          des: "按照规定填写智能合约的相关信息资料",
          name: {
            label: "合约名称", // developer.create.steps[0].name.label
            placeholder: "请输入合约名称",
            error: "请输入正确名称",
            rules:
              "• 2-32个字符，可输入汉字、字母、数字、空格<br />• 合约一旦发布成功，合约名称则无法修改"
          },
          contractSymbol: {
            label: "合约英文简称", // developer.create.steps[0].contractSymbol.label
            placeholder: "请输入合约简称",
            error: "请输入正确简称",
            rules:
              "• 2-16个字符，可输入大小写字母、数字<br />• 合约一旦发布成功，合约简称则无法修改"
          },
          version: {
            label: "合约版本", // developer.create.steps[0].version.label
            placeholder: "请输入合约版本号", // developer.create.steps[0].version.placeholder
            error: "请输入正确版本号",
            rules: "• 可输入数字<br />• 例如：1.01"
          },
          remark: {
            label: "合约简介", // developer.create.steps[0].remark.label
            placeholder: "请输入合约的简介",
            error: "请输入2-200之间的字符长度"
          },
          ccUrl: {
            label: "上传合约代码", // developer.create.steps[0].ccUrl.label
            rules: "文件格式为zip.文件大小不得超过20M", // developer.create.steps[0].ccUrl.rules
            error: "请上传合约代码" // developer.create.steps[0].ccUrl.error
          }
        },
        // 步骤二
        {
          title: "签名确认",
          des: "使用MyBitt钱包进行签名确认",
          tips: {
            one:
              "请使用MyBitt钱包进行签名，签名的钱包地址必须要有不小于XXX BTT。<span class='text-blue pointer' @click=\"$router.push({ path: '/wallet'})\" >立即下载MyBitt钱包。",
            two:
              "签名的地址将会和合约绑定，之后的合约升级和删除合约也都必须是该地址签名才可以进行后续的操作。慎重选择签名的钱包地址。"
          }
        },
        // 步骤三
        {
          title: "发布成功",
          des: "智能合约已成功发布到链上",
          tips: [
            "合约已经成功发布到链上，如需在链上启动运行合约请点击立即启动合约，填写合约初始化参数。",
            "请妥善保存好您的合约地址，需对合约进行操作时可在搜索框中填写合约地址搜索到对应的合约。"
          ],
          name: "合约名称：",
          contractSymbol: "合约简称：",
          version: "合约版本：",
          remark: "合约简介：",
          address: "合约地址：",
          codeName: "合约代码：",
          look_contract_detail: "查看合约详情"
        },
        // 步骤四
        {
          title: "启动智能合约",
          des: "填写初始化参数启动智能合约",
          label: "初始化参数：", // developer.create.steps[3].label
          placeholder: "请输入初始参数", // developer.create.steps[3].placeholder
          link: "初始化参数是什么?" // developer.create.steps[3].link
        }
      ]
    },
    // 发布通证
    publish: {
      introduce_title: "介绍",
      searchPlaceholder: "输入token名称、简称、token标识",
      introduce: [
        "Token 的原意是指“令牌、信令”，这里翻译为“通证”，实现人人都可以发行token。",
        "数字权益证明，也就是说通证必须是以数字形式存在的权益凭证，它必须代表的是一种权利，一种固有和内在的价值",
        "加密，也就是说通证的真实性、防篡改性、保护隐私等能力，由密码学予以保障。",
        "可流通，也就是说通证必须能够在一个网络中流动，从而随时随地可以验证。其中一部分通证是可以交易、兑换的。"
      ],
      explain_title: "说明",
      Explain: [
        "发行token需要按照规定填写相关Token信息，发布成功之后Token的信息将<span class='text-yellow'>不能在修改</span>,请慎重填写Token信息。",
        "发布Toekn是<span class='text-yellow'>完全免费</span>的，但是为了杜绝恶意发布，会需要你签名钱包里有规定的UC。否则发布不成功。",
        "抵押的手续费只是暂时冻结在您的账户里，然后会按照一定的时间和比例返还给你。",
        "Token发布成功后我们会把你发布的Token发送到您签名的钱包地址上，签名时需谨慎选择签名钱包。",
        "设置多重签名是保障你Token安全的，可以选择性设置。原理是多个用户同时对一个数字资产进行签名，使得多人同时拥有权限。"
      ],
      steps_title: "发布Token的流程",
      steps: [
        // 步骤一
        {
          title: "填写资料",
          des: "按照规定填写Token的相关信息资料",

          name: {
            label: "Token名称：",
            placeholder: "请输入Token名称",
            error: "请输入token名称",
            rules:
              "• 2-32个字符，可输入汉字、字母、数字、空格<br />• Token一旦发布成功，Token名称则无法修改"
          },
          tokenSymbol: {
            label: "Token英文简称",
            placeholder: "请输入Token英文简称",
            error: "请输入Token英文简称",
            rules:
              "• 2-16个字符，可输入字母、数字<br />• Token一旦发布成功，Token简称则无法修改"
          },
          decimalUnits: {
            label: "最大小数点位数：",
            placeholder: "请输入最大小数点位数",
            error: "请输入数字",
            rules: ""
          },
          totalNumber: {
            label: "发行总量：",
            placeholder: "请输入发行总量",
            error: "请输入正整数",
            rules: ""
          },
          issuePrice: {
            label: "发行价格：",
            placeholder: "请输入发行价格",
            error: "请输入正确发行价格",
            rules: ""
          },
          iconUrl: {
            label: "Token图标：",
            placeholder: "",
            error: "请上传token图标", //developer.publish.steps[0].iconUrl.error
            rules: [
              "1、logo图片大小100x100，底层透明背景",
              "2、logo图片格式必须为png，文件大小不可超过500kb",
              "3、logo 清晰可见，不模糊"
            ]
          }
        },
        // 步骤二
        {
          title: "签名确认",
          des: "使用MyBitt钱包进行签名确认",
          tips: {
            one:
              "请使用MyBitt钱包进行签名，签名的钱包地址必须要有不小于XXX BTT。<span class='text-blue pointer' @click=\"$router.push({ path: '/wallet'})\" >立即下载MyBitt钱包。",
            two:
              "签名的地址将会和合约绑定，之后的合约升级和删除合约也都必须是该地址签名才可以进行后续的操作。慎重选择签名的钱包地址。"
          }
        },
        // 步骤三
        {
          title: "发布成功",
          des: "发布成功，Token将发布到你的签名钱包里",
          TokenName: "Token名称：",
          TokenEnglishAbbreviation: "Token英文简称：",
          Maximumdecimalpointnumber: "最大小数点位数：",
          Totalcirculation: "发行总量：",
          Issueprice: "发行价格（USD）",
          TokenIdentification: "Token标识：",
          TokenIcon: "Token图标："
        }
      ],
      // 设置多重签名
      setting_multipleSign: {
        tips: [
          "设置多重签名是针对指定的Token进行多重签名设置，设置完成后只会对该Token起到相应的作用。",
          "管理者：对添加执行者、修改执行者、修改执行签名次数做最终的签名确认。",
          "管理签名次数：添加执行者、删除执行者，修改执行签名次数操作时所需执行者签名确认的次数。",
          "执行者：添加执行者、删除执行者、修改执行签名次数、修改主网参数时需要执行者签名确认；",
          "执行签名次数：修改主网参数时所需执行者签名确认的次数。"
        ],
        ruleForm: {
          leaderAddress: {
            label: "管理者地址",
            placeholder: "请输入管理者地址"
          },
          masterThreshold: {
            label: "管理签名次数",
            placeholder: "请输入管理签名次数"
          },
          managerAddress: {
            label: "执行者地址",
            placeholder: "请输入执行者地址"
          },
          managerThreshold: {
            label: "执行签名次数",
            placeholder: "请输入执行签名次数"
          }
        }
      },
      // 多重签名详情
      multipleSign_detail: {
        Modifytheicon: "修改图标",
        TokenName: "Token名称",
        Totalcirculation: "发行总量",
        ManagerAddress: "管理者地址",
        EnglishAbbreviation: "Token英文简称",
        Issueprice: "发行价格（¥）",
        Managethenumberofsignatures: "管理签名次数",
        Maximumdecimalpointnumber: "最大小数点位数",
        TokenIdentification: "Token标识",
        Numberofsignaturesexecuted: "执行签名次数",
        Serialnumber: "序号",
        ExecutorAddress: "执行者地址",
        Operation: "操作"
      }
    },
    // 创建链
    chain: {
      steps: [
        {
          title: "填写资料",
          des: "",

          name: {
            label: "链的名称", // developer.chain.steps[0].name.label
            tips: "• 2-32个字符，可输入汉字、字母、数字",
            placeholder: "请输入链的名称"
          },
          en_short: {
            label: "链的英文简称",
            tips:
              "• 2-16个字符，可输入大写字母、数字 <br>•  链一旦发布成功，链简称则无法修改",
            placeholder: "请输入链的英文简称"
          },
          contact_name: {
            label: "申请人姓名", // developer.chain.steps[0].contact_name.label
            tips:
              "• 2-30个字符，可输入大小写字母、汉字 <br>• 请填写真实姓名，方便后期联系。",
            placeholder: "请输入申请人姓名",
            error: "请输入正确姓名"
          },
          contact_tel: {
            label: "申请人电话", // developer.chain.steps[0].contact_tel.label
            placeholder: "请输入申请人电话",
            error: "请输入您的电话",
            error2: "请输入正确手机号码"
          },
          e_mail: {
            label: "申请人邮箱地址", // developer.chain.steps[0].e_mail.label
            placeholder: "请输入申请人邮箱地址",
            error: "请输入正确邮箱地址"
          },
          remark: {
            label: "链的简介", // developer.chain.steps[0].remark.label
            placeholder: "请输入链的简介"
          }
        },
        {
          title: "线下沟通",
          des: "",

          tips:
            "工作人员会在2-3个工作日联系您，您也可以根据下方的联系方式联系我们。我们会有专门的工作人员接待您。对您创建链的需求进行沟通。",
          Contacts: "联系人：",
          MissWu: "伍女士",
          TEL: "联系电话",
          TEL_phone: "0755-86524558",
          Email: "邮箱地址",
          EmailAddress: "udo@udo.link",
          Address: "地址",
          AddressDetail: "深圳市南山区东方科技大厦2115"
        }
      ]
    },
    // 主网参数
    mainParams: {
      tips:
        "底层链服务创建智能合约、发布通证是完全免费的，为了杜绝用户的恶意创建占用资源，决定采用抵押手续费这一方式，手续费的设定完全透明化，人人都可以参与手续费的修改设定中。",
      SmartContract: "智能合约",
      updateContractCash: "修改智能合约手续费",
      updateTokenCash: "修改发行token手续费",
      FeeReturn: "手续费返回",
      amendRulesTitle: "修改手续费返还规则"
    },
    // 技术文档
    documentation: {
      APIinterfacedocumentation: "API接口文档",
      Features: "功能介绍",
      Requestparameter: "请求参数",
      parameter: "参数",
      necessary: "是否必选",
      ParameterType: "参数类型",
      description: "描述",
      response: "响应",
      tableofContents: "目录"
    },

    // 问题反馈
    Question: {
      tips: "提交的问题反馈工作人员将会在5-7个工作日给你回复，请及时查收邮件。",

      ruleForm: {
        email: {
          label: "邮箱账号",
          placeholder: "请输入您的邮箱",
          error: "请输入正确邮箱地址"
        },
        title: {
          label: "标题",
          placeholder: "请输入您的问题标题",
          error: ""
        },
        question: {
          label: "问题描述",
          placeholder: "请描述您的问题",
          error: ""
        },
        file: {
          label: "上传文件",
          tips: "选择文件，允许的文件类型：png, jpg, gif, 且不超过3.5MB"
        }
      }
    }
  },
  btn: {
    search: "搜索", //  {{ $t("btn.search") }}
    submit: "提交", //  {{ $t("btn.submit") }}
    apply: "立即申请", // {{ $t("btn.apply") }}
    create: "立即创建", // {{ $t("btn.create") }}
    delete: "删除", // {{ $t("btn.delete") }}
    detail: "详情", // {{ $t("btn.detail") }}
    lookDetial: "查看详情",
    select_icon: "选择图标", // {{ $t("btn.select_icon") }}
    select_file: "选择文件", // {{ $t("btn.select_file") }}
    setting_sign: "设置多重签名", // {{ $t("btn.setting_sign") }}
    update_sign_number: "修改签名次数", // {{ $t("btn.update_sign_number") }}
    sign: "已确认签名", // {{ $t("btn.sign") }}
    startContract: "启动合约",
    start_contract: "立即启动合约", // {{ $t("btn.start_contract") }}
    delete_contract: "删除合约",
    back_publish_page: "返回发布页", // {{ $t("btn.back_publish_page") }}
    back_list_page: "返回列表页", // {{ $t("btn.back_list_page") }}
    add_manage: "添加执行者", // {{ $t("btn.add_manage") }}
    look_sign_detail: "查看多重签名设置详情", // {{ $t("btn.look_sign_detail") }}
    View_multi_sign_aturedetails: "查看多重签名详情",
    back_up: "返回上一步", // {{ $t("btn.back_up") }}
    next_step: "下一步", // {{ $t("btn.next_step") }}
    finish: "完成",
    returnMainParams: "返回主网参数",
    returnQuestion: "返回问题反馈",
    back_list: "返回列表"
  },
  page: {
    // logo
    logoZh: "通用型数字化开放平台",
    logoEn: "Universal Digital Open Platform",

    DeveloperPlatform: "开发者平台",
    UnderlyingChainService: "底层链服务",
    CreatingSmartContract: "创建智能合约",
    ReleasePass: "发布通证",
    IssueToken: "发行token",
    MultiSignatureSetting: "多重签名设置",
    CreateChain: "创建链",
    MainNetworkParameters: "主网参数",
    StartContract: "启动合约",
    signTips: "请使用MyBitt钱包进行签名，签名钱包地址必须是合约地址。",
    Resource: "资源",
    QuestionFeedback: "问题反馈",
    Return: "返回",
    amendSuccess: "修改成功",
    submitSuccess: "提交成功",
    Serialnumber: "序号",
    ReleaseTime: "发布时间",
    ContractAddress: "合约地址",
    Status: "状态",
    Operation: "操作",
    Time: "时间",
    TelephoneNumber: "电话",
    Email: "邮箱",
    Offlinecommunication: "线下沟通",
    Successfulentry: "入驻成功",
    Failuretosettle: "入驻失败",
    BeginnerGuide: "新手指导",
    TechnicalDocumentation: "技术文档",
    Showmore: "展示更多",
    more: "更多",
    collapse: "收起",
    NoData: "暂无数据",
    searchresults: "搜索结果",
    Creationtime: "创建时间",
    prompt: "提示",
    determine: "确定",
    cancel: "取消",
    // 创建智能合约
    Startcontract: "启动合约",
    Upgradecontract: "升级合约",
    Deletecontract: "删除合约",
    Contractdetails: "合约详情",
    Successfullydeleted: "已成功删除",
    suredeletecontract: "确定删除此合约?",
    Initializecontractparameters: "初始化合约参数",
    Pleaseenterparameters: "请输入初始化合约参数",
    SearchKeywordsCannotBeEmpty: "搜索关键词不能为空",
    Started: "已启动",
    Deleted: "已删除",
    PendingInitialization: "待初始化",
    InsufficientBalance: "余额不足",
    Disabled: "已禁用",
    Deprecated: "已弃用",
    // 发布token
    NumberOfPerformers: "执行者个数",
    ExecutorSignatures: "执行者签名次数",

    // 多重签名
    Deleteperformer: "删除执行者", //  page.Deleteperformer
    Addperformer: "添加执行者", //  page.Addperformer
    Setupmultiplesignatures: "设置多重签名",
    Replacetokenicon: "替换token图标",
    Pleaseselectasignaturetype: "请选择签名类型",
    Pleaseenterthenumberofsignatures: "请输入签名次数",
    suredeletetheperformer: "确定删除该执行者?",
    Tmanageraddresscannotduplicated: "管理者地址不能和执行者地址重复",
    signaturesmustbeless: "签名次数需小于等于执行者个数",
    Executoraddresscannotberepeated: "执行者地址不能重复",
    duplicatedwithmanageraddress: "执行者地址不能和管理者地址重复",

    // 检验提示
    PleaseEnter3and18: "请输入大于3, 小于等于18的整数数字",
    PleaseEnter0100: "请输入0-100之间的数值",
    PleaseEnterPositiveNumber: "请输入正数数字"
  },
  placeholder: {
    keywordSearch: "请输入关键词搜索", // placeholder.keywordSearch
    contractCash: "请输入发布智能合约需抵押的手续费数量",
    tokenCash: "请输入发行token需抵押的手续费数量",
    immediatelyPercentage: "请输入立即返还总数量的百分比",
    periodDuration: "请输入每期的时长",
    periodPercentage: "请输入每期返还总数量的百分比",
    mustNumeric: "必须为数字值"
  },

  // 除了开发者平台
  web: {
    // -- 首页 start --
    HomePage: "首页",
    TechnicalSolution: "技术方案",
    Cases: "案例",
    BlockchainBrowser: "区块浏览器",
    Wallet: "钱包",
    Regitser:"登录/注册",
    Universaldigitalplatform: "通用型数字化开放平台",
    // 登录弹窗
    AccountLogin:"账号密码登录",
    MobileLogin:"手机号登录",
    Mobile:'手机号',
    Account:'账号',
    Pwd:'密码',
    code:'验证码',
    getCode:'获取验证码',
    login:'登录',
    forget:'忘记密码',
    getAccount:'注册账号',
    // 忘记密码注册弹窗
    RegisterPhone:'请输入手机号',
    RegisterCode:'输入验证码',
    FirstPassword:'请设置6-20位至少两种字符组合密码',
    SecondPassword:'请再次输入您的密码',
    UpdatePassword:'修改密码',
    Register:'立即注册',
    Text1:'请阅读并用意',
    Text2:'《用户服务协议》',
    Text3:'和',
    Text4:'《隐私政策》',
    ReturnLogin:'返回账号登录',
    // 平台介绍
    Platformintroduction: "平台介绍",
    udois01:
      "UDO 是具有自主知识产权的通用型数字化开放平台为各领域的区块链应用提供安全高效的区块链基础设施和通用的数字化平台。",
    udois02:
      "UDO 具备快速构建各行业去中心化应用的能力基于企业及机构的应用场景和业务需求提供专业的区块链解决方案，共同构建价值互联网应用体系和生态。",
    Viewwhitepaper: "查看白皮书",

    //技术特点
    Technicalcharacteristics: "技术特点",
    FreeServiceCharge: "零手续费",
    PrivacyPolicy: "隐私权限策略",
    CompletelyDecentralized: "完全去中心化",
    Universal: "高通用",
    TradingAcrossChain: "跨链交易",
    MultisignatureMechanism: "多重签名机制",

    // 服务介绍
    ServicesIntroduction: "服务介绍",
    BlockchainSolutions: "区块链解决方案",
    BlockchainSolutionsDes:
      "面向各个行业和领域提供可配置的企业级区块链技术服务包括数字资产，分布式记账本，数字存证和跨链服务等。",
    IntelligentContractDevelopment: "智能合约开发",
    IntelligentContractDevelopmentDes:
      "基于区块链底层技术，支持多语言合约开发，提供标准化可编程的合约开发和升级功能，通过智能合约构建出可执行商业逻辑的区块链应用。",
    IndustryTOKENSolution: "行业通证解决方案",
    IndustryTOKENSolutionDes:
      "应不同行业需求， 可定制数字资产开发，支持数字货币的发行，管理，交易，查询等一系列系统服务；实现实体资产和虚拟资产的通证化。",

    // 合作伙伴
    CooperativePartner: "合作伙伴",

    // 底部
    weTry01: "我们一起努力",
    weTry02: "让区块链技术造福更多的人",
    StartNow: "现在开始",
    BusinessCooperation: "商务合作",
    TechnicalSupport: "技术支持",
    Copyrightfiling: "版权备案",
    CooperationPhone:'合作电话',
    TechSupport:"技术支持",
    UserSupport:"用户支持",
    JoinUs:"加入我们",
    CompanyAddress:"公司地址：深圳市南山区科苑路6号科技园大厦5层510号",
    ContactUs:'联系我们',
    footerInput1:'请输入您的姓名',
    footerInput2:'请输入您的联系电话',
    footerInput3:'请输入您的邮箱地址',
    footerInput4:'简单叙述您的需求.....',
    submit:'提交',

    // -- 首页 end --

    // -- 技术方案 --
    Accuratepovertyalleviationsolution: "精准扶贫解决方案",
    AccuratepovertyalleviationsolutionDes:
      "扶贫对象和捐赠者信息，捐赠财物信息上链，实现精准扶贫和一对一扶贫，构建扶贫信任和开放平台。",
    Details: "查看详情",
    Houserentalsolution: "房屋租赁解决方案",
    HouserentalsolutionDes:
      "房屋信息，用户身份和征信信息上链，同时租赁合同以智能合约形势部署在区块链上，打造安全，可信的房屋租赁数字化平台。",
    ElectronicMedicalRecordsSolution: "电子病历解决方案",
    ElectronicMedicalRecordsSolutionDes:
      "电子病历在不同医院的区块链接点线性存储，保证电子病历不可篡改，可信度和真实性， 同时确保患者隐私安全。",
    SmartCitySolution:"智慧城市解决方案",
    SmartCitySolutionDes:"为实现城市治理高效有序、为民服务全程全时、数字经济融合发展的城市发展新形态，推动新一代信息技术与城市现代化发展深度融合。",
    DigtalSavetySolution:"数字安全解决方案",
    DigtalSavetySolutionDes:"利用区块链可信多方安全计算，打造数据共享合作的基础，有利于在数据安全的前提下充分释放数据价值。",
    DataEvidenceSolution:"数据存证解决方案",
    DataEvidenceSolutionDes:"信息数据上链，实现实现点对点的数据查询，压缩中间查询、问责环节，提升整体效率。",
    // --技术方案 end--

    // --精准扶贫 start--
    AccuratePovertyAlleviation: "精准扶贫",
    AccuratePovertyAlleviationDes:
      "扶贫财物来源和去向不透明，财务没有真正提供到需要扶持的对象手中，并且扶贫记录不可以追溯。",
    NottransparencyofInformation: "信息不透明",
    NottransparencyofInformationDes:
      "扶贫对象证明信息不透明，扶贫财物来源和去向不透明。",
    Untraceable: "不可追溯",
    UntraceableDes: "扶贫财物以及相关信息不可追溯，无法得到有效的监督。",
    EasytobeTampered: "可篡改",
    EasytobeTamperedDes: "扶贫对象信息可以人为篡改，捐赠记录和物流信息可篡改。",
    advantageAccuratepovertyalleviationDes: "扶贫对象真正得到帮扶和资助。",
    Rebuildcreditsystem: "重塑信任体系",
    RebuildcreditsystemDes: "扶贫财物用于实处，提高捐赠者信心和积极性。",
    Simplifyprocess: "简化流程",
    SimplifyprocessDes: "实现点对点的帮扶，省去中间人和一些不必要的流程",
    // --精准扶贫 end--

    // 数据存证 start
    //banner
    DataEvidence:"数据存证",
    DataEvidenceDes:"传统行业数据参与协同主体多，信息来源广，数据量大，业务链条长，无法实现跨区域、多主体、全流程的立体化多维共享协作。",
    // 业务痛点
    ComplexProcess:"流程复杂",
    ComplexProcessDes:"多方协同主体，信息量大，业务链条长无法跨区域，存在信息孤岛等问题，这导致了高昂的协作成本和低效的合作结果。",
    Irresponsible:"责任不明确",
    IrresponsibleDes:"多方协同主体各自保存数据，数据可进行篡改，出现问题无法直接找出责任方。",
    InfomationLeak:"信息泄露",
    InfomationLeakDes:"数据进行没有加密储存，存在信息泄露的风险。",
    // 方案优势
    SimplyComplex:"简化复杂",
    SimplyComplexDes:"实现点对点的数据查询，压缩中间环节，提升整体效率。",
    DataCollaboration:"数据协同，责任明确",
    DataCollaborationDes:"多方数据打通，数据不可篡改，出现问题，可直接找到责任方。",
    InformationSecurity:"信息安全",
    InformationSecurityDes:"信息会经过哈希函数算法加密，所有不存在信息泄露的风险。",
    // 数据存证 end

    // 智慧城市 start
    // banner
    SmartCity:"智慧城市",
    SmartCityDes:"为实现城市治理高效有序、为民服务全程全时、数字经济融合发展的城市发展新形态，通过安全合规的服务、推动新一代信息技术与城市现代化发展深度融合，打造新型智慧城市，让人民群众对智慧城市发展更有获得感。",
    // 趋势分析                                                                                                                                                                                                                                                                                                                                     
    TrendAnalysis:"趋势分析",
    SmartTrend:"智慧城市趋势",
    SmartTrendDes:"智慧城市发展理念、建设思路、实施路径、运行模式、技术手段的全方位迭代升级，进入以人为本、成效导向、统筹集约、协同创新的新型智慧城市发展阶段，进一步强化城市智能设施统筹布局和共性平台建设，破除数据孤岛，加强城乡统筹。",
    UrbanSmart:"城市治理智能化",
    UrbanSmartDes:"随着区块链进一步成熟，利用区块链技术对海量的城市基础设施状态数据和运行数据进行数据存证，将加速渗透到智慧城市各领域。",
    PublicService:"公共服务透明化",
    PublicServiceDes:"以信息化、透明化方式实现网上办事与行政审批过程的全程跟踪、全程留痕、全程监督，探索模块化审批、容缺预审、限时审批相结合的全并联审批，形成新型智慧城市高效透明环境。",
    // 解决方案
    SolutionCase:"解决方案",
    SmartGovernmentSolutions:"智慧政务解决方案",
    SmartGovernmentSolutionsDes:"Smart government solutions",
    // 业务痛点
    CumbersomeProcess:"流程繁琐",
    CumbersomeProcessDes:"办事流程繁琐，纸质资料繁多，登记服务时间常，办事效率不高",
    SmartCityUntraceableDes:"交易记录以及相关信息不可追溯，无法得到有效的监督。",
    // 方案优势
    Traceable:"可追溯",
    TraceableDes:"交易记录以及相关信息可追溯，得到有效的监督。",
    SmartCityInformationSecurityDes:"信息会经过算法加密，单向密码体制，只有加密过程，没有解密过程。",
    // 智慧城市 end

    // 数字安全 start
    DigtalSavety:"数字安全",
    DigtalSavetyDes:"在大数据时代背景下，国家对于建设数字中国、智慧社会有很多战略部署。企业和企业之间、企业和政府之间存在很多需要数字合作的领域。加快建设数字中国，既要大力发展以数据为关键要素的数字经济，也要形成与之相匹配的数据安全保护体系。利用区块链可信多方安全计算，打造数据共享合作的基础，有利于在数据安全的前提下充分释放数据价值",
    PushTech:"推动科技创新",
    PushTechDes:"近年来，随着区块链、大数据、物联网、人工智能的快速发展，推动着传统行业进行深刻的业务变革，数字安全对传统进行着全业务流程的重塑，将会极大改变行业格局。",
    DigitalDivide:"缩小数字鸿沟",
    DigitalDivideDes:"智能手机的普及，使数字金融能够进入生活的方方面面。随着虚拟银行业务的普及，所有人均可以随时、平等地获得服务，消除由于地域等问题带来的一系列现象。",
    ReapDividend:"收获数字红利",
    ReapDividendDes:"未来虚拟银行势必会以信息流带动技术流、资金流、人才流、物资流，促进资源配置优化，促进生产率提升，为推动创新发展、转变经济发展方式、调整经济结构发挥积极的作用，为实体经济的发展带来更大的帮助",
    VirtualBankingSolutions:"虚拟银行解决方案",
    VirtualBankingSolutionsDes:"Virtual banking solutions",
    SaveRisk:"安全风险大",
    SaveRiskDes:"多方协同主体各自保存数据，数据可进行篡改，稍有不慎即可能产生较大的安全问题。",
    SolutionScenario:"解决方案场景",
    CoreBankSys:"核心银行系统",
    CoreBankSysDes:"对所有存款、贷款等业务实现产品化管理，提供灵活的产品参数化配置，满足金融产品创新和业务扩展的需要。能根据市场需要，通过参数配置，快速定制、组合、创新产品。整个核心银行系统按照业务处理的特点可以划分为四类：渠道服务、客户服务、应用产品、分析决策",
    SolutionArchitecture:"解决方案架构",
    // 数字安全 end

    // --房屋租赁 start--
    //banner
    Houserental: "房屋租赁",
    HouserentalDes:
      "房屋租赁信息在现有的应用上虚假信息横行，用户难以辨别信息的真伪和有效性，租赁成本和租赁效率太低。各种不良中介和不良房东的存在甚至让租客在租房时蒙受损失。",
    // nav
    BusinessProblems: "业务痛点",
    SolutionFramework: "方案架构",
    // 方案优势
    SolutionAdvantages: "方案优势",
    // 业务痛点
    InformationAsymmetry: "信息不对称",
    InformationAsymmetryDes: "市场虚假租赁信息多，对租赁双方造成困扰。",
    Inefficient: "效率低",
    InefficientDes: "房屋租赁流程复杂，达成租赁协议效率低。",
    Highcost: "成本高",
    HighcostDes:
      "租客耗时耗力耗资金，房东付出获得租客费用(房东付出高额中介费用)。",
    // 方案优势
    TransparencyofInformation: "透明",
    TransparencyofInformationDes: "房屋租赁信息透明化，杜绝虚假房源",
    Efficiency: "高效",
    EfficiencyDes: "租赁房屋一步到位，快速达成租赁协议",
    Reliable: "可信",
    ReliableDes: "租赁合约执行自动化执行，可信度高",
    // --房屋租赁 end--

    // --电子病历 start--
    // banner
    Electronicmedicalrecords: "电子病历",
    ElectronicmedicalrecordsDes:
      "电子病历信息加密上链。病人通过密码学技术保护自己个人隐私和数据安全存储。医院则实现电子病历分布式存储和共享，保证电子病历有效性和真实性。",
    // 业务痛点
    MedicalrecordsarenotShared: "病历不共享",
    MedicalrecordsarenotSharedDes: "各个医院的电子病历在独立医疗系统中存储",
    Medicalrecordsaredisclosed: "病历泄露",
    MedicalrecordsaredisclosedDes: "电子病历没有加密存储，信息有悲泄露风险",
    Thereferralprocessiscomplex: "转诊流程复杂",
    ThereferralprocessiscomplexDes: "转诊重复录入患者信息和重复诊断，流程复杂",
    // 方案优势
    AccurateDiagnostic: "诊断准确性高",
    AccurateDiagnosticDes:
      "病历链上存储，可追溯，为医生提供诊断资料，提高诊断结果",
    Safetyprivacy: "隐私安全",
    SafetyprivacyDes: "链上病历数据所有权为患者个人所有，患者授权才能查看",
    SecurityNetwork: "网络安全",
    SecurityNetworkDes:
      "电子病历分布式储存在各个医院的区块链节点上，数据难以篡改",
    // --电子病历 end--

    // -- 案例 start--
    OnchainSaving:'全球首家区块链省钱购物平台',
    OnchainSavingDes:'“链上省”是一款基于区块链的综合性导购省钱APP，利用区块链的可追溯性，对电商消费扶贫的所有产品进行全程监控，通过智能合约技术建立货物来源查询，解决目前消费扶贫供应方和需求方的信任问题以及电商中心化问题,促进我国消费扶贫的进一步发展。',
    ScanDownload:'扫一扫下载',
    PercisionPoverty:'精准扶贫助农平台',
    PercisionPovertyDes:'“开鑫小猪”是一款基于微信步数转换为“生命能量值”，通过捐赠“生命能量值”就能轻松献出一份爱心。用户的生命能量值领取记录、生命能量捐赠记录、公益物质捐赠记录都会上链保存，以此作为项目的捐赠存证。所有上链数据无法删改，所有用户都可以查阅到项目的相关记录，从而增加小猪平台的公信度，公益项目的透明度，实现精准扶贫。',
    ScanExperience:'扫码体验',
    MakeaPoint: "真评网",
    Decentralizedtourismserviceplatform: "去中心化旅游服务平台",
    DecentralizedtourismserviceplatformDes:
      "“makeapoint” 是基于区块链的去中心化的旅游服务平台，用户信息上链，保证信息的真实性， 有效解决信任问题，真实分享旅游中的美好心情，防止虚假点评。",
    StartonWechat: "微信体验",
    DigitalIntegralClaw: "欢乐夹娃娃",
    Decentralizedgames: "去中心化游戏",
    DecentralizedgamesDes:
      "一款去中心化游戏，游戏玩家可以通过抓取娃娃，分享游戏获得游戏通证奖励",
    // -- 案例 end--


  }
};
