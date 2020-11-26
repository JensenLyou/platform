export default {
  developer: {
    // 发布智能合约
    create: {
      searchPlaceholder: "請輸入合約地址、錢包地址搜索",
      introduce_title: "介紹",
      introduce: [
        "智能合約是能夠自動執行合約條款的計算機程序，當一個預先編好的條件被觸發時，智能合約便執行相應的合同條款。",
        "智能合約並不依賴單個中心化的服務器，而是分布式的，通過網絡節點來自動運行。",
        "它不但是由代碼進行定義的，也是由代碼強制執行的，完全自動而無法幹預。可以最大限度地減少信任的方式來解決一些普通事情。"
      ],
      explain_title: "說明",
      Explain: [
        "創建智能合約需要按照規定填寫智能合約的相關信息，發布成功之後智能合約的信息將<span class='text-yellow'>不能修改</span>，填寫合約信息時要慎重。",
        "創建智能合約是免費的，但是爲了杜絕惡意創建，簽名的錢包賬戶必須有足夠的UC否則簽名不成功。",
        "抵押的手續費只是暫時凍結在您的賬戶裏，然後會按照一定的時間和比例周期性地返還到您的余額帳戶。",
        "智能合約發布成功只是將合約發布到鏈上並未啓動運行，如需啓動合約需要填寫初始化參數，才可啓動合約。",
        "不能刪除當前運行的合約"
      ],
      steps_title: "創建合約的流程",
      steps: [
        // 步骤一
        {
          title: "填寫資料",
          des: "按照規定填寫智能合約的相關信息資料",
          name: {
            label: "合約名稱",
            placeholder: "請輸入合約名稱",
            error: "請輸入正確名稱",
            rules:
              "• 2-32個字符，可輸入漢字、字母、數字、空格<br />• 合約一旦發布成功，合約名稱則無法修改"
          },
          contractSymbol: {
            label: "合約英文簡稱",
            placeholder: "請輸入合約簡稱",
            error: "請輸入正確簡稱",
            rules:
              "• 2-16個字符，可輸入大小寫字母、數字<br />• 合約一旦發布成功，合約簡稱則無法修改"
          },
          version: {
            label: "合約版本",
            placeholder: "請輸入合約版本號",
            error: "請輸入正確版本號",
            rules: "• 可輸入數字<br />• 例如：1.01"
          },
          remark: {
            label: "合約簡介",
            placeholder: "請輸入合約的簡介",
            error: "請輸入2-200之間的字符長度"
          },
          ccUrl: {
            label: "上傳合約代碼",
            rules: "文件格式爲zip.文件大小不得超過20M",
            error: "請上傳合約代碼"
          }
        },
        // 步骤二
        {
          title: "簽名確認",
          des: "使用UDO錢包進行簽名確認",
          tips: {
            one:
              "請使用UDO錢包進行簽名，簽名的錢包地址必須要有不小于XXX BTT。<span class='text-blue pointer' @click=\"$router.push({ path: '/wallet'})\" >立即下載UDO錢包。",
            two:
              "簽名的地址將會和合約綁定，之後的合約升級和刪除合約也都必須是該地址簽名才可以進行後續的操作。慎重選擇簽名的錢包地址。"
          }
        },
        // 步骤三
        {
          title: "發布成功",
          des: "智能合約已成功發布到鏈上",
          tips: [
            "合約已經成功發布到鏈上，如需在鏈上啓動運行合約請點擊立即啓動合約，填寫合約初始化參數。",
            "請妥善保存好您的合約地址，需對合約進行操作時可在搜索框中填寫合約地址搜索到對應的合約。"
          ],
          name: "合約名稱：",
          contractSymbol: "合約簡稱：",
          version: "合約版本：",
          remark: "合約簡介：",
          address: "合約地址：",
          codeName: "合約代碼：",
          look_contract_detail: "查看合約詳情"
        },
        // 步骤四
        {
          title: "啓動智能合約",
          des: "填寫初始化參數啓動智能合約",
          label: "初始化參數：",
          placeholder: "請輸入初始參數",
          link: "初始化參數是什麽?"
        }
      ],

    },
    // 发布通证
    publish: {
      introduce_title: "介紹",
      searchPlaceholder: "輸入token名稱、簡稱、token標識",
      introduce: [
        "Token 的原意是指“令牌、信令”，這裏翻譯爲“通證”，實現人人都可以發行token。",
        "數字權益證明，也就是說通證必須是以數字形式存在的權益憑證，它必須代表的是一種權利，一種固有和內在的價值",
        "加密，也就是說通證的真實性、防篡改性、保護隱私等能力，由密碼學予以保障。",
        "可流通，也就是說通證必須能夠在一個網絡中流動，從而隨時隨地可以驗證。其中一部分通證是可以交易、兌換的。"
      ],
      explain_title: "說明",
      Explain: [
        "發行token需要按照規定填寫相關Token信息，發布成功之後Token的信息將<span class='text-yellow'>不能在修改</span>,請慎重填寫Token信息。",
        "發布Toekn是<span class='text-yellow'>完全免費</span>的，但是爲了杜絕惡意發布，會需要你簽名錢包裏有規定的UC。否則發布不成功。",
        "抵押的手續費只是暫時凍結在您的賬戶裏，然後會按照一定的時間和比例返還給你。",
        "Token發布成功後我們會把你發布的Token發送到您簽名的錢包地址上，簽名時需謹慎選擇簽名錢包。",
        "設置多重簽名是保障你Token安全的，可以選擇性設置。原理是多個用戶同時對一個數字資産進行簽名，使得多人同時擁有權限。"
      ],
      steps_title: "發布Token的流程",
      steps: [
        // 步骤一
        {
          title: "填寫資料",
          des: "按照規定填寫Token的相關信息資料",

          name: {
            label: "Token名稱：",
            placeholder: "請輸入Token名稱",
            error: "請輸入token名稱",
            rules:
              "• 2-32個字符，可輸入漢字、字母、數字、空格<br />• Token一旦發布成功，Token名稱則無法修改"
          },
          tokenSymbol: {
            label: "Token英文簡稱",
            placeholder: "請輸入Token英文簡稱",
            error: "請輸入Token英文簡稱",
            rules:
              "• 2-16個字符，可輸入字母、數字<br />• Token一旦發布成功，Token簡稱則無法修改"
          },
          decimalUnits: {
            label: "最大小數點位數：",
            placeholder: "請輸入最大小數點位數",
            error: "請輸入數字",
            rules: ""
          },
          totalNumber: {
            label: "發行總量：",
            placeholder: "請輸入發行總量",
            error: "請輸入正整數",
            rules: ""
          },
          issuePrice: {
            label: "發行價格：",
            placeholder: "請輸入發行價格",
            error: "請輸入正確發行價格",
            rules: ""
          },
          iconUrl: {
            label: "TToken圖標：",
            placeholder: "",
            error: "請上傳token圖標",
            rules: [
              "1、logo圖片大小100x100，底層透明背景",
              "2、logo圖片格式必須爲png，文件大小不可超過500kb",
              "3、logo 清晰可見，不模糊"
            ]
          }
        },
        // 步骤二
        {
          title: "簽名確認",
          des: "使用UDO錢包進行簽名確認",
          tips: {
            one:
              "請使用UDO錢包進行簽名，簽名的錢包地址必須要有不小于XXX BTT。<span class='text-blue pointer' @click=\"$router.push({ path: '/wallet'})\" >立即下載UDO錢包。",
            two:
              "簽名的地址將會和合約綁定，之後的合約升級和刪除合約也都必須是該地址簽名才可以進行後續的操作。慎重選擇簽名的錢包地址。"
          }
        },
        // 步骤三
        {
          title: "發布成功",
          des: "發布成功，Token將發布到你的簽名錢包裏",
          TokenName: "Token名稱：",
          TokenEnglishAbbreviation: "Token英文簡稱：",
          Maximumdecimalpointnumber: "最大小數點位數：",
          Totalcirculation: "發行總量：",
          Issueprice: "發行價格（USD）",
          TokenIdentification: "Token標識：",
          TokenIcon: "Token圖標："
        }
      ],
      // 设置多重签名
      setting_multipleSign: {
        tips: [
          "設置多重簽名是針對指定的Token進行多重簽名設置，設置完成後只會對該Token起到相應的作用。",
          "管理者：對添加執行者、修改執行者、修改執行簽名次數做最終的簽名確認。",
          "管理簽名次數：添加執行者、刪除執行者，修改執行簽名次數操作時所需執行者簽名確認的次數。",
          "執行者：添加執行者、刪除執行者、修改執行簽名次數、修改主網參數時需要執行者簽名確認；",
          "執行簽名次數：修改主網參數時所需執行者簽名確認的次數。"
        ],
        ruleForm: {
          leaderAddress: {
            label: "管理者地址",
            placeholder: "請輸入管理者地址"
          },
          masterThreshold: {
            label: "管理簽名次數",
            placeholder: "請輸入管理簽名次數"
          },
          managerAddress: {
            label: "執行者地址",
            placeholder: "請輸入執行者地址"
          },
          managerThreshold: {
            label: "執行簽名次數",
            placeholder: "請輸入執行簽名次數"
          }
        }
      },
      // 多重签名详情
      multipleSign_detail: {
        Modifytheicon: "修改圖標",
        TokenName: "Token名稱",
        Totalcirculation: "發行總量",
        ManagerAddress: "管理者地址",
        EnglishAbbreviation: "Token英文簡稱",
        Issueprice: "發行價格（¥）",
        Managethenumberofsignatures: "管理簽名次數",
        Maximumdecimalpointnumber: "最大小數點位數",
        TokenIdentification: "Token標識",
        Numberofsignaturesexecuted: "執行簽名次數",
        Serialnumber: "序號",
        ExecutorAddress: "執行者地址",
        Operation: "操作"
      }
    },
    // 创建链
    chain: {
      steps: [
        {
          title: "填寫資料",
          des: "",

          name: {
            label: "鏈的名稱",
            tips: "• 2-32個字符，可輸入漢字、字母、數字",
            placeholder: "請輸入鏈的名稱"
          },
          en_short: {
            label: "鏈的英文簡稱",
            tips:
              "• 2-16個字符，可輸入大寫字母、數字 <br>•  鏈一旦發布成功，鏈簡稱則無法修改",
            placeholder: "請輸入鏈的英文簡稱"
          },
          contact_name: {
            label: "申請人姓名",
            tips:
              "• 2-30個字符，可輸入大小寫字母、漢字 <br>• 請填寫真實姓名，方便後期聯系。",
            placeholder: "請輸入申請人姓名",
            error: "請輸入正確姓名"
          },
          contact_tel: {
            label: "申請人電話",
            placeholder: "請輸入申請人電話",
            error: "請輸入您的電話",
            error2: "請輸入正確手機號碼"
          },
          e_mail: {
            label: "申請人郵箱地址",
            placeholder: "請輸入申請人郵箱地址",
            error: "請輸入正確郵箱地址"
          },
          remark: {
            label: "鏈的簡介",
            placeholder: "請輸入鏈的簡介"
          }
        },
        {
          title: "線下溝通",
          des: "",

          tips:
            "工作人員會在2-3個工作日聯系您，您也可以根據下方的聯系方式聯系我們。我們會有專門的工作人員接待您。對您創建鏈的需求進行溝通。",
          Contacts: "聯系人：",
          MissWu: "伍女士",
          TEL: "聯系電話",
          TEL_phone: "0755-86524558",
          Email: "郵箱地址",
          EmailAddress: "udo@udo.link",
          Address: "地址",
          AddressDetail: "深圳市南山區東方科技大廈2115"
        }
      ]
    },
    // 主网参数
    mainParams: {
      tips:
        "底層鏈服務創建智能合約、發布通證是完全免費的，爲了杜絕用戶的惡意創建占用資源，決定采用抵押手續費這一方式，手續費的設定完全透明化，人人都可以參與手續費的修改設定中。",
      SmartContract: "智能合約",
      updateContractCash: "修改智能合約手續費",

      updateTokenCash: "修改發行token手續費",

      FeeReturn: "手續費返回",
      amendRulesTitle: "修改手續費返還規則"
    },
    // 问题反馈
    Question: {
      tips: "提交的問題反饋工作人員將會在5-7個工作日給你回複，請及時查收郵件。",

      ruleForm: {
        email: {
          label: "郵箱賬號",
          placeholder: "請輸入您的郵箱",
          error: "請輸入正確郵箱地址"
        },
        title: {
          label: "標題",
          placeholder: "請輸入您的問題標題",
          error: ""
        },
        question: {
          label: "問題描述",
          placeholder: "請描述您的問題",
          error: ""
        },
        file: {
          label: "上傳文件",
          tips: "選擇文件，允許的文件類型：png, jpg, gif, 且不超過3.5MB"
        }
      }
    }
  },
  btn: {
    search: "搜索", //  {{ $t("btn.search") }}
    submit: "提交", //  {{ $t("btn.submit") }}
    apply: "立即申請", // {{ $t("btn.apply") }}
    create: "立即創建", // {{ $t("btn.create") }}
    delete: "刪除", // {{ $t("btn.delete") }}
    detail: "詳情", // {{ $t("btn.detail") }}
    lookDetial: "查看詳情",
    select_icon: "選擇圖標", // {{ $t("btn.select_icon") }}
    select_file: "選擇文件", // {{ $t("btn.select_file") }}
    setting_sign: "設置多重簽名", // {{ $t("btn.setting_sign") }}
    update_sign_number: "修改簽名次數", // {{ $t("btn.update_sign_number") }}
    sign: "已確認簽名", // {{ $t("btn.sign") }}
    startContract: "啓動合約",
    start_contract: "立即啓動合約", // {{ $t("btn.start_contract") }}
    delete_contract: "刪除合約",
    back_publish_page: "返回發布頁", // {{ $t("btn.back_publish_page") }}
    back_list_page: "返回列表頁", // {{ $t("btn.back_list_page") }}
    add_manage: "添加執行者", // {{ $t("btn.add_manage") }}
    look_sign_detail: "查看多重簽名設置詳情", // {{ $t("btn.look_sign_detail") }}
    back_up: "返回上一步", // {{ $t("btn.back_up") }}
    next_step: "下一步", // {{ $t("btn.next_step") }}
    finish: "完成",
    returnMainParams: "返回主網參數",
    returnQuestion: "返回問題反饋"
  },
  page: {
    DeveloperPlatform: "開發者平台",
    UnderlyingChainService: "底層鏈服務",
    CreatingSmartContract: "創建智能合約",
    ReleasePass: "發布通證",
    IssueToken: "發行token",
    MultiSignatureSetting: "多重簽名設置",
    CreateChain: "創建鏈",
    MainNetworkParameters: "主網參數",
    StartContract: "啓動合約",
    signTips: "請使用UDO錢包進行簽名，簽名錢包地址必須是合約地址。",
    Resource: "資源",
    QuestionFeedback: "問題反饋",
    Return: "返回",
    amendSuccess: "修改成功",
    submitSuccess: "提交成功",
    Serialnumber: "序號",
    ReleaseTime: "發布時間",
    ContractAddress: "合約地址",
    Status: "狀態",
    Operation: "操作",
    Time: "時間",
    TelephoneNumber: "電話",
    Email: "郵箱",
    Offlinecommunication: "線下溝通",
    BeginnerGuide: "新手指導"
  }
};
