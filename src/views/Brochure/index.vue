<template>
  <div>
    <div class="subtitle padding w">
      <div class="sub-text">FinLLM Conference Brochure</div>
    </div>
    <div class="brochure padding w">
      <h1>Schedule</h1>
      <div class="time-list-box">
        <div
          v-for="(item, index) in timeList"
          :key="index"
          class="time-box"
        >
          <div class="time">
            <span>{{ item.time }}</span>
            <div class="big-rect">
              <div class="small-rect"></div>
            </div>
          </div>
          <div class="time-centen">
            <p class="title">{{ item.title }}</p>
            <div class="avtar-box">
              <div
                v-if="item.img"
                class="avtar"
              >
                <img :src="item.img" />
              </div>
              <div class="name">{{ item.name }}<br />{{ item.text }}</div>
            </div>
            <p class="note">{{ item.note }}</p>
          </div>
        </div>
      </div>
      <h1 class="mg-top">Report Topic</h1>
      <div class="cente-text mg-bottom">
        Pretrained large language models (LLMs) have demonstrated tremendous potential in various natural language
        processing tasks, including language generation, machine translation, and question answering. In the financial
        services industry, pretrained LLMs have the potential to significantly impact tasks such as financial
        forecasting, risk management, and sentiment analysis. Moreover, LLMs can help automate the process of analyzing
        financial reports and extracting key insights that can aid businesses in making informed decisions.<br /><br />

        This symposium provides a platform for researchers, practitioners, and industry experts from around the world to
        share new ideas, exchange research findings, and discuss the challenges and opportunities in the field of
        pretrained LLMs for financial services. The symposium will cover two themes: 1) potential applications and best
        practices of pretrained LLMs for financial services; and 2) challenges that need to be addressed to make them
        efficient, effective, and trustworthy.<br /><br />

        The symposium will also feature invited talks by leading researchers and industry experts, as well as panel
        discussions on the latest trends and challenges in the field. We welcome researchers, practitioners, and
        industry experts from academia and industry to submit their work and participate in this exciting event.
      </div>
      <h1>Paper Abstract</h1>
      <div class="cente-text mg-bottom">
        <div class="cente-title">NumGPT: Improving Numeracy Ability of Generative Pre-trained Models</div>
        NumGPT: Improving Numeracy Ability of Generative Pre-trained Models Abstract: Existing generative pre-trained
        language models (e.g., GPT) focus on modeling the language structure and semantics of general texts. However,
        those models do not consider the numerical properties of numbers and cannot perform robustly on numerical
        reasoning tasks (e.g., math word problems and measurement estimation). In this paper, we propose NumGPT, a
        generative pre-trained model that explicitly models the numerical properties of numbers in texts. Specifically,
        it leverages a prototypebased numeral embedding to encode the mantissa of the number and an individual embedding
        to encode the exponent of the number. A numeral-aware loss function is designed to integrate numerals into the
        pre-training objective of NumGPT. We conduct extensive experiments on four different datasets to evaluate the
        numeracy ability of NumGPT. The experiment results show that NumGPT outperforms baseline models (e.g., GPT and
        GPT with DICE) on a range of numerical reasoning tasks such as measurement estimation, number comparison, math
        word problems, and magnitude classification. Ablation studies are also conducted to evaluate the impact of
        pre-training and model hyperparameters on the performance.

        <div class="cente-title">Symmetry,EfficientMarketsandMonetaryNeutrality</div>
        Abstract: We study the relationship between symmetry, efficient markets and monetary neutrality. We find that
        information symmetry can lead markets to reach efficient outcomes and will produce the prices which fluctuate
        randomly. However, information symmetry is almost impossible to achieve without considering the time factor! In
        addition, efficient markets can lead to monetary neutrality.

        <div class="cente-title">SPAM-T5: Benchmarking Large Language Models for Few-Shot Email Spam Detection</div>
        Abstract: This paper investigates the effectiveness of large language models (LLMs) in email spam detection by
        comparing prominent models from three distinct families: BERT-like, Sentence Transformers, and Seq2Seq.
        Additionally, we examine wellestablished machine learning techniques for spam detection, such as Na¨ıve Bayes
        and LightGBM, as baseline methods. We assess the performance of these models across four public datasets,
        utilizing different numbers of training samples (full training set and few-shot settings). Our findings reveal
        that, in the majority of cases, LLMs surpass the performance of the popular baseline techniques, particularly in
        few-shot scenarios. This adaptability renders LLMs uniquely suited to spam detection tasks, where labeled
        samples are limited in number and models require frequent updates. Additionally, we introduce SPAM-T5, a Flan-T5
        model that has been specifically adapted and fine-tuned for the purpose of detecting email spam. Our results
        demonstrate that SPAM-T5 surpasses baseline models and other LLMs in the majority of scenarios, particularly
        when there are a limited number of training samples available. Our code is publicly available at
        https://github.com/ jpmorganchase/llm-email-spam-detection.

        <div class="cente-title">Efficient Fine-tuning on LLaMA-series Models</div>
        Abstract: This paper presents a comprehensive analysis of the exceptional performance exhibited by LLaMA
        large-scale language models, along with the introduction of PEFT (Parameter-Efficient Fine-Tuning) methods to
        enhance model performance. Firstly, the paper showcases the remarkable advancements in LLaMA pre-training
        models, which are trained on vast text data and display remarkable general capabilities and excellent overall
        performance in language representation and semantic understanding. However, relying solely on pre-trained LLaMA
        may lead to limitations when addressing specific text processing tasks. To address these challenges, researchers
        have proposed PEFT methods, which enable the selection of optimal fine-tuning techniques based on task
        requirements and resource constraints, thus maximizing the potential of LLaMA. By providing a detailed
        examination of LLaMA and PEFT methods, this paper aims to offer users a clearer understanding of how to
        effectively apply large-scale language models.

        <div class="cente-title">Chinese Fine-Grained Financial Sentiment Analysis with Large Language Models</div>
        Abstract: Entity-level fine-grained sentiment analysis in the financial domain is a crucial subtask of sentiment
        analysis and currently faces numerous challenges. The primary challenge stems from the lack of highquality and
        large-scale annotated corpora specifically designed for financial text sentiment analysis, which in turn limits
        the availability of data necessary for developing effective text processing techniques. Recent advancements in
        large language models (LLMs) have yielded remarkable performance in natural language processing tasks, primarily
        centered around language pattern matching. In this paper, we propose a novel and extensive Chinese fine-grained
        financial sentiment analysis dataset, FinChina SA, for enterprise early warning. We thoroughly evaluate and
        experiment with well-known existing open-source LLMs using our dataset. We firmly believe that our dataset will
        serve as a valuable resource to advance the exploration of real-world financial sentiment analysis tasks, which
        should be the focus of future research.

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

        <div class="cente-title">Financial Large Language Models: A Survey</div>
        Abstract: In recent years, the emergence of a series of large language models, such as ChatGPT, and their pow-
        erful performance have garnered significant atten- tion from both academia and industry. Expand- ing the
        application of these models and technolo- gies to specialized fields, specifically the financial industry, has
        become an intriguing research topic, given its potential for immense value and impact. However, it is apparent
        that the financial industry presents a unique set of challenges for general large language models, due to its
        inherently complex and dynamic nature. In this survey, we will review the existing academic work on large
        language models in the financial domain, and summarize the unique and specific features of the financial field
        compared to general domains. In addition, we will exam- ine several key peculiarities and discuss relevant re-
        search works in the field of large language models. Ultimately, the findings of this paper provide in- sights
        into the challenges and opportunities of de- ploying large language models in the financial field, and
        contribute to a better understanding of the pos- sibilities for optimizing their performance in com- plex and
        specialized domains.

        <div class="cente-title">Could LLM Replace Traditional AI in Loan Business?</div>
        Abstract: This paper explores several typical applications in the real-world fintech industry and evaluates the
        possibility of replacing the AI models with the recently booming Large Language Model (LLM). The aim of using
        LLM is to improve the user experience of our financial services, while also considering the cost and benefits
        from a business point of view. To accomplish this, we have designed a series of feasible solutions that cover
        different types of business requirements. Experiments have been carried out in one of our most active scenes.
        Additionally, we discuss how LLM can be properly used to mitigate risks of misuse and other possible hazardous
        side-effects to the business

        <div class="cente-title">
          An Effective Data Creation Pipeline to Generate High-quality Financial Instruction Data for Large Language
          Model
        </div>
        Abstract: At the beginning era of large language model, it is quite critical to generate a high-quality
        financial dataset to fine-tune a large language model for fi- nancial related tasks. Thus, this paper presents a
        carefully designed data creation pipeline for this purpose. Particularly, we initiate a dialogue be- tween an AI
        investor and financial expert using ChatGPT and incorporate the feedback of human financial experts, leading to
        the refinement of the dataset. This pipeline yielded a robust instruc- tion tuning dataset comprised of 103k
        multi-turn chats. Extensive experiments have been conducted on this dataset to evaluate the model’s performance
        by adopting an external GPT-4 as the judge. The promising experimental results verify that our ap- proach led to
        significant advancements in generat- ing accurate, relevant, and financial-style responses from AI models, and
        thus providing a powerful tool for applications within the financial sector.

        <div class="cente-title">
          Instruct-FinGPT: Financial Sentiment Analysis by Instruction Tuning of General-Purpose Large Language Models
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

        <div class="cente-title">FinGPT: Open-Source Financial Large Language Model</div>
        Abstract: Large language models (LLMs) have shown the potential of revolutionizing natural language processing
        in diverse domains, sparking great interest in finance. However, the finance domain presents unique challenges,
        including high temporal sensitivity, constant dynamism, and a low signalto-noise ratio (SNR). While proprietary
        models like BloombergGPT have taken advantage of their unique data accumulation, such privileged access calls
        for an open-source alternative to democratize internet-scale financial data. In this paper, we present an
        open-source large language model, FinGPT, for the finance sector. Unlike proprietary models, FinGPT takes a
        data-centric approach, providing researchers and practitioners with accessible and transparent resources to
        customize their financial LLMs (FinLLMs). We highlight the importance of an automatic data curation pipeline and
        the lightweight low-rank adaptation technique in building FinGPT. Furthermore, we will showcase potential
        applications as stepping stones for users, such as robo-advising and sentiment analysis. Through collaborative
        efforts within the opensource AI4Finance community, FinGPT aims to stimulate innovation, democratize FinLLMs,
        and unlock new opportunities in open finance. Two associated code repos are https://github.
        com/AI4Finance-Foundation/FinGPT and https:// github.com/AI4Finance-Foundation/FinNLP

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

        <div class="cente-title">Large Scale Financial Time Series Forecasting under Distributional Shift</div>
        Abstract: Data-driven approaches using deep neural net- works have been successful in modeling complex financial
        time series and generating accurate pre- dictions without requiring extensive domain knowl- edge. However, most
        of the existing models that as- sume independent and identically distributed data may not generalize well to
        novel situations or dis- tributional shifts inside financial scenarios. To address this challenge, we introduce
        an invariant learning-based regularizer with relaxed bounds that expands the range of feasible solutions and
        mit- igates over-convergence issues in Invariant Risk Minimization (IRM). The regularizer is incorpo- rated into
        a Multilayer Perceptron (MLP)-based fi- nancial time series forecasting model. Experimen- tal results show that
        this regularizer enables more robust and adaptable financial forecasting models, enhancing the overall
        performance and generaliz- ability of data-driven financial forecasting.

        <div class="cente-title">
          Integrating Stock Features and Global Information via Large Language Models for Enhanced Stock Return
          Prediction
        </div>
        Abstract: The remarkable achievements and rapid ad- vancements of Large Language Models (LLMs) such as ChatGPT
        and GPT-4 have showcased their immense potential in quantitative invest- ment. Traders can effectively leverage
        these LLMs to analyze financial news and predict stock returns accurately. However, integrat- ing LLMs into
        existing quantitative models presents two primary challenges: the insuffi- cient utilization of semantic
        information em- bedded within LLMs and the difficulties in aligning the latent information within LLMs with
        pre-existing quantitative stock features. We propose a novel framework consisting of two components to surmount
        these challenges. The first component, the Local Global model, ap- proaches understanding stock features and fi-
        nancial news (through LLMs) as a unified prob- lem. The second component, Self-Correlated Reinforcement
        Learning, focuses on aligning the embeddings of financial news generated by LLMs with stock features within the
        same se- mantic space. By implementing our framework, we have demonstrated superior performance in Rank
        Information Coefficient and returns, par- ticularly compared to models relying only on stock features in the
        China A-share market.

        <div class="cente-title">
          Unveiling the Potential of Sentiment: Can Large Language Models Predict Chinese Stock Price Movements?
        </div>
        Abstract: The rapid advancement of Large Language Mod- els (LLMs) has led to extensive discourse regard- ing
        their potential to boost the return of quantita- tive stock trading strategies. This discourse pri- marily
        revolves around harnessing the remarkable comprehension capabilities of LLMs to extract sen- timent factors
        which facilitate informed and high- frequency investment portfolio adjustments. To ensure successful
        implementations of these LLMs into the analysis of Chinese financial texts and the subsequent trading strategy
        development within the Chinese stock market, we provide a rigorous and encompassing benchmark as well as a
        standard- ized back-testing framework aiming at objectively assessing the efficacy of various types of LLMs in
        the specialized domain of sentiment factor ex- traction from Chinese news text data. To illus- trate how our
        benchmark works, we reference three distinctive models: 1) the generative LLM (Chat- GPT), 2) the Chinese
        language-specific pre-trained LLM (Erlangshen-RoBERTa), and 3) the financial domain-specific fine-tuned LLM
        classifier(Chinese FinBERT). We apply them directly to the task of sentiment factor extraction from large
        volumes of Chinese news summary texts. We then proceed to building quantitative trading strategies and running
        back-tests under realistic trading scenarios based on the derived sentiment factors and evaluate their
        performances with our benchmark. By construct- ing such a comparative analysis, we invoke the question of what
        constitutes the most important el- ement for improving a LLM’s performance on ex- tracting sentiment factors.
        And by ensuring that the LLMs are evaluated on the same benchmark, fol- lowing the same standardized
        experimental proce- dures that are designed with sufficient expertise in quantitative trading, we make the first
        stride toward answering such a question.

        <div class="cente-title">
          Can ChatGPT Overcome Behavioral Biases in the Financial Sector? Classify-and-Rethink: Multi-Step Zero-Shot
          Reasoning in the Gold Investment
        </div>
        Abstract: Framing effect is a phenomenon observed in both humans and large language models where differ- ent
        descriptions of the same objectively identical problem can lead to different decisions. In behav- ioral finance,
        this effect must be carefully man- aged to prevent undesirable outcomes in the in- vestment process. In the
        application of large lan- guage models, prompt engineering is often em- ployed to mitigate the framing effect.
        While pre- vious research in this domain has focused on sen- timent classification or subject recognition, this
        study employs a large language model to score gold-related news and designs the ”Classify-and- Rethink” prompt
        strategy from the perspective of behavioral finance. Our experiment demonstrates that the Classify-and-Rethink
        prompt approach ef- fectively overcomes the framing effect and facil- itates excess returns. Compared to
        alternative prompt designs, the Classify-and-Rethink strategy exhibits higher yields and Sharpe ratios. This
        framework provides a valuable basis for future re- search on behavioral finance in large-scale analy- sis of
        financial texts and offers investors a reliable means of mitigating behavioral biases.

        <div class="cente-title">FinVis-GPT: A Multimodal Large Language Model for Financial Chart Analysis</div>
        Abstract: In this paper, we propose FinVis-GPT, a novel mul- timodal large language model (LLM) specifically
        designed for financial chart analysis. By leveraging the power of LLMs and incorporating instruction tuning and
        multimodal capabilities, FinVis-GPT is capable of interpreting financial charts and provid- ing valuable
        analysis. To train FinVis-GPT, a fi- nancial task oriented dataset was generated for pre- training alignment and
        instruction tuning, compris- ing various types of financial charts and their corre- sponding descriptions. We
        evaluate the model per- formance via several case studies due to the time limit, and the promising results
        demonstrated that FinVis-GPT is superior in various financial chart related tasks, including generating
        descriptions, an- swering questions and predicting future market trends, surpassing existing state-of-the-art
        multi- modal LLMs. The proposed FinVis-GPT serves as a pioneering effort in utilizing multimodal LLMs in the
        finance domain and our generated dataset will be release for public use in the near future to speedup related
        research.

        <div class="cente-title">
          XuanYuan: A Large Chinese Financial Chat Model with Hundreds of Billions Parameters
        </div>
        Abstract: In recent years, pre-trained language models have undergone rapid development with the emergence of
        large-scale models. However, there is a lack of open-sourced chat models specifically designed for the Chinese
        language, especially in the field of Chinese finance, at the scale of hundreds of bil- lions. To address this
        gap, we introduce XuanYuan 2.0 (轩辕 2.0), the largest Chinese chat model to date, built upon the BLOOM-176B
        architecture. To enable the model to generate a larger quantity of correct and financial instruction data, we
        introduce an innovative framework named SELF-QA, which replaces the traditional practice of human-written
        instruction seeds with a vast amount of unsuper- vised knowledge. Additionally, we propose a novel training
        method called Hybrid-tuning to mitigate catastrophic forgetting. By combining general- domain with
        domain-specific knowledge and inte- grating the stages of pre-training and fine-tuning, XuanYuan 2.0 is capable
        of providing accurate and contextually appropriate responses in the Chinese financial domain. Our model has been
        made public on Github and Huggingface , and has received widespread attention.

        <div class="cente-title">
          CGCE: A Chinese Generative Chat Evaluation Benchmark for General and Financial Domains
        </div>
        Abstract: Generative chat models, such as ChatGPT and GPT-4, have revolutionized natural language gener- ation
        (NLG) by incorporating instructions and hu- man feedback to achieve significant performance improvements.
        However, the lack of standardized evaluation benchmarks for chat models, particu- larly for Chinese and
        domain-specific models, hin- ders their assessment and progress. To address this gap, we introduce the Chinese
        Generative Chat Evaluation (CGCE) benchmark, focusing on gen- eral and financial domains. The CGCE benchmark
        encompasses diverse tasks, including 300 questions in the general domain and 150 specific professional questions
        in the financial domain. Manual scoring evaluates factors such as accuracy, coherence, ex- pression clarity, and
        completeness. To the best of our knowledge, the financial evaluation section of CGCE is the first evaluation
        benchmark for large- scale chat models in the Chinese financial domain. The CGCE benchmark provides researchers
        with a standardized framework to assess and compare Chinese generative chat models, fostering advance- ments in
        NLG research.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeList: [
        {
          time: '08:30-09:00',
          title: 'Registeration',
          img: require('../../assets/img/6.png'),
          name: 'Shuoling Liu',
          note: 'Online 20min talk + 5 min QA',
        },
        {
          time: '09:05-09:30',
          title: 'Invited Talks',
          img: require('../../assets/img/6.png'),
          name: 'Tenghui Chi',
          text: 'ZhuHai Financial Services Bureau',
          note: 'Online 20min talk + 5 min QA',
        },
        {
          time: '09:30-09:55',
          title: 'Invited Talks',
          img: require('../../assets/img/7.png'),
          name: 'Qiang Yang',
          text: 'Hong Kong University of Science and Technology',
          note: 'Online 20min talk + 5 min QA',
        },
        {
          time: '09:55-10:20',
          title: 'Invited Talks',
          img: require('../../assets/img/6.png'),
          name: 'Li Deng',
          note: 'Online 20min talk + 5 min QA',
        },
        {
          time: '10:20-10:45',
          title: 'Invited Talks',
          img: require('../../assets/img/6.png'),
          name: 'Jie Tang',
          text: 'Tsinghua University',
          note: 'Online 20min talk + 5 min QA',
        },
        {
          time: '10:45-11:15',
          title: 'Invited Talks',
          img: require('../../assets/img/Mark Dredze.png'),
          name: 'Professor Mark Dredze',
          text: 'Bloomberg',
          note: 'Online 20min talk + 5 min QA',
        },
        {
          time: '11:15-11:30',
          title: 'Invited Talks',
          name: 'Oral Presentations',
          note: 'Online 10 min pre+5min QA',
        },
        {
          time: '11:30-11:45',
          title: 'Invited Talks',
          name: 'FinGPT: Open-Source Financial Large Language Models',
          note: 'Online 10 min pre+5min QA',
        },
        {
          time: '11:45-12:00',
          title: 'Invited Talks',
          name: 'Instruct-FinGPT: Financial Sentiment Analysis by Instruction Tuning of General-Purpose Large Language Models',
          note: 'Online 10 min pre+5min QA',
        },
        {
          time: '13:00-13:30',
          title: 'Invited Talks',
          img: require('../../assets/img/白硕.jpg'),
          name: 'Shuo Bai',
          text: 'President of Hang Seng Institute',
          note: '25min talk + 5 min QA',
        },
        {
          time: '13:30-14:00',
          title: 'Invited Talks',
          img: require('../../assets/img/王巍巍.jpg'),
          name: 'Weiwei Wang',
          text: 'Chief architect of Alidamo Institute',
          note: '25min talk + 5 min QA',
        },
        {
          time: '14:00-14:30',
          title: 'Invited Talks',
          img: require('../../assets/img/6.png'),
          name: 'Ding Chen',
          text: 'Chief scientist of Hengtai',
          note: '25min talk + 5 min QA',
        },
        {
          time: '14:30-15:00',
          title: 'Invited Talks',
          img: require('../../assets/img/6.png'),
          name: 'Donglin Mao',
          text: 'Sinovel Technology',
          note: '25min talk + 5 min QA',
        },
        {
          time: '15:00-15:30',
          title: 'Invited Talks',
          img: require('../../assets/img/6.png'),
          name: 'Yunan Zhou',
          text: 'NetEase',
          note: '25min talk + 5 min QA',
        },
        {
          time: '15:30-15:45',
          title: 'Oral Presentations',
          name: 'Chinese Fine-Grained Financial Sentiment Analysis with Large Language Models',
          note: 'Online 10 min pre+5min QA ',
        },
        {
          time: '15:45-16:00',
          title: 'Oral Presentations',
          name: 'NumGPT: Improving Numeracy Ability of Generative Pre-trained Models',
          note: 'Online 10 min pre+5min QA ',
        },
        {
          time: '16:15-16:30',
          title: 'Oral Presentations',
          name: 'Can ChatGPT Overcome Behavioral Biases in the Financial Sector? Classify-and-Rethink: Multi-Step Zero-Shot Reasoning in the Gold Investment',
          note: 'Online 10 min pre+5min QA ',
        },
        {
          time: '16:30-16:45',
          title: 'Oral Presentations',
          name: 'Integrating Stock Features and Global Information via Large Language Models for Enhanced Stock Return Prediction',
          note: 'Online 10 min pre+5min QA',
        },
        {
          time: '16:45-17:00',
          title: 'Award Ceremony',
          name: 'including group photo taking',
          note: 'Online 15 min pre',
        },
      ],
    }
  },
}
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

.brochure {
  margin-top: 80px;
}

h1 {
  font-size: 48px;
  color: #0d152e;
  line-height: 60px;
  font-weight: 700;
  display: flex;
  align-items: center;

  @media (max-width: 750px) {
    font-size: 58px;
  }

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

.subtitle {
  background: url('@/assets/img/header-bg.jpg') no-repeat;
  height: 240px;
  box-sizing: border-box;
  background-size: 100% 100%;
  display: flex;
  align-items: center;

  @media (max-width: 750px) {
    height: 300px;
  }

  .sub-text {
    font-size: 43px;
    color: #ffffff;
    font-weight: 700;

    @media (max-width: 750px) {
      font-size: 80px;
    }
  }
}

.mg-top {
  margin-top: 50px;
}

.time-list-box {
  position: relative;

  .time-box {
    display: flex;
    align-items: start;
    margin-bottom: 24px;

    &:not(:last-child) {
      .time {
        .big-rect {
          &::after {
            content: '';
            position: absolute;
            border-left: 1px dashed #4774f4;
            height: 280px;
            top: 5px;
          }
        }
      }
    }

    .time {
      display: flex;
      align-items: center;

      @media (max-width: 750px) {
        font-size: 24px;
      }

      .big-rect {
        position: relative;
        width: 17px;
        height: 17px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #edf1fe;
        border-radius: 50%;
        margin-left: 27.5px;

        @media (max-width: 750px) {
          width: 34px;
          height: 34px;
        }

        .small-rect {
          width: 10px;
          height: 10px;
          background-color: #4774f4;
          border-radius: 50%;

          @media (max-width: 750px) {
            width: 20px;
            height: 20px;
          }
        }
      }
    }

    .time-centen {
      flex: 1;
      background-color: #f7f9fb;
      border-radius: 8px;
      margin-left: 16px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      box-sizing: border-box;
      padding: 24px 40px;
      height: 260px;

      .title {
        font-size: 26px;
        color: #0d152e;
        margin-bottom: 25px;

        @media (max-width: 750px) {
          font-size: 46px;
        }
      }

      .avtar-box {
        font-size: 18px;
        color: #292f36;
        display: flex;
        align-items: center;

        .avtar {
          width: 40px;
          height: 40px;
          margin-right: 12px;
          border-radius: 50%;
          overflow: hidden;

          @media (max-width: 750px) {
            width: 80px;
            height: 80px;
          }

          img {
            width: 100%;
            height: 100%;
          }
        }

        .name {
          font-size: 18px;
          color: #292f36;

          @media (max-width: 750px) {
            font-size: 28px;
          }
        }
      }

      .note {
        margin-top: 25px;
        font-size: 16px;
        color: #81838c;
        margin-bottom: 0;

        @media (max-width: 750px) {
          font-size: 28px;
        }
      }
    }
  }

  .line {
    position: absolute;
    top: 15px;
    bottom: 190px;
    left: 176px;
    border-left: 1px dashed #4774f4;
    box-sizing: border-box;
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
  .w {
    min-width: 100vw;
    max-width: 100vw;
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
