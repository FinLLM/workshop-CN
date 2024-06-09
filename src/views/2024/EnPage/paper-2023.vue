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
          @click="$router.replace('/2024-EN')"
          >FinLLM 2024
        </span>
      </div>
    </div>
    <div class="center-box w padding">
      <h1>Introduction to Previous Conferences</h1>
      <div class="cente-text mg-bottom">
        XuanYuan: A Large Chinese Financial Chat Model with Hundreds of Billions Parameters
        <br />
        Abstract: In recent years, pre-trained language models have undergone rapid development with the emergence of
        large-scale models. However, there is a lack of open-sourced chat models specifically designed for the Chinese
        language, especially in the field of Chinese finance, at the scale of hundreds of billions. To address this gap,
        we introduce XuanYuan 2.0 (轩辕 2.0), the largest Chinese chat model to date, built upon the BLOOM-176B
        architecture. To enable the model to generate a larger quantity of correct and financial instruction data, we
        introduce an innovative framework named SELF-QA, which replaces the traditional practice of human-written
        instruction seeds with a vast amount of unsupervised knowledge. Additionally, we propose a novel training method
        called Hybrid-tuning to mitigate catastrophic forgetting. By combining general-domain with domain-specific
        knowledge and integrating the stages of pre-training and fine-tuning, XuanYuan 2.0 is capable of providing
        accurate and contextually appropriate responses in the Chinese financial domain. Our model has been made public
        on Github and Huggingface, and has received widespread attention.
        <br /><br />
        Financial Large Language Models: A Survey
        <br />
        Abstract: In recent years, the emergence of a series of large language models, such as ChatGPT, and their
        powerful performance have garnered significant attention from both academia and industry. Expanding the
        application of these models and technologies to specialized fields, specifically the financial industry, has
        become an intriguing research topic, given its potential for immense value and impact. However, it is apparent
        that the financial industry presents a unique set of challenges for general large language models, due to its
        inherently complex and dynamic nature. In this survey, we will review the existing academic work on large
        language models in the financial domain, and summarize the unique and specific features of the financial field
        compared to general domains. In addition, we will examine several key peculiarities and discuss relevant
        research works in the field of large language models. Ultimately, the findings of this paper provide insights
        into the challenges and opportunities of deploying large language models in the financial field, and contribute
        to a better understanding of the possibilities for optimizing their performance in complex and specialized
        domains.
        <br /><br />
        An Effective Data Creation Pipeline to Generate High-Quality Financial Instruction Data for Large Language Model
        <br />
        Abstract: At the beginning era of large language model, it is quite critical to generate a high-quality
        financial dataset to fine-tune a large language model for financial related tasks. Thus, this paper presents a
        carefully designed data creation pipeline for this purpose. Particularly, we initiate a dialogue between an AI
        investor and financial expert using ChatGPT and incorporate the feedback of human financial experts, leading to
        the refinement of the dataset. This pipeline yielded a robust instruction tuning dataset comprised of 103k
        multi-turn chats. Extensive experiments have been conducted on this dataset to evaluate the model’s performance
        by adopting an external GPT-4 as the judge. The promising experimental results verify that our approach led to
        significant advancements in generating accurate, relevant, and financial-style responses from AI models, and
        thus providing a powerful tool for applications within the financial sector.
        <br /><br />
        Integrating Stock Features and Global Information via Large Language Models for Enhanced Stock Return Prediction
        <br />
        Abstract: The remarkable achievements and rapid advancements of Large Language Models (LLMs) such as ChatGPT and
        GPT-4 have showcased their immense potential in quantitative investment. Traders can effectively leverage these
        LLMs to analyze financial news and predict stock returns accurately. However, integrating LLMs into existing
        quantitative models presents two primary challenges: the insufficient utilization of semantic information
        embedded within LLMs and the difficulties in aligning the latent information within LLMs with pre-existing
        quantitative stock features. We propose a novel framework consisting of two components to surmount these
        challenges. The first component, the Local Global model, approaches understanding stock features and financial
        news (through LLMs) as a unified problem. The second component, Self-Correlated Reinforcement Learning, focuses
        on aligning the embeddings of financial news generated by LLMs with stock features within the same semantic
        space. By implementing our framework, we have demonstrated superior performance in Rank Information Coefficient
        and returns, particularly compared to models relying only on stock features in the China A-share market.
        <br /><br />
        FinGPT: Open-Source Financial Large Language Models
        <br />
        Abstract: Large language models (LLMs) have shown the potential of revolutionizing natural language processing
        in diverse domains, sparking great interest in finance. However, the finance domain presents unique challenges,
        including high temporal sensitivity, constant dynamism, and a low signal-to-noise ratio (SNR). While proprietary
        models like BloombergGPT have taken advantage of their unique data accumulation, such privileged access calls
        for an open-source alternative to democratize internet-scale financial data. In this paper, we present an
        open-source large language model, FinGPT, for the finance sector. Unlike proprietary models, FinGPT takes a
        data-centric approach, providing researchers and practitioners with accessible and transparent resources to
        customize their financial LLMs (FinLLMs). We highlight the importance of an automatic data curation pipeline and
        the lightweight low-rank adaptation technique in building FinGPT. Furthermore, we will showcase potential
        applications as stepping stones for users, such as robo-advising and sentiment analysis. Through collaborative
        efforts within the opensource AI4Finance community, FinGPT aims to stimulate innovation, democratize FinLLMs,
        and unlock new opportunities in open finance. Two associated code repos are
        https://github.com/AI4Finance-Foundation/FinGPT and https://github.com/AI4Finance-Foundation/FinNLP
        <br /><br />
        NumGPT: Improving Numeracy Ability of Generative Pre-trained Models
        <br />
        Abstract: Existing generative pre-trained language models (e.g., GPT) focus on modeling the language structure
        and semantics of general texts. However, those models do not consider the numerical properties of numbers and
        cannot perform robustly on numerical reasoning tasks (e.g., math word problems and measurement estimation). In
        this paper, we propose NumGPT, a generative pre-trained model that explicitly models the numerical properties of
        numbers in texts. Specifically, it leverages a prototype-based numeral embedding to encode the mantissa of the
        number and an individual embedding to encode the exponent of the number. A numeral-aware loss function is
        designed to integrate numerals into the pre-training objective of NumGPT. We conduct extensive experiments on
        four different datasets to evaluate the numeracy ability of NumGPT. The experiment results show that NumGPT
        outperforms baseline models (e.g., GPT and GPT with DICE) on a range of numerical reasoning tasks such as
        measurement estimation, number comparison, math word problems, and magnitude classification. Ablation studies
        are also conducted to evaluate the impact of pre-training and model hyperparameters on the performance.
        <br />
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
