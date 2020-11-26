export default {
  developer: {
    // 创建智能合约
    create: {
      searchPlaceholder:
        "Enter the contract address,wallet address to research",
      introduce_title: "Introduction",
      introduce: [
        "Smart contract is a computer program that automatically executes the terms of a contract, it’s defined by code and enforced by code.It’s completely automatically and without intervention.",
        "Once the smart contract is started, it will automatically run. When a preset condition is triggered, the smart contract will automatically execute the corresponding contract terms.",
        "Smart contract do not rely on a single centralized server,but are distributed and run automatically through network nodes.",
        "Based on these characteristics, smart contract can  solve the mutual-trust well in real life."
      ],
      explain_title: "Notes",
      Explain: [
        "To create an smart contract, you need to fill in the relevant information of the smart contract according to the regulations. After successful release, the information of the intelligent contract cannot be modified.Be careful when filling out the contract information.",
        "Creating smart contracts is free, but to prevent malicious creation, the signed wallet account must have enough UC or the signature will not succeed.",
        "The mortgage fee is only temporarily frozen in your account, and then periodically returned to your balance account in a certain amount of time and proportion.",
        "Intelligent contract publishing success only means that the contract is successfully published to the chain, but it dose not start running. If the contract needs to be started, initialization parameters need to be filled in before it can be started.",
        "Current operating contract cannot be deleted."
      ],
      steps_title: "Smart contract creating process",
      steps: [
        // 步骤一
        {
          title: "Fill in the information",
          des:
            "Fill in the smart contract Relevant information and data as required.",
          name: {
            label: "Contract name",
            placeholder: "Please enter the contract name",
            error: "Please enter the correct name",
            rules:
              "• 2-32 characters,Chinese characters,Letters, Numbers, Spaces can be input.<br />• Once the contract are published successfully,it’s name cannot be modified."
          },
          contractSymbol: {
            label: "Contract English abbreviation",
            placeholder: "Please enter the contract abbreviation",
            error: "Please enter the correct abbreviation",
            rules:
              "• 2-16 characters,Letters and Numbers can be input.<br />• Once the contract are published successfully,it’s name cannot be modified."
          },
          version: {
            label: "Contract version",
            placeholder: "Please enter the contract version",
            error: "Please enter the correct version number",
            rules: "• Input number<br />• such as：1.01"
          },
          remark: {
            label: "Introduction of contract",
            placeholder: "Please enter the introduction of contract",
            error:
              "The length of the contract introduction must be within 2-200 words."
          },
          ccUrl: {
            label: "Upload legal code",
            rules: "The file format is zip. The file size must not exceed 20M.",
            error: "Upload legal code"
          }
        },
        // 步骤二
        {
          title: "Signature confirmation",
          des: "Sign confirmation using MyBitt wallet.",
          tips: {
            one:
              "Please use MyBitt wallet to sign the contract and confirm,Signed wallet addresses must be no less than 10UC. <span class='text-blue pointer' @click=\"$router.push({ path: '/wallet'})\" >Download MyBitt wallet immediately</span>",
            two:
              "The address of the signature will be bound to the contract, and the subsequent contract upgrade and deletion must also be the address signature before the subsequent operation can be carried out. Choose the address of your signature wallet carefully."
          }
        },
        // 步骤三
        {
          title: "Released successfully",
          des: "Smart contract was successfully released to the chain.",
          tips: [
            "The contract has been successfully published on the chain. If you need to start the running contract on the chain, please click on Start the Contract Immediately and fill in the contract initialization parameters.",
            "Please keep your contract address properly. When you need to operate the contract, you can search the corresponding contract by filling in the contract address in the search box."
          ],
          name: "Contract Name:",
          contractSymbol: "Contract English Abbreviation:",
          version: "Contract Version:",
          remark: "Contract Brief:",
          address: "Contract Address:",
          codeName: "Contract Code:",
          look_contract_detail: "View contract details"
        },
        // 步骤四
        {
          title: "Start the smart contract",
          des:
            "Fill in initialization parameters and start the smart contract.",
          label: "Initialization parameters:",
          placeholder: "Please enter the initialization parameters",
          link: "What is initialization parameters?"
        }
      ]
    },
    // 发布token
    publish: {
      introduce_title: "Introduction",
      searchPlaceholder: "Enter the token name,abbreviation and token icon",
      introduce: [
        'The original meaning of Token is "token, signaling", which is translated as "passport", so that everyone can issue Token.',
        "Digital rights and interests proof, that is to say, the certificate must be in the form of digital rights and interests, it must represent a right, an inherent and intrinsic value.",
        "Encryption, that is to say, the authenticity, tamper-proof modification and privacy protection of the passport are guaranteed by cryptography.",
        "Negotiable, that is to say, the general certificate must be able to flow in a network, so that it can be verified anytime and anywhere.Among them a part passes card to be able to trade, change."
      ],
      explain_title: "Notes",
      Explain: [
        "To issue Token, you need to fill in the relevant Token information according to the regulations. After successful issuance, the Token information can not be modified. Please fill in the Token information carefully.",
        "The release of Toekn is completely free, but in order to prevent malicious publishing, you need to have a prescribed UC in your signature wallet. Otherwise, the release will not be successful.",
        "The mortgage fee is only temporarily frozen in your account and will be returned to you at a certain time and proportion.",
        "When Token is released successfully, we will send your Token to your signature wallet address. When signing, we need to choose the Signature Wallet carefully.",
        "Setting up multiple signatures is to ensure the security of your Token. It can be set selectively. The principle is that multiple users sign a digital asset at the same time, so that more than one person has the right at the same time."
      ],
      steps_title: "The process of issuing Token",
      steps: [
        {
          title: "Fill in the information",
          des: "Fill in Token's relevant information as required.",
          name: {
            label: "Tokent name：",
            placeholder: "Please enter the Token name",
            error: "Please enter the correct name",
            rules:
              "• 2-32 characters,Chinese characters,Letters, Numbers, Spaces can be input.<br />• Once the Token are published successfully,it’s name cannot be modified."
          },
          tokenSymbol: {
            label: "Token English Abbreviation：",
            placeholder: "Please enter the contract abbreviation",
            error: "Please enter the correct abbreviation",
            rules:
              "• 2-16 characters,Letters and Numbers can be input.<br />• Once the Token are published successfully,it’s name cannot be modified."
          },
          decimalUnits: {
            label: "Maximum decimal point number：",
            placeholder: "Please enter the maximum decimal point number",
            error: "Please enter a number",
            rules: ""
          },
          totalNumber: {
            label: "Total circulation：",
            placeholder: "Please enter the total amount of distribution",
            error: "Please enter a positive integer",
            rules: ""
          },
          issuePrice: {
            label: "Issue price：",
            placeholder: "Please enter the issue price",
            error: "Please enter the correct issue price",
            rules: ""
          },
          iconUrl: {
            label: "Token Icon:",
            placeholder: "",
            error: "",
            rules: [
              "1. The logo image size is 100x100, with a transparent background at the bottom",
              "2. Logo image format must be png, file size must not exceed 500 KB",
              "3. Logo is clearly visible, not ambiguous"
            ]
          }
        },
        {
          title: "Signature confirmation",
          des: "Sign confirmation using MyBitt wallet."
        },
        {
          title: "Released successfully",
          des:
            "The release is successful and Token will be published in your signature Wallet.",
          TokenName: "Token Name:",
          TokenEnglishAbbreviation: "Token English Abbreviation:",
          Maximumdecimalpointnumber: "Maximum decimal point number：",
          Totalcirculation: "Total circulation：",
          Issueprice: "Issue price:",
          TokenIdentification: "Token Identification:",
          TokenIcon: "Token Icon:"
        }
        // {
        //   title: "设置多重签名",
        //   des: "设置Master、Manager签名次数"
        // }
      ],
      // 设置多重签名
      setting_multipleSign: {
        tips: [
          "Setting up multiple signatures is to set up multiple signatures for a specified Token, which will only play a corresponding role after setting up.",
          "Manager: Make final signature confirmation for adding executors, modifying executors, and modifying the number of execution signatures.",
          "Manage the number of signatures: add the executor, delete the executor, and modify the number of signature confirmations needed by the executor when executing the number of signatures operation.",
          "Executor: Adding executor, deleting executor, modifying the number of execution signatures, and modifying the parameters of the main network require the executor's signature confirmation.",
          "Number of signatures executed: Number of signature confirmations required by the executor when modifying the parameters of the main network."
        ],
        ruleForm: {
          leaderAddress: {
            label: "Manager Address",
            placeholder: "Please enter the Manager Address" // developer.publish.setting_multipleSign.ruleForm.leaderAddress.label
          },
          masterThreshold: {
            label: "Manage the number of signatures", // developer.publish.setting_multipleSign.ruleForm.masterThreshold.label
            placeholder: "Please enter the number of managed signatures"
          },
          managerAddress: {
            label: "Executor Address", // developer.publish.setting_multipleSign.ruleForm.managerAddress.label
            placeholder: "Please enter the Executor Address"
          },
          managerThreshold: {
            // developer.publish.setting_multipleSign.ruleForm.managerThreshold.label
            label: "Number of signatures executed",
            placeholder: "Please enter the number of signatures executed"
          }
        }
      },
      // 多重签名详情
      multipleSign_detail: {
        Modifytheicon: "Modify the icon",
        TokenName: "Token Name",
        Totalcirculation: "Total circulation",
        ManagerAddress: "Manager Address",
        EnglishAbbreviation: "English Abbreviation",
        Issueprice: "Issue price",
        Managethenumberofsignatures: "Manage the number of signatures",
        Maximumdecimalpointnumber: "Maximum decimal point number",
        TokenIdentification: "Token Identification",
        Numberofsignaturesexecuted: "Number of signatures executed",
        Serialnumber: "Serial number",
        ExecutorAddress: "Executor Address",
        Operation: "Operation"
      }
    },
    // 创建链
    chain: {
      steps: [
        {
          title: "Fill in the information",
          des: "",

          name: {
            label: "The Name of Chain",
            tips:
              "• 2-32 characters, you can input Chinese characters, Letters, Numbers",
            placeholder: "Please enter the name of the chain",
            error: "please enter the correct name"
          },
          en_short: {
            label: "The English Abbreviation of Chain",
            tips:
              "• 2-16 characters, you can enter capital letters and numbers <br>•  Once the chain is published successfully, the abbreviation of the chain cannot be modified.",
            placeholder: "Please enter the English abbreviation of the chain",
            error: "please enter the correct abbreviation"
          },
          contact_name: {
            label: "Name of Applicant",
            tips:
              "• 2-30 characters, you can input upper and lower case letters, Chinese characters <br>• Please fill in your real name for later contact.",
            placeholder: "Please enter your name",
            error: "Please enter the correct name"
          },
          contact_tel: {
            label: "Applicant's Telephone Number",
            placeholder: "Please enter the applicant's telephone number",
            error: "Please enter your phone number",
            error2: "Please enter the correct mobile phone number"
          },
          e_mail: {
            label: "Applicant's Mailbox Address",
            placeholder: "Please enter the applicant's mailbox address",
            error: "Please enter the correct mailbox address"
          },
          remark: {
            label: "Brief Introduction of Chain",
            placeholder: "Please enter a brief description of the chain"
          }
        },
        {
          title: "Offline communication",
          des: "",

          tips:
            "Staff will contact you in 2-3 working days, you can also contact us according to the contact below. We will have a special staff to receive you. Communicate with you about your need to create a chain.",
          Contacts: "Contacts",
          MissWu: "Miss Wu",
          TEL: "TEL",
          TEL_phone: "0755-86524558",
          Email: "E-mail Address",
          EmailAddress: "udo@udo.link",
          Address: "Address",
          AddressDetail:
            "Room2115,Oriental Science and Technology Building,Nanshan District,Shenzhen City"
        }
      ]
    },
    // 主网参数
    mainParams: {
      tips:
        "In order to prevent users from maliciously creating and occupying resources, we decided to adopt the way of mortgage service fee. The setting of service fee is completely transparent. Everyone can participate in the modification and setting of service fee.",
      SmartContract: "Smart Contract",
      updateContractCash: "Modify smart contract fees",

      updateTokenCash: "Modify procedure fee for issuing token",

      FeeReturn: "Fee Return",
      amendRulesTitle: "Modify fee refund rules"
    },
    // 技术文档
    documentation: {
      APIinterfacedocumentation: "API interface documentation",
      Features: "Features",
      Requestparameter: "Request parameter",
      parameter: "parameter",
      necessary: "Whether it is necessary",
      ParameterType: "Parameter Type",
      description: "description",
      response: "response",
      tableofContents: "table of Contents"
    },
    // 问题反馈
    Question: {
      tips:
        "After submitting the feedback, the staff will reply to you within 5-7 working days. Please check the email in time.",
      ruleForm: {
        email: {
          label: "E-mail Account",
          placeholder: "Please enter your email account",
          error: "Please enter correct email account"
        },
        title: {
          label: "Title",
          placeholder: "Please enter your question titl",
          error: ""
        },
        question: {
          label: "Question Description",
          placeholder: "Please describe your question",
          error: ""
        },
        file: {
          label: "Upload Files",
          tips:
            "Supported file types: png, jpg, gif, file size not exceeding 3.5MB"
        }
      }
    }
  },
  btn: {
    search: "Research", //  {{ $t("btn.search") }}
    submit: "Submission", //  {{ $t("btn.submit") }}
    apply: "Apply Now", // {{ $t("btn.apply") }}
    create: "Creating Now", // {{ $t("btn.create") }}
    delete: "Delete", // {{ $t("btn.delete") }}
    detail: "Details", // {{ $t("btn.detail") }}
    select_icon: "选择图标", // {{ $t("btn.select_icon") }}
    select_file: "select file", // {{ $t("btn.select_file") }}
    setting_sign: "Setting up multiple signatures", // {{ $t("btn.setting_sign") }}
    update_sign_number: "Modify the Number of Signature", // {{ $t("btn.update_sign_number") }}
    sign: "Signed confirmation", // {{ $t("btn.sign") }}
    startContract: "Start Contract",
    start_contract: "Start the contract immediately", // {{ $t("btn.start_contract") }}
    delete_contract: "Delete Contract",
    back_publish_page: "Return to the published page", // {{ $t("btn.back_publish_page") }}
    back_list: "Back to list", // {{ $t("btn.back_list_page") }}
    back_list_page: "Return to the list pages", // {{ $t("btn.back_list_page") }}
    add_manage: "Adding Executors", // {{ $t("btn.add_manage") }}
    look_sign_detail: "View multiple signatures for details", // {{ $t("btn.look_sign_detail") }}
    View_multi_sign_aturedetails: "View multi-signature details",
    back_up: "Return to the previous step", // {{ $t("btn.back_up") }}
    next_step: "Next step", // {{ $t("btn.next_step") }}
    finish: "Finish",
    returnMainParams: "Return to the Main Network Parameter page",
    returnQuestion: "Return to Question Feedback Page"
  },
  page: {
    // logo
    logoZh: "通用型数字化开放平台",
    logoEn: "Universal Digital Open Platform",

    DeveloperPlatform: "Developer Platform",
    UnderlyingChainService: "Underlying chain service",
    CreatingSmartContract: "Creating smart contract",
    ReleasePass: "Release pass",
    IssueToken: "Issue token",
    MultiSignatureSetting: "Multi-signature Setting",
    CreateChain: "Create Chain",
    MainNetworkParameters: "Main Network Parameters",
    StartContract: "Start Contract",
    signTips: "Please scan the QR code again for confirmation!",
    Resource: "Resource",
    QuestionFeedback: "Question Feedback",
    Return: "Return",
    amendSuccess: "",
    submitSuccess: "Submit successfully",
    Serialnumber: "Serial number",
    ReleaseTime: "Release Time",
    Status: "Status",
    ContractAddress: "Contract Address",
    Operation: "Operation",
    Time: "Time",
    TelephoneNumber: "Telephone Number",
    Email: "E-mail",
    Offlinecommunication: "Offline communication",
    Successfulentry: "Successful entry",
    Failuretosettle: "Failure to settle",
    BeginnerGuide: "Beginner's Guide",
    TechnicalDocumentation: "Technical documentation",
    Showmore: "Show more",
    more: "more",
    collapse: "collapse",
    NoData: "No Data",
    searchresults: "search results",
    Creationtime: "Creation time",
    prompt: "prompt",
    determine: "determine",
    cancel: "cancel",
    // 创建智能合约
    Startcontract: "Start contract",
    Upgradecontract: "Upgrade contract",
    Deletecontract: "Delete contract",
    Contractdetails: "Contract details",
    Successfullydeleted: "Successfully deleted",
    suredeletecontract: "Are you sure you want to delete this contract",
    Initializecontractparameters: "Initialize contract parameters",
    Pleaseenterparameters:
      "Please enter the initialization contract parameters",
    SearchKeywordsCannotBeEmpty: "Search keywords cannot be empty",
    Started: "Started",
    Deleted: "Deleted",
    PendingInitialization: "Pending initialization",
    InsufficientBalance: "Insufficient balance",
    Disabled: "Disabled",
    Deprecated: "Deprecated",
    // 发布token
    NumberOfPerformers: "Number of performers",
    ExecutorSignatures: "Executor signatures",
    // 多重签名
    Deleteperformer: "Delete performer",
    Addperformer: "Add performer",
    Setupmultiplesignatures: "Set up multiple signatures",
    Replacetokenicon: "Replace token icon",
    Pleaseselectasignaturetype: "Please select a signature type",
    Pleaseenterthenumberofsignatures: "Please enter the number of signatures",
    suredeletetheperformer: "Are you sure you want to delete the performer?",
    Tmanageraddresscannotduplicated: "The manager address cannot be duplicated with the performer address",
    signaturesmustbeless: "The number of signatures must be less than or equal to the number of performers",
    Executoraddresscannotberepeated: "Executor address cannot be repeated",
    duplicatedwithmanageraddress: "Executor address cannot be duplicated with manager address",
    // 检验
    PleaseEnter3and18:
      "Please enter an integer number greater than 3 and less than or equal to 18.",
    PleaseEnter0100: "Please enter a value between 0-100",
    PleaseEnterPositiveNumber: "Please enter a positive number"
  },
  placeholder: {
    keywordSearch: "please enter a keyword search",
    contractCash:
      "Please enter the amount of the fee to be mortgaged for the release of the smart contract.",
    tokenCash:
      "Please enter the amount of the fee to be issued to issue the token.",
    immediatelyPercentage:
      "Please enter the percentage of the total amount returned immediately",
    periodDuration: "Please enter the duration of each period",
    periodPercentage:
      "Please enter the percentage ratio of the total number of returns per period",
    mustNumeric: "Must be a numeric value"
  },

  // 除了开发者平台
  web: {
    // --首页 start--
    HomePage: "Home Page",
    TechnicalSolution: "Technical Solution",
    Cases: "Cases",
    BlockchainBrowser: "Block Browser",
    Wallet: "Wallet",
    Regitser: "login/register",
    Universaldigitalplatform: "Universal Digital Open Platform",
    // 注册登录弹窗
    AccountLogin:"Account Login",
    MobileLogin:"Mobile Login",
    Mobile:'Phone Number',
    Account:'Account',
    Pwd:'Password',
    code:'Code',
    getCode:'Captcha',
    login:'Login',
    forget:'Foget Password',
    getAccount:'Register Account',
    // 忘记密码注册弹窗
    RegisterPhone:'Input Phone Number',
    RegisterCode:'Input code',
    FirstPassword:'Please set a password with at least two characters of 6-20 digits',
    SecondPassword:'Please enter your password again',
    UpdatePassword:'Update password',
    Register:'Register',
    Text1:'Please read and intend',
    Text2:'《User Services Agreement》',
    Text3:'and',
    Text4:'User Services Agreement',
    ReturnLogin:'Return to account login',
    // 平台介绍
    Platformintroduction: "Platform introduction",
    udois01:
      "UDO is a Universal digital platform, which has independent intellectual property rights. UDO will provide security service and platform in various of blockchain application field. ",
    udois02:
      "UDO has enough experiences to build up decentralized applications in different industry. Basing on the application scenarios and business requirements of enterprises, we offer the professional blockchain solution. Meanwhile, our aim is to create an application ecology system with Internet value. ",
    Viewwhitepaper: "View whitepaper",

    // 技术特点
    Technicalcharacteristics: "Technical characteristics",
    FreeServiceCharge: "Free Service Charge",
    PrivacyPolicy: "Privacy Policy",
    CompletelyDecentralized: "Completely Decentralized",
    Universal: "Universal",
    TradingAcrossChain: "Trading Across-Chain",
    MultisignatureMechanism: "Multi-signature Mechanism",

    // 服务介绍
    ServicesIntroduction: "Services Introduction",
    BlockchainSolutions: "Blockchain Solutions",
    BlockchainSolutionsDes:
      "We can provide the configurable enterprise-level blockchain technology services for various industries, which include digital assets, distributed ledger, digital storage and cross-chain services.",
    IntelligentContractDevelopment: "Intelligent Contract Development",
    IntelligentContractDevelopmentDes:
      "Basing on our sufficient experience of underlying blockchain technology, we offer the development of multi-language contracts. Moreover, we provide the standardized and programmable contract development and upgrade capabilities. Eventually to build up a blockchain application that can execute the business logic through intelligent contract.",
    IndustryTOKENSolution: "Industry TOKEN Solution",
    IndustryTOKENSolutionDes:
      "As the demand of different industries, we can customize the development of digital assets. Meanwhile, we also support the system services of cryptocurrency’ s launch, management, transaction and query. It will be realized the TOKEN of entity asset and the virtual asset.",

    // 合作伙伴
    CooperativePartner: "Cooperative Partner",

    // 底部
    weTry01: "Let’s work together",
    weTry02: "to help more people by blockchain technolohy.",
    StartNow: "Start Now",
    BusinessCooperation: "Business Cooperation",
    TechnicalSupport: "Technical Support",
    Copyrightfiling: "Copyright filing",
    CooperationPhone:'Cooperation Phone',
    TechSupport:"Technical Support",
    UserSupport:"User Support",
    JoinUs:"Join Us",
    CompanyAddress:"Company Address: No. 510, 5th Floor, Science Park Building, No. 6, Keyuan Road, Nanshan District, Shenzhen",
    ContactUs:'Contact Us',
    footerInput1:'Please enter your name',
    footerInput2:'Please enter your contact number',
    footerInput3:'Please enter your e-mail address',
    footerInput4:'Briefly describe your needs......',
    submit:'submit',
    // --首页 end --

    // --技术方案 start--
    Accuratepovertyalleviationsolution: "Accurate poverty alleviation solution",
    AccuratepovertyalleviationsolutionDes:
      "UDO will deploy all the information of recipient, donor and donation on the blockchain. It will achieve precise point-to-point poverty alleviation and build up a trusted platform.",
    Details: "Details",
    Houserentalsolution: "House rental solution",
    HouserentalsolutionDes:
      "UDO will upload all the information of housing, user identity and credit record on the blockchain. Meanwhile, all of the housing lease contract are deployed on the blockchain in the form of smart contracts. It could create reliable digital platform for housing rental.",
    ElectronicMedicalRecordsSolution: "Electronic Medical Records Solution",
    ElectronicMedicalRecordsSolutionDes:
      "Electronic medical records are stored linearly at blockchain in different hospitals. It will guarantee the credibility of all electronic medical records. Eventually, our target is to ensure privacy and security of patient.",
    SmartCitySolution:"Smart City Solutions",
    SmartCitySolutionDes:"In order to achieve a new form of urban development featuring efficient and orderly urban governance, full-time services for the people, and digital economy integrated development, the new generation of information technology and the development of urban modernization will be deeply integrated.",
    DigtalSavetySolution:"Digital Security Solutions",
    DigtalSavetySolutionDes:"The use of blockchain trusted multi-party secure computing to create a foundation for data sharing and cooperation is conducive to fully releasing the value of data under the premise of data security.",
    DataEvidenceSolution:"Data Storage Solution",
    DataEvidenceSolutionDes:"Information data is on the chain to realize point-to-point data query, compress intermediate query and accountability links, and improve overall efficiency",
      // --技术方案 end--

    // --精准扶贫 start--
    AccuratePovertyAlleviation: "Accurate Poverty Alleviation",
    AccuratePovertyAlleviationDes:
      "Because the source and destination of donation is not transparent，and the donation records are not transparent. Hence, the majority of the donation are not utilized for the recipient.",
    NottransparencyofInformation: "Not transparency of Information",
    NottransparencyofInformationDes:
      "The recipient information of poverty identification is not transparent, and the source and destination of donation is not transparent as well.",
    Untraceable: "Untraceable",
    UntraceableDes:
      "it is difficult to supervised, because the donation and relevant information are untraceable.",
    EasytobeTampered: "Easy to be Tampered",
    EasytobeTamperedDes:
      "The information of recipient can be artificially tampered. Meanwhile, the donation records and logistics information can be tampered as well.",
    advantageAccuratepovertyalleviationDes:
      "Getting the donation for the recipient who really need be donated.",
    Rebuildcreditsystem: "Rebuild credit system",
    RebuildcreditsystemDes:
      "All of the donations will utilize for those recipient who really need, which will improve the confidence and enthusiasm of donors.",
    Simplifyprocess: "Simplify process",
    SimplifyprocessDes:
      "We will achieve precise point-to-point poverty alleviation and eliminate unnecessary processes.",
    // --精准扶贫 end--

    // 数据存证 start
    DataEvidence:"DataStorage",
    DataEvidenceDes:"Traditional industries to participate in collaborative data subject, wide sources of information, data volume, long chain business, unable to achieve cross-regional, multi-body, three-dimensional multi-dimensional shared collaboration of the whole process.",
    ComplexProcess:"Complex process",
    ComplexProcessDes:"Multi-party collaboration entities, large amounts of information, long business chains that cannot cross regions, and information islands, etc., have led to high collaboration costs and inefficient collaboration results.",
    Irresponsible:"Unclear responsibility",
    IrresponsibleDes:"Multi-party collaborative body to save their data, the data can be tampered with, problems not directly identify the responsible party.",
    InfomationLeak:"Information leakage",
    InfomationLeakDes:"Data is not encrypted storage, there is a risk of information leakage.",
    SimplyComplex:"Simplify complex",
    SimplyComplexDes:"Point to point data query, compression intermediate links, improve the overall efficiency.",
    DataCollaboration:"Data collaboration, accountability",
    DataCollaborationDes:"Open up multi-party data, the data can not be tampered with, the question arises, can be found directly responsible party.",
    InformationSecurity:"information security",
    InformationSecurityDes:"Information will be encrypted by hash function algorithm, so there is no risk of information leakage.",
    // 数据存证 end

    // 智慧城市 start
    // banner
    SmartCity:"Smart City",
    SmartCityDes:"In order to achieve a new form of urban development featuring efficient and orderly urban governance, full-time services for the people, and integration of the digital economy, through safe and compliant services, promote the in-depth integration of a new generation of information technology and urban modernization, and create a new type of smart city. more people get a sense of the wisdom of urban development.",
    // 趋势分析                                                                                                                                                                                                                                                                                                                                     
    TrendAnalysis:"trend Analysis",
    SmartTrend:"Smart city trends",
    SmartTrendDes:"Smart city development concepts, construction ideas, implementation paths, operation modes, and technical means are all iteratively upgraded to enter a new smart city development stage that is people-oriented, effectiveness-oriented, coordinated, and collaborative innovation, and further strengthens the overall layout of urban smart facilities and common platforms construction, get rid of data silos, strengthen urban and rural areas.",
    UrbanSmart:"Intelligent city governance",
    UrbanSmartDes:"As the blockchain further matures, the use of blockchain technology for data storage of massive amounts of urban infrastructure status data and operating data will accelerate its penetration into all areas of smart cities.",
    PublicService:"Public service transparency",
    PublicServiceDes:"Information technology, transparent way to achieve online tracking service and administrative examination and approval process, traces of the whole, full supervision, explore modular approval, the lack of capacity of the pre-trial, the whole parallel approval limit approval of combining to form a new smart city efficient and transparent environment .",
    // 解决方案
    SolutionCase:"Solution",
    SmartGovernmentSolutions:"Smart government solutions",
    SmartGovernmentSolutionsDes:"智慧政务解决方案",
    // 业务痛点
    CumbersomeProcess:"Cumbersome process",
    CumbersomeProcessDes:"Work processes cumbersome, paper-based data range, often registered service time, efficiency is not high",
    SmartCityUntraceableDes:"Transaction records and related information cannot be traced and cannot be effectively supervised.",
    // 方案优势
    Traceable:"Traceable",
    TraceableDes:"Transaction records and related information can be traced and effectively supervised.",
    SmartCityInformationSecurityDes:"Information will be encrypted by algorithm, one-way cryptosystem, only encryption process, no decryption process.",
    // 智慧城市 end

    // 数字安全 start
    DigtalSavety:"Digital Security",
    DigtalSavetyDes:"In the context of the era of big data, the country has many strategic plans for building a digital China and a smart society. Between enterprises and enterprise, there are many areas that require digital cooperation between businesses and governments. Accelerate the construction of digital China, it is necessary to develop data-a key element of the digital economy, but also form a matched data security protection system. The use of multi-block chain trusted computing security, create a data base shared cooperation is conducive to data security in the premise of the full value of the data release",
    PushTech:"Promote technological innovation",
    PushTechDes:"In recent years, with the block chain, big data, networking, rapid development of artificial intelligence, to promote the traditional industries profound business transformation, digital security of the whole tradition reshaping business processes, will greatly change the industry pattern.",
    DigitalDivide:"Bridging the digital divide",
    DigitalDivideDes:"Popularity of smart phones, to enter the digital finance all aspects of life. With the popularity of virtual banking, all persons at any time, equal access to services, eliminate geographical and other problems caused by a series of phenomena.",
    ReapDividend:"Harvest Digital Dividend",
    ReapDividendDes:"In the future, virtual banks will inevitably drive the flow of technology, capital, talents, and materials with the flow of information, promote the optimization of resource allocation, promote productivity, and play an active role in promoting innovative development, transforming economic development methods, and adjusting economic structure. Economic development brings greater help",
    VirtualBankingSolutions:"Virtual Banking Solutions",
    VirtualBankingSolutionsDes:"虚拟银行解决方案",
    SaveRisk:"High security risk",
    SaveRiskDes:"Each multi-body cooperative stored data, the data can be tampered with, i.e., a slight mistake could have a greater safety.",
    SolutionScenario:"Solution Scenario",
    CoreBankSys:"Core Banking System",
    CoreBankSysDes:"All deposits, loans and other services to achieve product management, providing flexible product parametric configuration to meet the needs of financial product innovation and business expansion. Can according to market needs, through parameter configuration, rapid customization, combined, innovative products. The entire core banking system in accordance with the characteristics of business processes can be divided into four categories: access to services, customer service, product application, analysis and decision",
    SolutionArchitecture:"Solution Architecture",
    // 数字安全 end
    
    // --房屋租赁 start--
    //banner
    Houserental: "House rental",
    HouserentalDes:
      "There is many unreal information in the existing house rental application. It is not only difficult for users to identify the validity of the information, but also cause rental cost increases and efficiency decreases. Additionally, the existence of all sorts of undesirable intermediary and landlord will let user suffer needless loss.",
    // nav
    BusinessProblems: "Business Problems",
    SolutionFramework: "Solution Framework",
    // 方案优势
    SolutionAdvantages: "Solution Advantages",
    // 业务痛点
    InformationAsymmetry: "Information Asymmetry",
    InformationAsymmetryDes:
      "There is many unreal information in the leasing market, which will influence both side of landlords and tenants.",
    Inefficient: "Inefficient",
    InefficientDes:
      "It is inefficient to reach a lease agreement, because the process of house leasing is complex.",
    Highcost: "High cost",
    HighcostDes:
      "On the one hand, the tenants have to spend more time and money on house rental. On the other hand, the landlords have to pay costly agency fees.",
    // 方案架构
    Solutionframework: "Solution framework",
    // 方案优势
    TransparencyofInformation: "Transparency of Information",
    TransparencyofInformationDes:
      "There is completely transparency housing rental information on blockchain, which can efficiently to exclude the unreal information.",
    Efficiency: "Efficiency",
    EfficiencyDes: "Only one step to reach lease agreement.",
    Reliable: "Reliable",
    ReliableDes:
      "All of the lease contract are automated execution, which is more reliable. ",
    // --房屋租赁 end--

    // --电子病历 start--
    // banner
    Electronicmedicalrecords: "Electronic medical records",
    ElectronicmedicalrecordsDes:
      "All of the electronic medical records will be encrypted on the blockchain. It can protect the patient privacy and medical record through blockchain technology. Meanwhile, hospitals will realize distributed storage and sharing of electronic medical records to ensure the authenticity of electronic medical records.",
    // 业务痛点
    MedicalrecordsarenotShared: "Medical records are not Shared",
    MedicalrecordsarenotSharedDes:
      "Different hospital's electronic medical record is stored in their own separate medical system.",
    Medicalrecordsaredisclosed: "Medical records are disclosed",
    MedicalrecordsaredisclosedDes:
      "Electronic medical records are not encrypted on blockchain, hence the information has risk to be disclosed.",
    Thereferralprocessiscomplex: "The referral process is complex",
    ThereferralprocessiscomplexDes:
      "The repeat process of input patient information and diagnosis for referral is time-wasting.",
    // 方案优势
    AccurateDiagnostic: "Accurate Diagnostic",
    AccurateDiagnosticDes:
      "All of the medical record are stored on blockchain. The advantage of traceability will provide all previous diagnostic data for the doctor, which will obviously increase the efficiency of diagnosis.",
    Safetyprivacy: "Safety privacy",
    SafetyprivacyDes:
      "The ownership of medical record on blockchain is owned by patient, it can only be viewed by the patient with authorization.",
    SecurityNetwork: "Security Network",
    SecurityNetworkDes:
      "Electronic medical records are distributed storage on the hospital’s blockchain node, which is difficult to falsify. ",
    // --电子病历 end--

    // -- 案例 start--
    OnchainSaving:"The world's first blockchain money-saving shopping platform",
    OnchainSavingDes:'"On-chain province" is a comprehensive shopping guide and money-saving APP based on blockchain. It uses the traceability of blockchain to monitor all products of e-commerce consumption and poverty alleviation, and establishes the source of goods inquiries through smart contract technology. Solve the current problem of trust between the supply side and demand side of consumer poverty alleviation and the centralization of e-commerce, and promote the further development of consumer poverty alleviation in China.',
    ScanDownload:'Scan Download',
    PercisionPoverty:'Targeted poverty alleviation platform',
    PercisionPovertyDes:"'Kaixin Piggy' is a kind of love based on the conversion of WeChat steps into 'life energy value'. By donating 'life energy value', you can easily donate a love. The user's life energy value collection record, life energy donation record, and public welfare material donation record will all be stored on the chain, which will serve as the donation certificate of the project. All on-chain data cannot be deleted, and all users can access relevant records of the project, thereby increasing the credibility of the Xiaozhu platform, the transparency of public welfare projects, and achieving precise poverty alleviation.",
    ScanExperience:'Scan Download',
    MakeaPoint: "Make a Point",
    Decentralizedtourismserviceplatform:
      "Decentralized tourism service platform",
    DecentralizedtourismserviceplatformDes:
      "“Make a Point” is a decentralized tourism service platform on blockchain. Because all user’s information is upload on the blockchain, it can not only ensure the authenticity of the information, but also prevent unreal comments. Therefore, users can use “Make a Point” to share the most authentic travel experience.",
    StartonWechat: "Start on Wechat",
    DigitalIntegralClaw: "Digital Integral Claw",
    Decentralizedgames: "Decentralized games",
    DecentralizedgamesDes:
      "This is a “decentralized” game, the players can grab red packet or share the game to obtain the TOKEN rewards.",
    Startnow: "Start now"
    // -- 案例 end--
  }
};
