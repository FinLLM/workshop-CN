<template>
  <div class="home">
    <div style="display: none">
      <img
        src="@/assets/img/logo.jpg"
        alt=""
      />
    </div>
    <div class="header">
      <div class="w padding flex">
        <span
          style="cursor: pointer"
          @click="$router.replace('/')"
          >FinLLM 2024
        </span>
      </div>
    </div>
    <div class="subtitle padding w">
      <div class="sub-text">
        金融领域大语言模型研讨会<br />
        (FinLLM 2024)
      </div>
    </div>
    <div class="center-box w padding">
      <div class="center-img-box">
        <div class="center-text-box">
          <div class="center-text-content">
            <div class="center-text-top">
              <span class="center-text-title">研讨会日期: <br /></span>
              <span class="center-text-body">2024年9月 <br /></span>
            </div>
            <span class="center-text-title">会议地点: <br /></span>
            <span class="center-text-body">珠海横琴希尔顿逸林酒店</span>
          </div>
        </div>
        <img
          class="center-img"
          src="@/assets/img/address-bg.png"
        />
      </div>
      <h1>研讨范围和目标</h1>
      <div class="cente-text mg-bottom">
        大型语言模型（LLMs）在各类自然语言处理任务中展示了巨大的潜力，包括语言生成、机器翻译及智能问答等领域。在金融服务行业中，预训练的LLMs可以对投资研究、风险管理、市场分析和客户服务等工作产生重大影响。
        此外，预训练的LLMs可以协助金融从业者自动化分析研究报告及各类金融数据，并提取有助于企业做出明智决策的关键见解，助力决策智能化。
        <br /><br />
        本次研讨会为来自世界各地的研究人员、实践者和行业专家提供了交流平台，让大家分享新思想、交流研究发现、并讨论LLMs在金融服务领域中面临的挑战和机遇。
        研讨会将涵盖两个主题：1）LLMs在金融服务中的潜在应用和最佳实践；2）需要解决的挑战，提升LLMs效率、效果及可信度。
        <br /><br />
        研讨会还将邀请领先的研究人员和行业专家发表演讲，并就该领域的最新趋势和挑战进行小组讨论。我们欢迎来自学术界和行业的研究人员、实践者和行业专家提交他们的研究成果。
      </div>
      <h1>论文征集启事</h1>
      <div class="cente-text mg-bottom">
        <div class="cente-text-title">
          我们欢迎关于大型语言模型（LLMs）在金融服务领域中的最新进展和应用的投稿。我们鼓励提交涵盖广泛主题的论文，包括但不限于以下内容：
        </div>
        <div class="cente-text-cente center-flex">
          <div class="text">
            <div class="text-title">
              <span>技术: </span>
            </div>
            <div class="text-body">
              <div>- 使用大模型处理和清洗金融领域数据</div>
              <div>- 适配金融领域大模型的新型模型架构和训练技术</div>
              <div>- 大模型在金融领域中的能力延展和应用效率研究</div>
              <div>- 金融领域研究中的跨语言和多语言大模型应用</div>
              <div>- 使用大模型进行多模态金融数据建模</div>
              <div>- 金融领域大模型与其他AI技术集成服务</div>
              <div>- 人在回路的金融领域大模型</div>
            </div>
          </div>
          <div class="text">
            <div class="text-title">
              <span>应用: </span>
            </div>
            <div class="text-body">
              <div>- 基于大模型进行金融指标预测</div>
              <div>- 基于大模型的交易算法和决策系统</div>
              <div>- 使用大语言模型分析金融新闻、社交媒体、金融研究报告等</div>
              <div>- 使用大模型实现金融服务中的可解释性AI</div>
              <div>- 金融服务中大模型的迁移学习和领域自适应研究</div>
              <div>- 大模型在金融服务中的案例研究和成功路径分享</div>
            </div>
          </div>
          <div class="text">
            <div class="text-title">
              <span>挑战: </span>
            </div>
            <div class="text-body">
              <div>- 大模型在金融服务中的效果评测</div>
              <div>- 大模型在金融服务中的价度量值和可信度判断</div>
              <div>- 使用大模型在金融服务中的道德和法律考虑因素</div>
              <div>- 使用大模型在金融服务中的隐私和安全性问题</div>
              <div>- 使用大模型在金融服务中的偏见和公平性问题</div>
            </div>
          </div>
          <!-- <div class="img-box">
            <img
              src="@/assets/img/IMG.png"
              alt=""
            />
          </div> -->
        </div>
      </div>
      <h1>重要日期</h1>
      <div class="card-box mg-bottom">
        <div class="card">
          <p class="title">研讨会论文提交截止日期:</p>
          <p class="timer">
            <span class="month">2024年7月31日</span>
            <!-- <span class="date">(23:59:59 AoE)</span> -->
          </p>
        </div>
        <div class="card">
          <p class="title">通知截止时间:</p>
          <p class="timer">
            <span class="month">2024年8月14日</span>
            <!-- <span class="date">(23:59:59 AoE)</span> -->
          </p>
        </div>
        <div class="card">
          <p class="title">正稿论文提交截止日期:</p>
          <p class="timer">
            <span class="month">2024年8月20日</span>
            <!-- <span class="date">(23:59:59 AoE)</span> -->
          </p>
        </div>
        <div class="card">
          <p class="title">研讨会日期:</p>
          <p class="timer">
            <span class="month">2024年9月</span>
          </p>
        </div>
      </div>
      <h1>提交说明</h1>
      <div class="cente-text mg-bottom">
        <div class="cente-text-cente justify">
          我们建议通过EasyChair提交论文。论文提交链接如下：<br />
          <a href="https://easychair.org/conferences/?conf=finllm2024">
            https://easychair.org/conferences/?conf=finllm2024</a
          >
        </div>
      </div>
    </div>
    <div class="middle">
      <div class="w padding">
        <h1>日程安排：</h1>
        <div>
          <div class="middle-mg">
            <span>上午:</span>
            <br />• 08:30 - 09:00 嘉宾签到<br />• 09:00 - 10:45 特邀演讲 <br />• 10:45 - 11:00 茶歇 <br />• 11:00 -
            11:45 陈述报告
          </div>
          <div>
            <span>下午:</span>
            <br />• 13:30 - 15:15 特邀演讲 <br />• 15:15 - 15:30 茶歇 <br />• 15:30 - 16:30 特邀演讲 <br />• 16:30 -
            17:00 颁奖仪式
          </div>
        </div>
      </div>
    </div>
    <div class="center-box w padding">
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
                  src="@/assets/img/dailu.jpg"
                  alt=""
                />
              </div>
              <div class="info">
                <p class="name">戴路</p>
                <p class="note">易方达基金</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cente-text mg-bottom">
        <div class="cente-text-cente justify">
          <span>杨 强: </span>
          加拿大工程院（CAE）和加拿大皇家学会（RSC）院士，微众银行的首席人工智能官，香港科技大学计算机科学与工程系的名誉教授和前系主任。AAAI、ACM、IEEE
          Fellow。《ACM智能系统与技术交易》（ACM TIST）、《IEEE大数据交易》（IEEE
          TBD）等期刊创刊主编，曾任IJCAI主席（2017-2019）。<br />
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
          <br /><br />
          <span>唐永鹏: </span>
          易方达基金董事总经理，系统研发中心总经理，易方达基金金融科技执行委员会委员，高级金融科技专家。
          <br /><br />
          <span>戴 路: </span>
          中山大学博士，易方达基金金融科技技术委员会主席，高级金融科技专家。
          <br /><br />
        </div>
        <h1>往届会议信息</h1>
        <div class="cente-text mg-bottom">
          <div class="cente-text-cente">
            <a
              href="#"
              @click="$router.push('/2023-CN')"
            >
              Finllm 2023 金融领域大语言模型研讨会
            </a>
          </div>
          <div class="cente-text-cente">
            <a
              href="#"
              @click="$router.push('/2023-Paper-CN')"
            >
              Finllm 2023 主题汇报
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
@import '../../../style/public.less';

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
    margin-top: 32px;

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
        width: 280px;

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

    .center-flex {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
    }

    .cente-text-cente {
      text {
        margin-right: 16px;
      }
      text-align: left;
      @media (max-width: 750px) {
        display: block;
      }
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

      & > p {
        width: 280px;

        @media (max-width: 750px) {
          width: auto;
          font-size: 42px !important;
        }
      }

      @media (max-width: 750px) {
        display: block;
      }

      & > div {
        display: flex;
        flex: 1;
        justify-content: space-between;

        // margin-left: 120px;
        @media (max-width: 750px) {
          // margin-left: 40px;
          flex-wrap: wrap;
          margin-top: 40px;
        }

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
