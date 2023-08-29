<template>
  <div class="conference-brochure">
    <h1 class="title w padding">FinLLM Conference Brochure</h1>
    <div class="centen-box w padding">
      <h1 class="big-title">Scope and Objective</h1>
      <div class="text">
        Pretrained Large Language Models (LLMs) have demonstrated tremendous potential in various natural language
        processing tasks, including language generation, machine translation, and question answering. In the financial
        services industry, pretrained LLMs have the potential to significantly impact tasks such as financial
        forecasting, risk management, and sentiment analysis. Moreover, LLMs can help automate the process of analyzing
        financial reports and extracting key insights that can aid businesses in making informed decisions. This
        symposium provides a platform for researchers, practitioners, and industry experts from around the world to
        share new ideas, exchange research findings, and discuss the challenges and opportunities in the field of
        pretrained LLMs for financial services. The symposium will cover two themes: 1) potential applications and best
        practices of pretrained LLMs for financial services; and 2) challenges that need to be addressed to make them
        efficient, effective, and trustworthy. The symposium will also feature invited talks by leading researchers and
        industry experts, as well as panel discussions on the latest trends and challenges in the field. We welcome
        researchers, practitioners, and industry experts from academia and industry to submit their work and participate
        in this exciting event.
      </div>
      <h1 class="big-title">Accepted Papers</h1>
      <div class="cente-text mg-bottom">
        <div class="cente-title mg">Oral Presentation 1: Financial Large Language Models: A Survey</div>
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

        <div class="cente-title">Oral Presentation 2: FinGPT: Open-Source Financial Large Language Models</div>
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

        <div class="cente-title">
          Oral Presentation 3: Instruct-FinGPT: Financial Sentiment Analysis by Instruction Tuning of General-Purpose
          Large Language Models
        </div>
        Abstract: Sentiment analysis is a vital tool for uncovering insights from financial articles, news, and social
        media, shaping our understanding of market movements. Despite the impressive capabilities of large language
        models (LLMs) in financial natural language processing (NLP), they still struggle with accurately interpreting
        numerical values and grasping financial context, limiting their effectiveness in predicting financial sentiment.
        In this paper, we introduce a simple yet effective instruction tuning approach to address these issues. By
        transforming a small portion of supervised financial sentiment analysis data into instruction data and
        finetuning a general-purpose LLM with this method, we achieve remarkable advancements in financial sentiment
        analysis. In the experiment, our approach outperforms state-of-the-art supervised sentiment analysis models, as
        well as widely used LLMs like ChatGPT and LLaMAs, particularly in scenarios where numerical understanding and
        contextual comprehension are vital.

        <div class="cente-title">
          Oral Presentation 4: An Effective Data Creation Pipeline to Generate High-Quality Financial Instruction Data
          for Large Language Model
        </div>
        Abstract: At the beginning era of large language model, it is quite critical to generate a high-quality
        financial dataset to fine-tune a large language model for financial related tasks. Thus, this paper presents a
        carefully designed data creation pipeline for this purpose. Particularly, we initiate a dialogue between an AI
        investor and financial expert using ChatGPT and incorporate the feedback of human financial experts, leading to
        the refinement of the dataset. This pipeline yielded a robust instruction tuning dataset comprised of 103k
        multi-turn chats. Extensive experiments have been conducted on this dataset to evaluate the model’s performance
        by adopting an external GPT-4 as the judge. The promising experimental results verify that our approach led to
        significant advancements in generating accurate, relevant, and financial-style responses from AI models, and
        thus providing a powerful tool for applications within the financial sector.

        <div class="cente-title">
          Oral Presentation 5: Integrating Stock Features and Global Information via Large Language Models for Enhanced
          Stock Return Prediction
        </div>
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

        <div class="cente-title">
          Oral Presentation 6: Chinese Fine-Grained Financial Sentiment Analysis with Large Language Models
        </div>
        Abstract: Entity-level fine-grained sentiment analysis in the financial domain is a crucial subtask of sentiment
        analysis and currently faces numerous challenges. The primary challenge stems from the lack of high-quality and
        large-scale annotated corpora specifically designed for financial text sentiment analysis, which in turn limits
        the availability of data necessary for developing effective text processing techniques. Recent advancements in
        large language models (LLMs) have yielded remarkable performance in natural language processing tasks, primarily
        centered around language pattern matching. In this paper, we propose a novel and extensive Chinese fine-grained
        financial sentiment analysis dataset, FinChina SA, for enterprise early warning. We thoroughly evaluate and
        experiment with well-known existing open-source LLMs using our dataset. We firmly believe that our dataset will
        serve as a valuable resource to advance the exploration of real-world financial sentiment analysis tasks, which
        should be the focus of future research.

        <div class="cente-title">
          Oral Presentation 7: NumGPT: Improving Numeracy Ability of Generative Pre-trained Models
        </div>
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

        <div class="cente-title">
          Can ChatGPT Overcome Behavioral Biases in the Financial Sector? Classify-and-Rethink: Multi-Step Zero-Shot
          Reasoning in the Gold Investment
        </div>
        Abstract: The framing effect is a phenomenon observed in both humans and large language models where different
        descriptions of the same objectively identical problem can lead to different decisions. In behavioral finance,
        this effect must be carefully managed to prevent undesirable outcomes in the investment process. In the
        application of large language models, prompt engineering is often employed to mitigate the framing effect. While
        previous research in this domain has focused on sentiment classification or subject recognition, this study
        employs a large language model to score gold-related news and designs the ”Classify-and-Rethink” prompt strategy
        from the perspective of behavioral finance. Our experiment demonstrates that the Classify-and-Rethink prompt
        approach effectively overcomes the framing effect and facilitates excess returns. Compared to alternative prompt
        designs, the Classify-and-Rethink strategy exhibits higher yields and Sharpe ratios. This framework provides a
        valuable basis for future research on behavioral finance in large-scale analysis of financial texts and offers
        investors a reliable means of mitigating behavioral biases.

        <div class="cente-title">
          Oral Presentation 9: XuanYuan: A Large Chinese Financial Chat Model with Hundreds of Billions Parameters
        </div>
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

        <div class="cente-title">SPAM-T5: Benchmarking Large Language Models for Few-Shot Email Spam Detection</div>
        Abstract: This paper investigates the effectiveness of large language models (LLMs) in email spam detection by
        comparing prominent models from three distinct families: BERT-like, Sentence Transformers, and Seq2Seq.
        Additionally, we examine well-established machine learning techniques for spam detection, such as Naïve Bayes
        and LightGBM, as baseline methods. We assess the performance of these models across four public datasets,
        utilizing different numbers of training samples (full training set and few-shot settings). Our findings reveal
        that, in the majority of cases, LLMs surpass the performance of the popular baseline techniques, particularly in
        few-shot scenarios. This adaptability renders LLMs uniquely suited to spam detection tasks, where labeled
        samples are limited in number and models require frequent updates. Additionally, we introduce SPAM-T5, a Flan-T5
        model that has been specifically adapted and fine-tuned for the purpose of detecting email spam. Our results
        demonstrate that SPAM-T5 surpasses baseline models and other LLMs in the majority of scenarios, particularly
        when there are a limited number of training samples available. Our code is publicly available at
        https://github.com/jpmorganchase/llm-email-spam-detection.

        <div class="cente-title">
          Exploring In-Context Learning for Overnight Stock Price Movement Prediction with Large Language Models
        </div>
        Abstract: Stock price movement prediction is an important task in the financial domain since accurate price
        prediction for the next trading day brings great benefits for making decisions on stock transactions. Except for
        some common indicators like 20-days moving average, time-series regression models including linear regression,
        RNN-based models, and Transformer achieve satisfying performance in this task and are widely applied. However,
        all methods mentioned above only exploit historical data to predict stock price movement in the next trading
        day. Apart from stock historical data, data in text modality like finance-related news or social platform
        contents can also reflect the moving trend of stocks. Instead of training a new model to learn the
        representation of text data, we use large language models (LLMs) to directly predict the price movement of
        stocks. Considering the possible lack of domain data in training corpora of LLMs, we introduce in-context
        learning to explore if LLMs can learn necessary knowledge from given prediction examples consisting of both
        historical data and text data. In this paper, we focus on overnight stock price movement prediction. Our
        experiment results show that LLMs can boost performance in this task compared to competitive baselines and
        in-context learning can be beneficial for prediction in some cases. Our further analyses explore the influence
        of data modalities, sample selection strategies, and the number of examples on models’ performance.

        <div class="cente-title">The Challenges of LLMs in Financial Services</div>
        Abstract: With the rapid development of Large Language Models (LLMs), the financial services sector has shown
        outstanding advantages and potential. At the same time, risks and challenges for financial services are brought
        into traditional businesses, such as data privacy, ethics, misinformation, disinformation, and social
        injustices. In light of those challenges, this paper reports on a mixed-methods study with corporate middle
        management, high management, and technical staff. Our preliminary findings suggest that financial services
        practitioners are optimistic about the future of LLMs but distrustful of existing ones. Our paper should be read
        as a preliminary study rather than a complete research work. Thus our suggestions on improving LLMs for specific
        domains, such as financial services, are, hopefully, useful to those who share similar interests in improving
        LLMs for realistic use.

        <div class="cente-title">
          Unveiling the Potential of Sentiment: Can Large Language Models Predict Chinese Stock Price Movements?
        </div>
        Abstract: The rapid advancement of Large Language Models (LLMs) has led to extensive discourse regarding their
        potential to boost the return of quantitative stock trading strategies. This discourse primarily revolves around
        harnessing the remarkable comprehension capabilities of LLMs to extract sentiment factors which facilitate
        informed and high-frequency investment portfolio adjustments. To ensure successful implementations of these LLMs
        into the analysis of Chinese financial texts and the subsequent trading strategy development within the Chinese
        stock market, we provide a rigorous and encompassing benchmark as well as a standardized back-testing framework
        aiming at objectively assessing the efficacy of various types of LLMs in the specialized domain of sentiment
        factor extraction from Chinese news text data. To illustrate how our benchmark works, we reference three
        distinctive models: 1) the generative LLM (ChatGPT), 2) the Chinese language-specific pre-trained LLM
        (Erlangshen-RoBERTa), and 3) the financial domain-specific fine-tuned LLM classifier(Chinese FinBERT). We apply
        them directly to the task of sentiment factor extraction from large volumes of Chinese news summary texts. We
        then proceed to building quantitative trading strategies and running back-tests under realistic trading
        scenarios based on the derived sentiment factors and evaluate their performances with our benchmark. By
        constructing such a comparative analysis, we invoke the question of what constitutes the most important element
        for improving a LLM’s performance on extracting sentiment factors. And by ensuring that the LLMs are evaluated
        on the same benchmark, following the same standardized experimental procedures that are designed with sufficient
        expertise in quantitative trading, we make the first stride toward answering such a question.

        <div class="cente-title">FinVis-GPT: A Multimodal Large Language Model for Financial Chart Analysis</div>
        Abstract: In this paper, we propose FinVis-GPT, a novel multimodal large language model (LLM) specifically
        designed for financial chart analysis. By leveraging the power of LLMs and incorporating instruction tuning and
        multimodal capabilities, FinVis-GPT is capable of interpreting financial charts and providing valuable analysis.
        To train FinVis-GPT, a financial task oriented dataset was generated for pretraining alignment and instruction
        tuning, comprising various types of financial charts and their corresponding descriptions. We evaluate the model
        performance via several case studies due to the time limit, and the promising results demonstrated that
        FinVis-GPT is superior in various financial chart related tasks, including generating descriptions, answering
        questions and predicting future market trends, surpassing existing state-of-the-art multimodal LLMs. The
        proposed FinVis-GPT serves as a pioneering effort in utilizing multimodal LLMs in the finance domain and our
        generated dataset will be release for public use in the near future to speedup related research.
        <div class="cente-title">
          CGCE: A Chinese Generative Chat Evaluation Benchmark for General and Financial Domains
        </div>
        Abstract: Generative chat models, such as ChatGPT and GPT-4, have revolutionized natural language generation
        (NLG) by incorporating instructions and human feedback to achieve significant performance improvements. However,
        the lack of standardized evaluation benchmarks for chat models, particularly for Chinese and domain-specific
        models, hinders their assessment and progress. To address this gap, we introduce the Chinese Generative Chat
        Evaluation (CGCE) benchmark, focusing on general and financial domains. The CGCE benchmark encompasses diverse
        tasks, including 300 questions in the general domain and 150 specific professional questions in the financial
        domain. Manual scoring evaluates factors such as accuracy, coherence, expression clarity, and completeness. To
        the best of our knowledge, the financial evaluation section of CGCE is the first evaluation benchmark for
        large-scale chat models in the Chinese financial domain. The CGCE benchmark provides researchers with a
        standardized framework to assess and compare Chinese generative chat models, fostering advancements in NLG
        research.
      </div>
      <h1 class="big-title">Award</h1>
      <div class="jz-box">
        <img
          v-for="item in 6"
          :key="item"
          :src="require(`../../assets/img/jiangzhuang (${item}).jpg`)"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
@import '../../style/global.less';
.padding {
  padding: 0 130px;
}
.title {
  font-size: 40px;
  color: #0d152e;
  font-weight: 600;
  margin-top: 59px;
  @media (max-width: 750px) {
    font-size: 60px;
  }
}
.big-title {
  @media (max-width: 750px) {
    font-size: 60px;
  }
}
.cente-text {
  font-size: 20px;
  color: #81838c;
  text-align: justify;
  line-height: 1.5;

  @media (max-width: 750px) {
    font-size: 40px;
  }

  .cente-title {
    font-size: 26px;
    color: #81838c;
    margin-top: 68px;
    font-weight: 500;
    text-align: left;

    @media (max-width: 750px) {
      font-size: 52px;
    }
  }
  .mg {
    margin-top: 25px !important;
  }
}
.centen-box {
  margin-top: 50px;
  h1 {
    font-size: 32px;
    color: #0d152e;
    line-height: 2;
    font-weight: 600;
    display: flex;
    align-items: center;
    @media (max-width: 750px) {
      font-size: 50px;
    }
    &::before {
      content: '';
      display: inline-block;
      width: 10px;
      height: 35px;
      background-color: #4774f4;
      margin-right: 10px;
      vertical-align: baseline;
      @media (max-width: 750px) {
        height: 50px;
      }
    }
  }
  .text {
    font-size: 20px;
    color: #81838c;
    text-align: justify;
    line-height: 1.5;
    font-weight: 400;
    margin-bottom: 30px;
    @media (max-width: 750px) {
      font-size: 40px;
    }
    .email {
      color: #0088ff;
    }
  }
  .link {
    display: block;
    font-size: 20px;
    color: #0088ff;
    line-height: 2;
    font-weight: 400;
    margin-bottom: 20px;
    @media (max-width: 750px) {
      font-size: 40px;
    }
  }
  .process {
    font-size: 20px;
    color: #81838c;
    line-height: 2;
    font-weight: 400;
    @media (max-width: 750px) {
      font-size: 40px;
    }
    span {
      color: #1eb9e1;
    }
    .process-img {
      display: flex;
      margin-bottom: 28px;
      @media (max-width: 750px) {
        justify-content: space-between;
      }
      & > div {
        width: 200px;
        margin-right: 30px;
        @media (max-width: 750px) {
          width: 48%;
          margin: 0;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
.cente-text {
  font-size: 20px;
  color: #81838c;
  text-align: justify;
  line-height: 1.5;

  @media (max-width: 750px) {
    font-size: 40px;
  }

  .cente-title {
    font-size: 26px;
    color: #81838c;
    margin-top: 68px;
    font-weight: 500;
    text-align: left;

    @media (max-width: 750px) {
      font-size: 52px;
    }
  }
}

.mg-bottom {
  margin-bottom: 50px;
}
@media (max-width: 750px) {
  .header,
  .footer {
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
}
.jz-box {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  img {
    width: 48%;
    margin-bottom: 50px;
  }
}
</style>
