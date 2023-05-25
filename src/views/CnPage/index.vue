<template>
  <div class="home">
    <!-- <div style="display: none">
      <img
        src="@/assets/img/logo.jpg"
        alt=""
      />
    </div>
    <div class="header">
      <div class="w padding flex">
        <span>FinLLM 2023</span>
        <div class="right">
          <img
            src="@/assets/img/ijcai.png"
            alt=""
          />
        </div>
      </div>
    </div> -->
    <div class="subtitle padding w">
      <div class="sub-text">
        国际金融服务大型语言模型研讨会<br />
        (FinLLM 2023)@IJCAI 2023
      </div>
      <button
        class="registration"
        @click="$router.push('/registration')"
      >
        注册方式
      </button>
      <!-- <div class="sub-img">
        <img
          src="@/assets/img/subImg.png"
          alt=""
        />
      </div> -->
    </div>
    <div class="center-box w padding">
      <div class="center-img-box">
        <div class="center-text-box">
          <div class="center-text-content">
            <div class="center-text-top">
              <span class="center-text-title">研讨会日期: <br /></span>
              <span class="center-text-body">2023年8月20日 <br /></span>
            </div>
            <span class="center-text-title">会议地点: <br /></span>
            <span class="center-text-body">澳门喜来登大酒店</span>
          </div>
        </div>
        <img
          class="center-img"
          src="@/assets/img/hotel.jpg"
        />
      </div>
      <!-- <h1>Committee</h1> -->
      <h1>研讨范围和目标</h1>
      <div class="cente-text mg-bottom">
        预训练的大型语言模型（LLMs）在各类自然语言处理任务中展示了巨大的潜力，包括语言生成、机器翻译及智能问答等领域。在金融服务行业中，预训练的LLMs可以对金融预测、风险管理和市场分析等工作产生重大影响。此外，预训练的LLMs可以协助金融从业者自动化分析研究报告及财务报告，并提取有助于企业做出明智决策的关键见解。<br /><br />
        本次研讨会为来自世界各地的研究人员、实践者和行业专家提供了交流平台，让大家分享新思想、交流研究发现、并讨论预训练的LLMs在金融服务领域中面临的挑战和机遇。研讨会将涵盖两个主题：1）预训练的LLMs在金融服务中的潜在应用和最佳实践；2）需要解决的挑战，提升预训练的LLMs效率、效果及可信度。
        <br /><br />
        研讨会还将邀请领先的研究人员和行业专家发表演讲，并就该领域的最新趋势和挑战进行小组讨论。我们欢迎来自学术界和行业的研究人员、实践者和行业专家提交他们的研究成果。
      </div>
      <h1>论文征集启事</h1>
      <div class="cente-text mg-bottom">
        <div class="cente-text-title">
          我们欢迎关于大型语言模型（LLMs）在金融服务领域中的最新进展和应用的投稿。我们鼓励提交涵盖广泛主题的论文，包括但不限于以下内容：
        </div>
        <div class="cente-text-cente flex">
          <div class="text">
            <span>技术: </span>
            <br />- 使用LLMs进行金融数据的多模态建模 <br />- 为LLMs准备和清洗金融数据 <br />-
            将LLMs与金融服务中的其他AI技术集成 <br />- 金融服务中LLMs的新型架构和训练技术 <br />-
            LLMs在金融服务中的可扩展性和效率 <br />- 金融服务中的跨语言和多语言LLMs <br />- 金融服务中的LLMs人机回圈
            <br /><br /><span>应用:</span><br />
            - 使用LLMs进行金融预测 <br />- 针对金融数据的情感分析和意见挖掘 <br />- 基于LLMs的交易算法和决策系统 <br />-
            使用LLMs分析金融新闻和社交媒体 <br />- 金融研究报告的语义分析 <br />- 使用LLMs实现金融服务中的可解释性AI
            <br />- 金融服务中LLMs的迁移学习和领域自适应 <br />- LLMs在金融服务中的案例研究和成功故事 <br /><br /><span
              >挑战:</span
            ><br />
            - 评估LLMs在金融服务中的效果 <br />- LLMs在金融服务中的社会经济和可信度 <br />-
            使用LLMs在金融服务中的道德和法律考虑因素 <br />- 使用LLMs处理金融数据时的隐私和安全问题 <br />-
            在金融服务中使用LLMs时的偏见和公平性问题
          </div>
          <div class="img-box">
            <img
              src="@/assets/img/IMG.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <h1>重要日期</h1>
      <div class="card-box mg-bottom">
        <div class="card">
          <p class="title">研讨会论文提交截止日期:</p>
          <p class="timer">
            <span class="month">2023年6月20日</span>
            <span class="date">(23:59:59 AoE)</span>
          </p>
        </div>
        <div class="card">
          <p class="title">通知截止时间:</p>
          <p class="timer">
            <span class="month">2023年7月4日</span>
            <span class="date">(23:59:59 AoE)</span>
          </p>
        </div>
        <div class="card">
          <p class="title">正稿论文提交截止日期:</p>
          <p class="timer">
            <span class="month">2023年8月3日</span>
            <span class="date">(23:59:59 AoE)</span>
          </p>
        </div>
        <div class="card">
          <p class="title">研讨会日期:</p>
          <p class="timer">
            <span class="month">2023年8月20日</span>
          </p>
        </div>
      </div>
      <h1>提交说明</h1>
      <div class="cente-text mg-bottom">
        <div class="cente-text-cente justify">
          论文需按照IJCAI'23的格式提交，包括图表在内最少4页、最多7页，允许添加额外的页面列举引用的参考文献。我们接受近期已发表的或正在接受审查的论文提交。论文应当包含作者的详细信息。研讨会将不会有正式的论文集，但被接受的论文作者可以选择在研讨会网页上发表他们的工作。从研讨会中选出的最佳论文将被邀请发表在特刊中。
          <br /><br />

          我们建议通过EasyChair提交论文。论文提交链接如下：<br />
          <a href="https://easychair.org/conferences/?conf=finllm2023">
            https://easychair.org/conferences/?conf=finllm2023</a
          >
        </div>
      </div>
    </div>
    <div class="middle">
      <div class="w padding">
        <h1>暂定日程安排：</h1>
        <div>
          <div class="middle-mg">
            <span>上午:</span>
            <br />• 08:30 - 09:00 嘉宾签到<br />• 09:00 - 10:00 特邀演讲 <br />• 10:00 - 10:45 陈述报告 <br />• 10:45 -
            11:00 休息 <br />• 11:00 - 11:45 陈述报告
          </div>
          <div>
            <span>下午:</span>
            <br />• 13:00 - 14:30 特邀演讲 <br />• 14:30 - 15:15 陈述报告 <br />• 15:15 - 15:30 休息 <br />• 15:30 -
            16:30 嘉宾讨论 <br />• 16:30 - 17:00 颁奖仪式
          </div>
        </div>
      </div>
    </div>
    <div class="center-box w padding">
      <h1>参与嘉宾</h1>
      <div class="item-box">
        <!-- <div class="item-box-left">
          <p>Symposium Organizers:</p>
          <div>
            -Shuoling Liu (E Fund) <br />-Xueyang Wu (Flaiverse) <br />-Yongpeng Tang (E Fund) <br />-Qian Xu (HKUST)
            <br />-Liyuan Chen (E Fund) <br />-Qiang Yang (WeBank/HKUST, Hong Kong)
          </div>
        </div> -->
        <div class="item-box-right">
          <p>特邀演讲嘉宾</p>
          <div>
            <div
              v-for="(item, index) in 6"
              :key="item"
              :class="index <= 2 ? 'isH5' : ''"
            >
              待公布
              <!-- 1.Shijie Wu (Bloomberg) <br />2.Bai Shuo (Chief Senior Technical Advisor of the Intelligent Investment
            Research Technology) <br />3.Zhong Yuyang (Chief Information Officer of China Southern Asset Management)
            <br />4.Sun Jianing (General Manager of both the Quantitative Investment Department and Equity Research
            Department at Guotai Junan Securities Asset Management) <br />5.Jinlong Li (Director of the AI Laboratory of
            China Merchants Bank) <br />6.Jie Tang (Tsinghua University) <br />7.Xiaoyan Liu (President of E Fund)
            <br />8.Kar Yan Tam (Dean of HKUST Business School) <br />9.Sau San Chan (Chairman of the Monetary Authority
            of Macao) <br />10.Eddie Yue (Chief Executive of the Hong Kong Monetary Authority) <br />11.Jie He (Head of
            the Shenzhen Local Financial Supervision and Administration Bureau) <br />12.Ravi Menon (Managing Director
            of the Monetary Authority of Singapore) -->
            </div>
            <div>···</div>
          </div>
        </div>
      </div>
      <!-- <p class="h1-title">Tentative Program Committee:</p>
      <div class="item-box mg-bottom">
        <div class="item-box-left bg-none media-bottom">
          <div>
            1.Adria Gascon (The Alan Turing Institute / University of Warwick) <br />2.Anis Elgabli (University of
            Oulu)<br />
            3.Aurélien Bellet (Inria) <br />4.Ayfer Ozgur (Stanford University) <br />5.Bai Shuo (Hengsheng Electronics
            Co Ltd.)<br />
            6.Bingsheng He (National University of Singapore) <br />7.Boi Faltings (Ecole Polytechnique Fédérale de
            Lausanne)<br />
            8.Chaoping Xing (Nanyang Technological University) <br />9.Chaoyang He (University of Southern
            California)<br />
            10.Dimitrios Papadopoulos (Hong Kong University of Science and Technology) <br />11.Fabio Casati (University
            of Trento) <br />12.Farinaz Koushanfar (University of California San Diego) <br />13.Fangkai Tang (E Fund)
            <br />14.Gauri Joshi (Carnegie Mellon University) <br />15.Graham Cormode (University of Warwick)
            <br />16.Helen (Hai) Li (Duke University)<br />
            17.Jalaj Upadhyay (Apple) <br />18.Ji Feng (Sinnovation Ventures AI Institute) <br />19.Jian Liu (Ping An
            Asset Management) <br />20.Jianshu Weng (Swiss Re) <br />21.Jihong Park (University of Oulu) <br />22.Joshua
            Gardner (University of Michigan) <br />23.Jun Zhao (Nanyang Technological University) <br />24.Junyang Li (E
            Fund)
          </div>
        </div>
        <div class="item-box-right">
          <div>
            25.Lalitha Sankar (Arizona State University) <br />26.Leye Wang (Peking University) <br />27.Marco Gruteser
            (Google)<br />
            28.Martin Jaggi (Ecole Polytechnique Fédérale de Lausanne) <br />29.Mehdi Bennis (University of Oulu)
            <br />30.Mingshu Cong (The University of Hong Kong) <br />31.Nguyen Tran (The University of Sydney)
            <br />32.Ning Cheng (E Fund)<br />
            33.Pingzhong Tang (Tsinghua University) <br />34.Praneeth Vepakomma (MIT) <br />35.Prateek Mittal (Princeton
            University)<br />
            36.Rui Lin (Chalmers University of Technology) <br />37.Sewoong Oh (University of Illinois at
            Urbana-Champaign)<br />
            38.Shiqiang Wang (IBM) <br />39.Siwei Feng (Nanyang Technological University) <br />40.Tara Javidi
            (University of California San Diego) <br />41.Xiaoyu Wang (E Fund) <br />42.Yihan Jiang (University of
            Washington) <br />43.Yongxin Tong (Beihang University) <br />44.Tongzhe Zhang (E Fund) <br />45.Yuxiang Wang
            (E Fund) <br />46.Zelei Liu (Nanyang Technological University) <br />47.Zichen Chen (Nanyang Technological
            University) <br />48.Yuanyuan Chen (Nanyang Technological University) <br />49.Zheng Xu (University of
            Science and Technology of China) <br />50.Zhengfei Li (E Fund)
          </div>
        </div>
      </div> -->
      <p><br /></p>
      <h1>组委会成员</h1>
      <div class="cente-text mg-bottom">
        <div class="centet-people">
          <div class="left-title">大会主席</div>
          <div class="people-box">
            <div class="info-box">
              <div class="avt">
                <img
                  src="@/assets/img/7.png"
                  alt=""
                />
              </div>
              <div class="info">
                <p class="name">杨强</p>
                <p class="note">微众银行/香港科技大学</p>
              </div>
            </div>
            <div class="info-box">
              <div class="avt">
                <img
                  src="@/assets/img/9.png"
                  alt=""
                />
              </div>
              <div class="info">
                <p class="name">陈丽园</p>
                <p class="note">易方达基金</p>
              </div>
            </div>
          </div>
        </div>
        <div class="centet-people">
          <div class="left-title">程序委员会主席</div>
          <div class="people-box">
            <div class="info-box">
              <div class="avt">
                <img
                  src="@/assets/img/6.png"
                  alt=""
                />
              </div>
              <div class="info">
                <p class="name">刘硕凌</p>
                <p class="note">易方达基金</p>
              </div>
            </div>
          </div>
        </div>
        <div class="centet-people">
          <div class="left-title">大会组织者</div>
          <div class="people-box">
            <div class="info-box">
              <div class="avt">
                <img
                  src="@/assets/img/xueyangWu.png"
                  alt=""
                />
              </div>
              <div class="info">
                <p class="name">吴学阳</p>
                <p class="note">Flaiverse</p>
              </div>
            </div>
            <div class="info-box">
              <div class="avt">
                <img
                  src="@/assets/img/yongpeng tang.png"
                  alt=""
                />
              </div>
              <div class="info">
                <p class="name">唐永鹏</p>
                <p class="note">易方达基金</p>
              </div>
            </div>
            <div class="info-box">
              <div class="avt">
                <img
                  src="@/assets/img/qianxu.png"
                  alt=""
                />
              </div>
              <div class="info">
                <p class="name">徐倩</p>
                <p class="note">香港科技大学</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cente-text mg-bottom">
        <div class="cente-text-cente justify">
          <span>杨强: </span>
          微众银行首席人工智能官，香港科技大学计算机科学与工程系系主任，新明工程学讲座教授。AAAI Fellow, IEEE Fellow,
          AAAS Fellow, IAPR Fellow和ACM杰出科学家。IJCAI主席（2017-2019），ACM
          SIGART（SIGAI）副主席（2009-2012），PC主席及联合主席：IJCAI（2015），ACM KDD（2010）。<br />
          Google Scholar: <br />
          <a href="https://scholar.google.com/citations?user=1LxWZLQAAAAJ"
            >https://scholar.google.com/citations?user=1LxWZLQAAAAJ</a
          >
          <br /><br />
          <span>陈丽园: </span>
          易方达基金首席营运官，易方达基金金融科技执行委员会主席。
          <br /><br />
          <span>刘硕凌: </span>
          易方达基金创新研究中心总经理，易方达基金金融科技执行委员会秘书长，中国证券基金业协会金融科技专委会委员。
          <!-- 易方达基金创新研究中心总经理，易方达基金金融科技委员会执行主席，中国证券投资基金业协会金融科技委员会委员，智能投研技术联盟委员。研究方向：算法交易、基于人工智能的债券违约预测、基于大数据的ESG研究。获得奖项：中国人民银行年度金融科技发展（2020）。拥有10个以上与金融科技相关的专利。 -->
          <br /><br />
          <span>吴学阳: </span>
          香港科技大学博士（2023），Flaiverse联合创始人和首席科学家。研究方向：迁移学习、联邦学习、自然语言处理、LLMs。发表多篇研究论文和专利，审稿人：NeurIPS、KDD、ICML、ICLR等。
          <br /><br />
          <span>唐永鹏: </span>
          易方达基金董事总经理，系统研发中心总经理，易方达基金金融科技执行委员会委员，高级金融科技专家。
          <!-- 高级金融科技专家，易方达基金系统研发中心总经理。拥有20年以上经验。拥有10个以上与金融科技相关的专利。获得奖项：中国人民银行年度金融科技发展（2020）。曾在AI和金融论坛上发表主题演讲。 -->
          <br /><br />
          <span>徐倩: </span>
          香港科技大学博士（2011），香港科技大学（广州）兼职副教授。研究方向：人工智能、迁移学习、联邦学习、自然语言处理、LLMs。曾在百度和微众银行工作，GSAIR执行董事和GBA人工智能与机器人学会创始成员。
        </div>
      </div>
      <h1>主要会议信息</h1>
      <div class="cente-text mg-bottom">
        <div class="cente-text-cente">
          第32届国际人工智能联合会议（IJCAI 2023）<br />2023年8月19日至25日 <br />澳门<br />
          <a href="https://ijcai-23.org/">https://ijcai-23.org/</a>
        </div>
      </div>
    </div>
    <!-- <div class="footer padding">
      <div>
        <div class="email-icon"></div>
        <div class="email-info">
          <p>如有任何疑问，请发送电子邮件至：</p>
          <p style="color: #b3ebff">finllm2023@easychair.org</p>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
@import '../../style/public.less';
.padding {
  padding: 0 130px;
}
.w {
  min-width: 1715px;
  max-width: 1920px;
  margin: 0 auto;
}
.mg-bottom {
  margin-bottom: 50px;
}
.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header,
.footer {
  min-width: 1715px;
  height: 103px;
  line-height: 103px;
  font-size: 28px;
  color: #ffffff;
  letter-spacing: 0;
  font-weight: 700;
  background: url('@/assets/img/CTA.png') no-repeat;
  background-size: cover;
  .right {
    width: 172px;
    height: 64px;
    @media (max-width: 750px) {
      width: 300px;
      height: 120px;
    }
    img {
      width: 100%;
      height: 100%;
      vertical-align: top;
    }
  }
}
.footer {
  height: 151px;
  margin-top: 100px;
  font-size: 20px;
  color: #ffffff;
  font-weight: 500;
  display: flex;
  align-items: center;
  & > div {
    display: flex;
    .email-icon {
      width: 30px;
      height: 30px;
      margin-right: 9px;
      background: url('@/assets/img/email.png') no-repeat;
      background-size: cover;
    }
    p {
      margin: 0;
      line-height: 1.5;
    }
  }
}
.subtitle {
  background: url('@/assets/img/header-bg.jpg') no-repeat;
  height: 614px;
  box-sizing: border-box;
  background-size: 100% 100%;
  // display: flex;
  // justify-content: space-between;
  .registration {
    width: 150px;
    height: 50px;
    background-color: #4270f1;
    border: none;
    color: #ffffff;
    margin-top: 20px;
    font-size: 16px;
    cursor: pointer;
    @media (max-width: 750px) {
      width: 300px;
      height: 100px;
      font-size: 28px;
    }
  }
  padding-top: 144px;
  @media (max-width: 750px) {
    height: 1200px;
  }
  .sub-text {
    font-size: 43px;
    color: #ffffff;
    line-height: 60px;
    font-weight: 700;
    margin-top: 50px;
    @media (max-width: 750px) {
      font-size: 80px;
      line-height: 1.5;
    }
  }
  .sub-img {
    width: 300px;
    height: 434px;
    flex-shrink: 0;
    @media (max-width: 750px) {
      width: 330px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.center-box {
  h1 {
    font-size: 48px;
    color: #0d152e;
    line-height: 60px;
    font-weight: 700;
    display: flex;
    align-items: center;
    &::before {
      content: '';
      display: inline-block;
      width: 10px;
      height: 50px;
      background-color: #4774f4;
      margin-right: 10px;
      vertical-align: baseline;
    }
  }

  .center-img-box {
    display: flex;
    margin-top: 72px;
    margin-bottom: 32px;
    width: 100%;
    background-color: #299bff;
    @media (max-width: 750px) {
      flex-direction: column;
      border-radius: 20px;
      padding: 80px 0;
    }

    .center-text-box {
      border-color: transparent;
      color: #ffffff;
      border-radius: 15px 0 0 15px;
      width: 40%;
      display: flex;
      // justify-content: center;
      padding-left: 80px;
      align-items: center;
      @media (max-width: 750px) {
        width: 100%;
        justify-content: start;
        padding-left: 30px;
        font-size: 42px;
      }

      .center-text-top {
        margin-bottom: 12px;
        @media (max-width: 750px) {
          margin-bottom: 20px;
        }
      }

      .center-text-title {
        font-weight: 500;
        font-size: 32px;
      }

      .center-text-body {
        font-weight: 400;
        font-size: 24px;
      }
    }

    @media (max-width: 750px) {
      margin-top: -250px;
      .center-text-content {
        margin-left: 24px;
        @media (max-width: 750px) {
          span {
            font-size: 50px !important;
          }
        }
      }
    }

    .center-img {
      flex-grow: 1;
      border-radius: 0 15px 15px 0;
      border-left: 1px solid #20b9e1;
      height: 320px;
      @media (max-width: 750px) {
        width: 100%;
        height: auto;
        margin-top: 30px;
      }
    }
  }
  .cente-text {
    font-size: 20px;
    color: #81838c;
    text-align: justify;
    line-height: 34px;
    font-weight: 500;
    .centet-people {
      display: flex;
      align-items: center;
      margin-top: 40px;
      @media (max-width: 750px) {
        display: block;
      }
      .left-title {
        font-size: 24px;
        color: #0078ce;
        font-weight: 700;
        width: 200px;
        @media (max-width: 750px) {
          width: auto;
          font-size: 42px;
          margin-bottom: 20px;
        }
      }
      .people-box {
        flex: 1;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .info-box {
          display: flex;
          align-items: center;
          width: 25%;
          @media (max-width: 750px) {
            width: 50%;
            margin-bottom: 40px;
          }
          .avt {
            width: 90px;
            height: 90px;
            margin-right: 20px;
            background: rgba(95, 95, 95, 0.16);
            border-radius: 50%;
            // border: 1px solid #e2e2e2;
            overflow: hidden;
            @media (max-width: 750px) {
              width: 180px;
              height: 180px;
            }
            img {
              width: 100%;
              height: 100%;
            }
          }
          .xuqian {
            width: 100px;
            height: 90px;
          }
          @media (max-width: 750px) {
            .xuqian {
              width: 200px;
              height: 180px;
            }
          }
          .info {
            p {
              margin: 0;
            }
            .name {
              font-size: 19.8px;
              color: #292f36;
              font-weight: 700;
              @media (max-width: 750px) {
                font-size: 42px;
              }
            }
            .note {
              font-size: 16.2px;
              color: #292f36;
              font-weight: 500;
              @media (max-width: 750px) {
                font-size: 32px;
              }
            }
          }
        }
      }
    }
    .cente-text-title {
      font-size: 26px;
      font-weight: 600;
      margin-bottom: 34px;
    }
    .cente-text-cente {
      text-align: left;
      span {
        font-size: 26px;
        font-weight: 600;
      }
      .img-box {
        width: 620px;
        @media (max-width: 750px) {
          display: none;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
      .text {
        line-height: 2;
      }
    }
    .justify {
      text-align: justify;
    }
    .cente-footer {
      margin-top: 34px;
    }
    .p-text {
      font-size: 26px;
      font-weight: 700;
    }
  }
  .card-box {
    display: flex;
    justify-content: space-between;
    .card {
      width: 285px;
      height: 156px;
      background: #f7f9fb;
      border-radius: 23px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      @media (max-width: 750px) {
        height: 200px;
      }
      p {
        margin: 0;
      }
      .title {
        font-size: 20px;
        color: #81838c;
        // line-height: 33px;
        font-weight: 700;
      }
      .timer {
        color: #81838c;
        .month {
          font-size: 20px;
          font-weight: 500;
        }
        .date {
          font-size: 16px;
          font-weight: 500;
        }
      }
    }
  }
  .item-box {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    color: #81838c;
    text-align: justify;
    line-height: 34px;
    font-weight: 500;
    .item-box-left {
      width: 50%;
      background: url('@/assets/img/IMG.png') no-repeat;
      background-size: contain;
      text-align: left;
      p {
        font-size: 26px;
        font-weight: 700;
      }
    }
    .item-box-right {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media (max-width: 750px) {
        display: block;
      }
      & > div {
        display: flex;
        flex: 1;
        justify-content: space-between;
        margin-left: 40px;
        & > div {
          width: 90px;
          height: 90px;
          background: url('@/assets/img/rect.png') no-repeat;
          background-size: cover;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          @media (max-width: 750px) {
            width: 250px;
            height: 250px;
            margin-top: 40px;
          }
          @media (max-width: 375px) {
            width: 200px;
            height: 200px;
            margin-top: 40px;
          }
        }
        @media (max-width: 750px) {
          .isH5 {
            display: none;
          }
        }
      }
      p {
        font-size: 26px;
        font-weight: 700;
        margin: 0;
        color: #0078ce;
      }
    }
    .bg-none {
      background: none;
    }
  }
  .h1-title {
    margin-top: 50px;
    font-size: 26px;
    color: #81838c;
    line-height: 34px;
    font-weight: 700;
  }
}
.middle {
  min-width: 1715px;
  height: 544px;
  background: url('@/assets/img/CTA.png') no-repeat;
  background-size: cover;
  padding-top: 72px;
  margin-bottom: 50px;
  & > div {
    h1 {
      font-size: 48px;
      color: #ffffff;
      line-height: 60px;
      font-weight: 700;
      margin-bottom: 50px;
      &::before {
        content: '';
        display: inline-block;
        width: 10px;
        height: 40px;
        background-color: #ffffff;
        margin-right: 10px;
        vertical-align: baseline;
      }
    }
    & > div {
      display: flex;
      & > div {
        font-size: 27px;
        color: #ffffff;
        line-height: 45.9px;
        font-weight: 500;
        span {
          font-size: 35px;
          font-weight: 700;
        }
      }
    }
    .middle-mg {
      margin-right: 309px;
    }
  }
}
@media (max-width: 750px) {
  .header,
  .footer,
  .middle {
    min-width: 375px;
  }
  .header {
    height: 200px;
    line-height: 200px;
    font-size: 80px;
  }
  .w {
    min-width: 100vw;
    max-width: 100vw;
  }
  .center-box {
    .cente-text {
      line-height: 50px;
    }
    .item-box {
      line-height: 60px;
      display: block;
      .item-box-left,
      .item-box-right {
        width: 100%;
        text-align: left;
      }
      .item-box-left {
        margin-bottom: 30px;
        background-position-x: 700px;
      }
      .media-bottom {
        margin-bottom: 0;
      }
    }
    .card-box {
      flex-wrap: wrap;
      .card {
        width: 49%;
        margin-bottom: 30px;
        // .title {
        //   margin-bottom: 20px;
        // }
      }
    }
  }
  .middle {
    height: auto;
    padding: 72px 0;
    & > div {
      .middle-mg {
        margin: 0;
      }
      & > div {
        display: unset;
        & > div {
          line-height: 60px;
        }
      }
    }
  }
}
/* 针对 Firefox 浏览器 */
@supports (-moz-appearance: none) {
  @media (max-width: 750px) {
    .public-mixin();
  }
}
/* 针对 iOS 设备，Retina 屏幕 */
@media screen and (-webkit-min-device-pixel-ratio: 2) and (max-width: 750px) {
  .public-mixin();
}

/* 针对 iOS 设备，非 Retina 屏幕 */
@media screen and (-webkit-max-device-pixel-ratio: 1) and (max-width: 750px) {
  .public-mixin();
}

/* 针对特定的 iOS 设备（例如：iPhone 6/7/8 Plus） */
@media screen and (device-aspect-ratio: 16/9) and (-webkit-min-device-pixel-ratio: 3) and (max-width: 750px) {
  .public-mixin();
}
</style>
