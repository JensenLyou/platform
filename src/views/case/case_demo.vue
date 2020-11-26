<template>
  <div class="case-case_demo">
    <!-- 头部 -->
    <Header></Header>
    <!-- banner -->
    <div class="relative">
      <img class="bannerImg"
           :src="exampleArr[currentIndex].bannerImg" alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
      <div class="banner-content">
        <div class="panel text-left">
          <div class="banner-title">{{exampleArr[currentIndex].bannerTitle}}</div>
          <div class="banner-des">{{exampleArr[currentIndex].bannerDes}}</div>
        </div>
      </div>
    </div>
    <!-- 导航 -->
    <div ref="itemNav"
         class="item-nav">
      <div :class="isfix ? 'fixItemNav' : ''">
        <div class="panel">
          <!-- 业务痛点 -->
          <div :class="{ active: navIndex == 0}"
            @click="handleNav(0)">{{$t("web.BusinessProblems")}}
          </div>
          <!-- 方案架构 -->
          <div :class="{ active: navIndex == 1}"
            @click="handleNav(1)">{{$t("web.SolutionFramework")}}
          </div>
          <!-- 方案优势 -->
          <div :class="{ active: navIndex == 2}" @click="handleNav(2)" 
            v-if="exampleArr[currentIndex].solutionImg == null" v-show="true">
            {{$t("web.SolutionAdvantages")}}
          </div>
          <div :class="{ active: navIndex == 2}" @click="handleNav(2)" 
            v-else v-show="false">
            {{$t("web.SolutionAdvantages")}}
          </div>
          <!-- 趋势分析 -->
          <div :class="{ active: navIndex == 3}" @click="handleNav(3)"
            v-if="exampleArr[currentIndex].trendArr == null" v-show="false">
            {{$t("web.TrendAnalysis")}}
          </div>
          <div :class="{ active: navIndex == 3}" @click="handleNav(3)"
            v-else v-show="true">
            {{$t("web.TrendAnalysis")}}
          </div>
          <!-- 解决方案 -->
          <div :class="{ active: navIndex == 4}" @click="handleNav(4)"
            v-if="exampleArr[currentIndex].trendArr == null" v-show="false">
            {{$t("web.SolutionCase")}}
          </div>
          <!-- 隐藏掉了,因为没有图 -->
          <div :class="{ active: navIndex == 4}" @click="handleNav(4)"
            v-else v-show="false">
            {{$t("web.SolutionCase")}}
          </div>
          <!-- 解决方案场景 -->
          <div :class="{ active: navIndex == 5}" @click="handleNav(5)"
            v-if="exampleArr[currentIndex].solutionImg == null" v-show="false">
            {{$t("web.SolutionScenario")}}
          </div>
          <div :class="{ active: navIndex == 5}" @click="handleNav(5)"
            v-else v-show="true">
            {{$t("web.SolutionScenario")}}
          </div>
        </div>
      </div>
    </div>

    <!-- 趋势分析 -->
    <div>
      <!-- 显示趋势分析 -->
      <div class="trend-part" v-if="exampleArr[currentIndex].trendArr == null" v-show="false">
        <div class="mg-b169">
          <div class="part-title">{{$t("web.TrendAnalysis")}}</div>
          <div class="part-title-des">{{ $i18n.locale == 'zh' ? 'Trend analysis' : ''}} </div>
        </div>
        <div class="panel inblock trendDes">
          <div v-for="(item, index) in exampleArr[currentIndex].trendArr" :key="index">
            <div class="trend-item-title">{{item.title}}</div>
            <div class="trend-item-title-des">{{item.des}}</div>
          </div>
        </div>
        <div class="inblock">
          <img :src="exampleArr[currentIndex].trendImg" alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
        </div>
      </div>
      <!-- 隐藏趋势分析 -->
      <div class="trend-part" v-else v-show="true">
        <div class="mg-b169">
          <div class="part-title">{{$t("web.TrendAnalysis")}}</div>
          <div class="part-title-des">{{ $i18n.locale == 'zh' ? 'Trend analysis' : ''}} </div>
        </div>
        <div class="panel inblock trendDes">
          <div v-for="(item, index) in exampleArr[currentIndex].trendArr" :key="index">
            <div class="trend-item-title">{{item.title}}</div>
            <div class="trend-item-title-des">{{item.des}}</div>
          </div>
        </div>
        <div class="inblock">
          <img :src="exampleArr[currentIndex].trendImg" alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
        </div>
      </div>
    </div>
    
    <!-- 解决方案 -->
    <div>
      <!-- 隐藏解决方案 -->
      <div class="gover-part" v-if="exampleArr[currentIndex].trendArr == null" v-show="false">
        <div class="mg-b169">
          <div class="part-title">{{exampleArr[currentIndex].solutionTitle}}</div>
          <div class="part-title-des">{{exampleArr[currentIndex].solutionTitleEng}}</div>
          <!-- <div class="part-title-des">{{ $i18n.locale == 'zh' ? 'Smart government solutions' : ''}} </div> -->
        </div>
      </div>
      <!-- 显示解决方案 -->
      <!-- 隐藏掉了,因为没有图 -->
      <div class="gover-part" v-else v-show="false">
        <div class="mg-b169">
          <div class="part-title">{{exampleArr[currentIndex].solutionTitle}}</div>
          <div class="part-title-des">{{exampleArr[currentIndex].solutionTitleEng}}</div>
          <!-- <div class="part-title-des">{{ $i18n.locale == 'zh' ? 'Smart government solutions' : ''}} </div> -->
        </div>
      </div>
    </div>

    <!-- 业务痛点 -->
    <div class="point-part">
      <div>
        <div class="part-title">{{$t("web.BusinessProblems")}}</div>
        <div class="part-title-des">{{ $i18n.locale == 'zh' ? 'Business pain point' : ''}} </div>
      </div>
      <div class="panel flex-between">
        <div v-for="(item, index) in exampleArr[currentIndex].pointArr"
             :key="index">
          <img :src="item.img" alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
          <div class="public-item-title">{{item.title}}</div>
          <div class="public-item-title-des">{{item.des}}</div>
        </div>
      </div>
    </div>

    <!-- 解决方案场景 -->
    <div>
      <!-- 隐藏方案场景 -->
      <div class="solution-part" v-if="exampleArr[currentIndex].solutionImg == null" v-show="false">
        <div>
          <div class="part-title">{{$t("web.SolutionScenario")}}</div>
          <div class="part-title-des">{{ $i18n.locale == 'zh' ? 'Solution scenario' : ''}} </div>
        </div>
        <div class="panel mg-l410 mg-t120px">
          <div class="solution-title">{{$t("web.CoreBankSys")}}</div>
          <div class="solution-title-des">{{$t("web.CoreBankSysDes")}}</div>
        </div>
        <div>
          <img :src="exampleArr[currentIndex].solutionImg" alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
        </div>
      </div>
      <!-- 显示方案场景 -->
      <div class="solution-part" v-else v-show="true">
        <div>
          <div class="part-title">{{$t("web.SolutionScenario")}}</div>
          <div class="part-title-des">{{ $i18n.locale == 'zh' ? 'Solution scenario' : ''}} </div>
        </div>
        <div class="panel mg-l410 mg-t120px">
          <div class="solution-title">{{$t("web.CoreBankSys")}}</div>
          <div class="solution-title-des">{{$t("web.CoreBankSysDes")}}</div>
        </div>
        <div>
          <img :src="exampleArr[currentIndex].solutionImg" alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
        </div>
      </div>
    </div>

    <!-- 方案架构 -->
    <div>
      <div class="framework-part" v-if="exampleArr[currentIndex].frameworkImg == null" v-show="false">
        <div>
          <div class="part-title">{{$t("web.SolutionFramework")}}</div>
          <div class="part-title-des">{{ $i18n.locale == 'zh' ? 'Scheme framework' : ''}}</div>
        </div>
        <div>
          <img :src="exampleArr[currentIndex].frameworkImg" alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
        </div>
      </div>
      <div class="framework-part white" v-else v-show="true">
        <div>
          <div class="part-title">{{$t("web.SolutionFramework")}}</div>
          <div class="part-title-des">{{ $i18n.locale == 'zh' ? 'Scheme framework' : ''}}</div>
        </div>
        <div>
          <img :src="exampleArr[currentIndex].frameworkImg" alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
        </div>
      </div>
    </div>

    <!-- 方案优势 -->
    <div>
      <!-- 显示方案优势 -->
      <div class="Program-part" v-if="exampleArr[currentIndex].solutionImg == null" v-show="true">
        <div>
          <div class="part-title">{{$t("web.SolutionAdvantages")}}</div>
          <div class="part-title-des">{{ $i18n.locale == 'zh' ? 'Program advantage' : ''}}</div>
        </div>
        <div class="panel flex-between">
          <div v-for="(item, index) in exampleArr[currentIndex].advantageArr"
              :key="index"
              class="text-center">
            <img :src="item.img" alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
            <div class="public-item-title">{{item.title}}</div>
            <div class="public-item-title-des">{{item.des}}</div>
          </div>
        </div>
      </div>
      <!-- 隐藏方案优势 -->
      <div class="Program-part" v-else v-show="false">
        <div>
          <div class="part-title">{{$t("web.SolutionAdvantages")}}</div>
          <div class="part-title-des">{{ $i18n.locale == 'zh' ? 'Program advantage' : ''}}</div>
        </div>
        <div class="panel flex-between">
          <div v-for="(item, index) in exampleArr[currentIndex].advantageArr"
              :key="index"
              class="text-center">
            <img :src="item.img" alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
            <div class="public-item-title">{{item.title}}</div>
            <div class="public-item-title-des">{{item.des}}</div>
          </div>
        </div>
      </div>
    </div>

    <Footer style="text-align:left"></Footer>
  </div>
</template>



<script>
// 精准扶贫
import case01banner from "./../../assets/images/case_demo/01/banner.png";
import case01point01 from "./../../assets/images/case_demo/01/point01.png";
import case01point02 from "./../../assets/images/case_demo/01/point02.png";
import case01point03 from "./../../assets/images/case_demo/01/point03.png";
import case01framework from "./../../assets/images/case_demo/01/framework.png";
import case01frameworken from "./../../assets/images/case_demo/01/framework_en.png";
import case01advantage01 from "./../../assets/images/case_demo/01/advantage01.png";
import case01advantage02 from "./../../assets/images/case_demo/01/advantage02.png";
import case01advantage03 from "./../../assets/images/case_demo/01/advantage03.png";

// 数据存证
import case04banner from "./../../assets/images/case_demo/04/banner.png";
import case04point01 from "./../../assets/images/case_demo/04/point01.png";
import case04point02 from "./../../assets/images/case_demo/04/point02.png";
import case04point03 from "./../../assets/images/case_demo/04/point03.png";
import case04framework from "./../../assets/images/case_demo/04/framework.png";
import case04frameworken from "./../../assets/images/case_demo/04/framework_en.png";
import case04advantage01 from "./../../assets/images/case_demo/04/advantage01.png";
import case04advantage02 from "./../../assets/images/case_demo/04/advantage02.png";
import case04advantage03 from "./../../assets/images/case_demo/04/advantage03.png";

// 智慧城市
import case05banner from "./../../assets/images/case_demo/05/banner.png";
import case05trend from "./../../assets/images/case_demo/05/trend.png";
import case05point01 from "./../../assets/images/case_demo/05/point01.png";
import case05point02 from "./../../assets/images/case_demo/05/point02.png";
import case05point03 from "./../../assets/images/case_demo/05/point03.png";
import case05framework from "./../../assets/images/case_demo/05/framework.svg";
import case05frameworken from "./../../assets/images/case_demo/05/framework_en.png";
import case05advantage01 from "./../../assets/images/case_demo/05/advantage01.png";
import case05advantage02 from "./../../assets/images/case_demo/05/advantage02.png";
import case05advantage03 from "./../../assets/images/case_demo/05/advantage03.png";

// 数字安全
import case06banner from "./../../assets/images/case_demo/06/banner.png";
import case06trend from "./../../assets/images/case_demo/06/trend.png";
import case06scenario from "./../../assets/images/case_demo/06/scenario.png";
import case06scenarioen from "./../../assets/images/case_demo/06/scenario_en.png";
import case06point01 from "./../../assets/images/case_demo/06/point01.png";
import case06point02 from "./../../assets/images/case_demo/06/point02.png";
import case06point03 from "./../../assets/images/case_demo/06/point03.png";
import case06framework from "./../../assets/images/case_demo/06/framework.png";
import case06frameworken from "./../../assets/images/case_demo/06/framework_en.png";
import case06advantage01 from "./../../assets/images/case_demo/05/advantage01.png";
import case06advantage02 from "./../../assets/images/case_demo/05/advantage02.png";
import case06advantage03 from "./../../assets/images/case_demo/05/advantage03.png";

// 房屋租赁
import case02banner from "./../../assets/images/case_demo/02/banner.png";
import case02point01 from "./../../assets/images/case_demo/02/point01.png";
import case02point02 from "./../../assets/images/case_demo/02/point02.png";
import case02point03 from "./../../assets/images/case_demo/02/point03.png";
import case02framework from "./../../assets/images/case_demo/02/framework.png";
import case02frameworken from "./../../assets/images/case_demo/02/framework_en.png";
import case02advantage01 from "./../../assets/images/case_demo/02/advantage01.png";
import case02advantage02 from "./../../assets/images/case_demo/02/advantage02.png";
import case02advantage03 from "./../../assets/images/case_demo/02/advantage03.png";

// 电子病历
import case03banner from "./../../assets/images/case_demo/03/banner.png";
import case03point01 from "./../../assets/images/case_demo/03/point01.png";
import case03point02 from "./../../assets/images/case_demo/03/point02.png";
import case03point03 from "./../../assets/images/case_demo/03/point03.png";
import case03framework from "./../../assets/images/case_demo/03/framework.png";
import case03frameworken from "./../../assets/images/case_demo/03/framework_en.png";
import case03advantage01 from "./../../assets/images/case_demo/03/advantage01.png";
import case03advantage02 from "./../../assets/images/case_demo/03/advantage02.png";
import case03advantage03 from "./../../assets/images/case_demo/03/advantage03.png";

export default {
  data() {
    return {
      currentIndex: 0,
      navIndex: 0,
      exampleArr: [
        // 精准扶贫
        {
          bannerImg: case01banner,
          bannerTitle: this.$t("web.AccuratePovertyAlleviation"),
          bannerDes: this.$t("web.AccuratePovertyAlleviationDes"),
          pointArr: [
            {
              img: case01point01,
              title: this.$t("web.NottransparencyofInformation"),
              des: this.$t("web.NottransparencyofInformationDes")
            },
            {
              img: case01point02,
              title: this.$t("web.Untraceable"),
              des: this.$t("web.UntraceableDes")
            },
            {
              img: case01point03,
              title: this.$t("web.EasytobeTampered"),
              des: this.$t("web.EasytobeTamperedDes")
            }
          ],
          frameworkImg:
            this.$i18n.locale == "en" ? case01frameworken : case01framework,
          advantageArr: [
            {
              img: case01advantage01,
              title: this.$t("web.AccuratePovertyAlleviation"),
              des: this.$t("web.advantageAccuratepovertyalleviationDes")
            },
            {
              img: case01advantage02,
              title: this.$t("web.Rebuildcreditsystem"),
              des: this.$t("web.RebuildcreditsystemDes")
            },
            {
              img: case01advantage03,
              title: this.$t("web.Simplifyprocess"),
              des: this.$t("web.SimplifyprocessDes")
            }
          ]
        },
        // 数据存证
        {
          bannerImg: case04banner,
          bannerTitle: this.$t("web.DataEvidence"),
          bannerDes: this.$t("web.DataEvidenceDes"),
          pointArr: [
            {
              img: case04point01,
              title: this.$t("web.ComplexProcess"),
              des: this.$t("web.ComplexProcessDes")
            },
            {
              img: case04point02,
              title: this.$t("web.Irresponsible"),
              des: this.$t("web.IrresponsibleDes")
            },
            {
              img: case04point03,
              title: this.$t("web.InfomationLeak"),
              des: this.$t("web.InfomationLeakDes")
            }
          ],
          frameworkImg:
            this.$i18n.locale == "en" ? case04frameworken : case04framework,
          advantageArr: [
            {
              img: case04advantage01,
              title: this.$t("web.SimplyComplex"),
              des: this.$t("web.SimplyComplexDes")
            },
            {
              img: case04advantage02,
              title: this.$t("web.DataCollaboration"),
              des: this.$t("web.DataCollaborationDes")
            },
            {
              img: case04advantage03,
              title: this.$t("web.InformationSecurity"),
              des: this.$t("web.InformationSecurityDes")
            }
          ]
        },
        // 智慧城市
        {
          bannerImg: case05banner,
          bannerTitle: this.$t("web.SmartCity"),
          bannerDes: this.$t("web.SmartCityDes"),
          trendImg: case05trend,
          solutionTitle:this.$t("web.SmartGovernmentSolutions"),
          solutionTitleEng:this.$t("web.SmartGovernmentSolutionsDes"),
          trendArr:[
            {
              title: this.$t("web.SmartTrend"),
              des: this.$t("web.SmartTrendDes")
            },
            {
              title: this.$t("web.UrbanSmart"),
              des: this.$t("web.UrbanSmartDes")
            },
            {
              title: this.$t("web.PublicService"),
              des: this.$t("web.PublicServiceDes")
            },
          ],
          pointArr: [
            {
              img: case05point01,
              title: this.$t("web.CumbersomeProcess"),
              des: this.$t("web.CumbersomeProcessDes")
            },
            {
              img: case05point02,
              title: this.$t("web.Untraceable"),
              des: this.$t("web.SmartCityUntraceableDes")
            },
            {
              img: case05point03,
              title: this.$t("web.InfomationLeak"),
              des: this.$t("web.InfomationLeakDes")
            }
          ],
          frameworkImg:
            this.$i18n.locale == "en" ? case05frameworken : case05framework,
          advantageArr: [
            {
              img: case05advantage01,
              title: this.$t("web.SimplyComplex"),
              des: this.$t("web.SimplyComplexDes")
            },
            {
              img: case05advantage02,
              title: this.$t("web.Traceable"),
              des: this.$t("web.TraceableDes")
            },
            {
              img: case05advantage03,
              title: this.$t("web.InformationSecurity"),
              des: this.$t("web.SmartCityInformationSecurityDes")
            }
          ]
        },
        // 数字安全
        {
          bannerImg: case06banner,
          bannerTitle: this.$t("web.DigtalSavety"),
          bannerDes: this.$t("web.DigtalSavetyDes"),
          trendImg: case06trend,
          solutionTitle:this.$t("web.VirtualBankingSolutions"),
          solutionTitleEng:this.$t("web.VirtualBankingSolutionsDes"),
          // solutionImg: case06scenario,
          solutionImg: this.$i18n.locale == "en" ? case06scenarioen : case06scenario,
          trendArr:[
            {
              title: this.$t("web.PushTech"),
              des: this.$t("web.PushTechDes")
            },
            {
              title: this.$t("web.DigitalDivide"),
              des: this.$t("web.DigitalDivideDes")
            },
            {
              title: this.$t("web.ReapDividend"),
              des: this.$t("web.ReapDividendDes")
            },
          ],
          pointArr: [
            {
              img: case05point01,
              title: this.$t("web.CumbersomeProcess"),
              des: this.$t("web.CumbersomeProcessDes")
            },
            {
              img: case05point02,
              title: this.$t("web.Untraceable"),
              des: this.$t("web.SmartCityUntraceableDes")
            },
            {
              img: case05point03,
              title: this.$t("web.InfomationLeak"),
              des: this.$t("web.InfomationLeakDes")
            }
          ],
          frameworkImg:
            this.$i18n.locale == "en" ? case06frameworken : case06framework,
          advantageArr: [
            {
              img: case06advantage01,
              title: this.$t("web.SimplyComplex"),
              des: this.$t("web.SimplyComplexDes")
            },
            {
              img: case06advantage02,
              title: this.$t("web.Traceable"),
              des: this.$t("web.TraceableDes")
            },
            {
              img: case06advantage03,
              title: this.$t("web.InformationSecurity"),
              des: this.$t("web.SmartCityInformationSecurityDes")
            }
          ]
        },
        // 房屋租赁
        {
          bannerImg: case02banner,
          bannerTitle: this.$t("web.Houserental"),
          bannerDes: this.$t("web.HouserentalDes"),
          pointArr: [
            {
              img: case02point01,
              title: this.$t("web.InformationAsymmetry"),
              des: this.$t("web.InformationAsymmetryDes")
            },
            {
              img: case02point02,
              title: this.$t("web.Inefficient"),
              des: this.$t("web.InefficientDes")
            },
            {
              img: case02point03,
              title: this.$t("web.Highcost"),
              des: this.$t("web.HighcostDes")
            }
          ],
          frameworkImg:
            this.$i18n.locale == "en" ? case02frameworken : case02framework,
          advantageArr: [
            {
              img: case02advantage01,
              title: this.$t("web.TransparencyofInformation"),
              des: this.$t("web.TransparencyofInformationDes")
            },
            {
              img: case02advantage02,
              title: this.$t("web.Efficiency"),
              des: this.$t("web.EfficiencyDes")
            },
            {
              img: case02advantage03,
              title: this.$t("web.Reliable"),
              des: this.$t("web.ReliableDes")
            }
          ]
        },
        // 电子病历
        {
          bannerImg: case03banner,
          bannerTitle: this.$t("web.Electronicmedicalrecords"),
          bannerDes: this.$t("web.ElectronicmedicalrecordsDes"),
          pointArr: [
            {
              img: case03point01,
              title: this.$t("web.MedicalrecordsarenotShared"),
              des: this.$t("web.MedicalrecordsarenotSharedDes")
            },
            {
              img: case03point02,
              title: this.$t("web.Medicalrecordsaredisclosed"),
              des: this.$t("web.MedicalrecordsaredisclosedDes")
            },
            {
              img: case03point03,
              title: this.$t("web.Thereferralprocessiscomplex"),
              des: this.$t("web.ThereferralprocessiscomplexDes")
            }
          ],
          frameworkImg:
            this.$i18n.locale == "en" ? case03frameworken : case03framework,
          advantageArr: [
            {
              img: case03advantage01,
              title: this.$t("web.AccurateDiagnostic"),
              des: this.$t("web.AccurateDiagnosticDes")
            },
            {
              img: case03advantage02,
              title: this.$t("web.Safetyprivacy"),
              des: this.$t("web.SafetyprivacyDes")
            },
            {
              img: case03advantage03,
              title: this.$t("web.SecurityNetwork"),
              des: this.$t("web.SecurityNetworkDes")
            }
          ]
        }
      ],
      isfix: false
    };
  },
  created() {
    this.currentIndex = this.$route.query.index;
  },
  watch: {
    "$i18n.locale": {
      handler() {
        this.exampleArr = [
        // 精准扶贫
        {
          bannerImg: case01banner,
          bannerTitle: this.$t("web.AccuratePovertyAlleviation"),
          bannerDes: this.$t("web.AccuratePovertyAlleviationDes"),
          pointArr: [
            {
              img: case01point01,
              title: this.$t("web.NottransparencyofInformation"),
              des: this.$t("web.NottransparencyofInformationDes")
            },
            {
              img: case01point02,
              title: this.$t("web.Untraceable"),
              des: this.$t("web.UntraceableDes")
            },
            {
              img: case01point03,
              title: this.$t("web.EasytobeTampered"),
              des: this.$t("web.EasytobeTamperedDes")
            }
          ],
          frameworkImg:
            this.$i18n.locale == "en" ? case01frameworken : case01framework,
          advantageArr: [
            {
              img: case01advantage01,
              title: this.$t("web.AccuratePovertyAlleviation"),
              des: this.$t("web.advantageAccuratepovertyalleviationDes")
            },
            {
              img: case01advantage02,
              title: this.$t("web.Rebuildcreditsystem"),
              des: this.$t("web.RebuildcreditsystemDes")
            },
            {
              img: case01advantage03,
              title: this.$t("web.Simplifyprocess"),
              des: this.$t("web.SimplifyprocessDes")
            }
          ]
        },
        // 数据存证
        {
          bannerImg: case04banner,
          bannerTitle: this.$t("web.DataEvidence"),
          bannerDes: this.$t("web.DataEvidenceDes"),
          pointArr: [
            {
              img: case04point01,
              title: this.$t("web.ComplexProcess"),
              des: this.$t("web.ComplexProcessDes")
            },
            {
              img: case04point02,
              title: this.$t("web.Irresponsible"),
              des: this.$t("web.IrresponsibleDes")
            },
            {
              img: case04point03,
              title: this.$t("web.InfomationLeak"),
              des: this.$t("web.InfomationLeakDes")
            }
          ],
          frameworkImg:
            this.$i18n.locale == "en" ? case04frameworken : case04framework,
          advantageArr: [
            {
              img: case04advantage01,
              title: this.$t("web.SimplyComplex"),
              des: this.$t("web.SimplyComplexDes")
            },
            {
              img: case04advantage02,
              title: this.$t("web.DataCollaboration"),
              des: this.$t("web.DataCollaborationDes")
            },
            {
              img: case04advantage03,
              title: this.$t("web.InformationSecurity"),
              des: this.$t("web.InformationSecurityDes")
            }
          ]
        },
        // 智慧城市
        {
          bannerImg: case05banner,
          bannerTitle: this.$t("web.SmartCity"),
          bannerDes: this.$t("web.SmartCityDes"),
          trendImg: case05trend,
          solutionTitle:this.$t("web.SmartGovernmentSolutions"),
          solutionTitleEng:this.$t("web.SmartGovernmentSolutionsDes"),
          trendArr:[
            {
              title: this.$t("web.SmartTrend"),
              des: this.$t("web.SmartTrendDes")
            },
            {
              title: this.$t("web.UrbanSmart"),
              des: this.$t("web.UrbanSmartDes")
            },
            {
              title: this.$t("web.PublicService"),
              des: this.$t("web.PublicServiceDes")
            },
          ],
          pointArr: [
            {
              img: case05point01,
              title: this.$t("web.CumbersomeProcess"),
              des: this.$t("web.CumbersomeProcessDes")
            },
            {
              img: case05point02,
              title: this.$t("web.Untraceable"),
              des: this.$t("web.SmartCityUntraceableDes")
            },
            {
              img: case05point03,
              title: this.$t("web.InfomationLeak"),
              des: this.$t("web.InfomationLeakDes")
            }
          ],
          frameworkImg:
            this.$i18n.locale == "en" ? case05frameworken : case05framework,
          advantageArr: [
            {
              img: case05advantage01,
              title: this.$t("web.SimplyComplex"),
              des: this.$t("web.SimplyComplexDes")
            },
            {
              img: case05advantage02,
              title: this.$t("web.Traceable"),
              des: this.$t("web.TraceableDes")
            },
            {
              img: case05advantage03,
              title: this.$t("web.InformationSecurity"),
              des: this.$t("web.SmartCityInformationSecurityDes")
            }
          ]
        },
        // 数字安全
        {
          bannerImg: case06banner,
          bannerTitle: this.$t("web.DigtalSavety"),
          bannerDes: this.$t("web.DigtalSavetyDes"),
          trendImg: case06trend,
          solutionTitle:this.$t("web.VirtualBankingSolutions"),
          solutionTitleEng:this.$t("web.VirtualBankingSolutionsDes"),
          solutionImg: case06scenario,
          trendArr:[
            {
              title: this.$t("web.PushTech"),
              des: this.$t("web.PushTechDes")
            },
            {
              title: this.$t("web.DigitalDivide"),
              des: this.$t("web.DigitalDivideDes")
            },
            {
              title: this.$t("web.ReapDividend"),
              des: this.$t("web.ReapDividendDes")
            },
          ],
          pointArr: [
            {
              img: case05point01,
              title: this.$t("web.CumbersomeProcess"),
              des: this.$t("web.CumbersomeProcessDes")
            },
            {
              img: case05point02,
              title: this.$t("web.Untraceable"),
              des: this.$t("web.SmartCityUntraceableDes")
            },
            {
              img: case05point03,
              title: this.$t("web.InfomationLeak"),
              des: this.$t("web.InfomationLeakDes")
            }
          ],
          frameworkImg:
            this.$i18n.locale == "en" ? case06frameworken : case06framework,
          advantageArr: [
            {
              img: case06advantage01,
              title: this.$t("web.SimplyComplex"),
              des: this.$t("web.SimplyComplexDes")
            },
            {
              img: case06advantage02,
              title: this.$t("web.Traceable"),
              des: this.$t("web.TraceableDes")
            },
            {
              img: case06advantage03,
              title: this.$t("web.InformationSecurity"),
              des: this.$t("web.SmartCityInformationSecurityDes")
            }
          ]
        },
        // 房屋租赁
        {
          bannerImg: case02banner,
          bannerTitle: this.$t("web.Houserental"),
          bannerDes: this.$t("web.HouserentalDes"),
          pointArr: [
            {
              img: case02point01,
              title: this.$t("web.InformationAsymmetry"),
              des: this.$t("web.InformationAsymmetryDes")
            },
            {
              img: case02point02,
              title: this.$t("web.Inefficient"),
              des: this.$t("web.InefficientDes")
            },
            {
              img: case02point03,
              title: this.$t("web.Highcost"),
              des: this.$t("web.HighcostDes")
            }
          ],
          frameworkImg:
            this.$i18n.locale == "en" ? case02frameworken : case02framework,
          advantageArr: [
            {
              img: case02advantage01,
              title: this.$t("web.TransparencyofInformation"),
              des: this.$t("web.TransparencyofInformationDes")
            },
            {
              img: case02advantage02,
              title: this.$t("web.Efficiency"),
              des: this.$t("web.EfficiencyDes")
            },
            {
              img: case02advantage03,
              title: this.$t("web.Reliable"),
              des: this.$t("web.ReliableDes")
            }
          ]
        },
        // 电子病历
        {
          bannerImg: case03banner,
          bannerTitle: this.$t("web.Electronicmedicalrecords"),
          bannerDes: this.$t("web.ElectronicmedicalrecordsDes"),
          pointArr: [
            {
              img: case03point01,
              title: this.$t("web.MedicalrecordsarenotShared"),
              des: this.$t("web.MedicalrecordsarenotSharedDes")
            },
            {
              img: case03point02,
              title: this.$t("web.Medicalrecordsaredisclosed"),
              des: this.$t("web.MedicalrecordsaredisclosedDes")
            },
            {
              img: case03point03,
              title: this.$t("web.Thereferralprocessiscomplex"),
              des: this.$t("web.ThereferralprocessiscomplexDes")
            }
          ],
          frameworkImg:
            this.$i18n.locale == "en" ? case03frameworken : case03framework,
          advantageArr: [
            {
              img: case03advantage01,
              title: this.$t("web.AccurateDiagnostic"),
              des: this.$t("web.AccurateDiagnosticDes")
            },
            {
              img: case03advantage02,
              title: this.$t("web.Safetyprivacy"),
              des: this.$t("web.SafetyprivacyDes")
            },
            {
              img: case03advantage03,
              title: this.$t("web.SecurityNetwork"),
              des: this.$t("web.SecurityNetworkDes")
            }
          ]
        }
      ];
      },
      deep: true
    }
  },
  mounted() {
    window.onscroll = () => {
      let scrolltop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if(isNaN(scrolltop)){
        if (scrolltop > this.$refs.itemNav.offsetTop - 10) {
          this.isfix = true;
        } else {
          this.isfix = false;
        }
      }
    };
    setTimeout(() => {
      let pointDom = document.getElementsByClassName("point-part")[0];
      let frameworkDom = document.getElementsByClassName("framework-part")[0];
      let ProgramDom = document.getElementsByClassName("Program-part")[0];
      let trendDom = document.getElementsByClassName("trend-part")[0];
      let goverDom = document.getElementsByClassName("gover-part")[0];
      let solutionDom = document.getElementsByClassName("solution-part")[0];
      this.pointTop = pointDom.offsetTop - 80;
      this.frameworkTop = frameworkDom.offsetTop - 130;
      this.ProgramTop = ProgramDom.offsetTop - 80;
      this.trendTop = trendDom.offsetTop - 80;
      this.goverTop = goverDom.offsetTop - 200;
      this.solutionTop = solutionDom.offsetTop - 130;
    }, 300);
  },
  methods: {
    handleNav(index) {
      this.navIndex = index;
      if (index == 0) {
        this.$("html").animate({ scrollTop: this.pointTop }, "fast");
        return;
      }
      if (index == 1) {
        this.$("html").animate({ scrollTop: this.frameworkTop }, "fast");
        return;
      }
      if (index == 2) {
        this.$("html").animate({ scrollTop: this.ProgramTop }, "fast");
        return;
      }
      if (index == 3) {
        this.$("html").animate({ scrollTop: this.trendTop }, "fast");
        return;
      }
      if (index == 4) {
        this.$("html").animate({ scrollTop: this.goverTop }, "fast");
        return;
      }
      if (index == 5) {
        this.$("html").animate({ scrollTop: this.solutionTop }, "fast");
        return;
      }
    }
  }
};
</script>

<style lang="less">
.case-case_demo {
  color: #2c2c2c;
  text-align: center;
  // 公共
  .part-title {
    font-size: 40px;
    margin-bottom: 5px;
  }
  .part-title-des {
    font-size: 20px;
  }
  .public-item-title {
    font-size: 20px;
    margin: 40px 0 30px 0;
    font-weight: 600;
  }
  .public-item-title-des {
    font-size: 16px;
    width: 200px;
    margin: 0 auto;
  }

  // bannerImg
  .bannerImg {
    width: 100%;
    vertical-align: top;
    min-height: 600px;
  }
  .banner-content {
    color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    .panel {
      padding-top: 12%;
    }
  }
  .banner-title {
    font-size: 40px;
    margin-bottom: 38px;
  }
  .banner-des {
    font-size: 20px;
    width: 500px;
  }

  // 导航
  .fixItemNav {
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    height: 100px;
    background: rgba(239, 239, 239, 0.8);
  }
  .item-nav {
    height: 100px;
    background-color: #efefef;
  }
  .fixItemNav,
  .item-nav {
    .panel {
      display: flex;
      align-items: center;
      height: 100px;
      > div {
        height: 40px;
        border-radius: 2px;
        text-align: center;
        line-height: 40px;
        color: #2c2c2c;
        margin-right: 30px;
        padding: 0 28px;
        &:hover {
          cursor: pointer;
          color: #fff;
          background-color: #f8a747;
        }
      }
      .active {
        background-color: #f8a747;
        color: #fff;
      }
    }
  }

  // 趋势分析
  .trend-part{
    padding: 135px 0;
    background-color: #fff;
    .mg-b169{
      margin-bottom: 169px;
    }
    .trendDes{
      width: 816px;
    }
    .trend-item-title {
      // width:140px;
      height:28px;
      font-size:20px;
      font-family:PingFangSC-Medium,PingFang SC;
      font-weight:600;
      color:rgba(44,44,44,1);
      line-height:28px;
      text-align: left;
    }
    .trend-item-title-des {
      width:687px;
      height:66px;
      font-size:16px;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      color:rgba(44,44,44,1);
      line-height:22px;
      text-align: left;
      margin-top: 12px;
      margin-bottom: 116px;
    }
  }

  // 业务痛点
  .point-part {
    padding: 150px 0;
    background-color: #fff;
    .part-title-des {
      margin-bottom: 100px;
    }
    .panel > div {
      width: 33%;
    }
  }

  // 解决方案场景
  .solution-part{
    padding: 99px 0;
    background-image: url("./../../assets/images/case_demo/02/frameworkBg.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .mg-l410{
      margin-left: 410px;
      margin-bottom: 60px;
    }
    .mg-t120px{
      margin-top: 120px;
    }
    .solution-title{
      // width:144px;
      height:33px;
      font-size:24px;
      font-family:PingFangSC-Medium,PingFang SC;
      font-weight:600;
      color:rgba(44,44,44,1);
      line-height:33px;
      text-align: left;
      margin-bottom: 20px;
    }
    .solution-title-des{
      width:1047px;
      height:44px;
      font-size:16px;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      color:rgba(44,44,44,1);
      line-height:22px;
      text-align: left;
    }
  }

  // 方案架构
  .framework-part {
    padding: 70px 0;
    background-image: url("./../../assets/images/case_demo/02/frameworkBg.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .part-title-des {
      margin-bottom: 70px;
    }
  }
  .white{
    padding: 70px 0;
    background-image: none;
  }

  // 方案优势
  .Program-part {
    padding: 150px 0;
    background-color: #fff;
    .part-title-des {
      margin-bottom: 100px;
    }
    .panel > div {
      width: 33%;
    }
  }
}
</style>
