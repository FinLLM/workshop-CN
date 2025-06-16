<template>
  <div class="invitation2025">
    <!-- 顶部蓝色背景和LOGO -->
    <div class="header-bg">
      <div class="header-content">
        <span class="header-title">FinLLM 2025</span>
        <img
          class="header-logo"
          src="@/assets/img/ijcai.png"
          alt="IJCAI LOGO"
        />
      </div>
    </div>
    <div class="main-content">
      <img
        class="main-bg-img"
        src="@/assets/img/2025-bg.png"
        alt="内容背景"
      />
      <div class="main-inner">
        <div class="main-title">诚邀参加2025年国际金融服务领域大型语言模型研讨会（FinLLM 2025）@ IJCAI 2025</div>
        <div class="main-section">
          我们荣幸地邀请您参加2025年国际金融服务领域大型语言模型研讨会（FinLLM
          2025），该研讨会是2025年国际人工智能联合大会（IJCAI
          2025）下属研讨会（Workshop）。这一高水平的学术盛会将于2025年8月28日在广州南丰朗豪酒店举行。更多详细信息，请访问研讨会网站：<br />
          <a
            href="https://finllm.github.io/workshop/#/"
            target="_blank"
            >https://finllm.github.io/workshop/#/</a
          >
        </div>
        <div class="main-section">
          FinLLM
          2025由加拿大科学院院士杨强教授团队、清华大学深圳国际研究生院李秀教授团队和易方达基金管理有限公司共同组织。会议组织方拟邀请国内外的知名的学术界研究学者和金融业界的从业者，为参会者带来最新的高水平研究成果和具备实用性以及深刻洞察力的远见卓识。本次研讨会旨在汇聚金融服务领域大型语言模型（LLMs）技术、应用及挑战方面的顶尖研究者、专业人士和实践者。我们相信您在该领域的专业知识将为本次活动的成功做出重要贡献。
        </div>
        <div class="main-section">
          本届大会已收到世界范围内多篇学术论文投稿提交，并邀请优秀投稿在workshop上进行演讲分享。本次研讨会接受的文章，将在组委会同期于中国工程院院刊、SCI检索期刊《Frontiers
          of Information Technology & Electronic Engineering（FITEE）》组织的"金融大模型理论及应用"专题（<a
            href="https://www.fitee.zjujournals.com/en/news/184388"
            target="_blank"
            >https://www.fitee.zjujournals.com/en/news/184388</a
          >）特刊上择优发表。
        </div>
        <div class="main-section">
          如您有任何疑问或需要进一步协助，请随时联系我们：<br />
          <a href="mailto:yanjiangpeng@efunds.com.cn">yanjiangpeng@efunds.com.cn</a><br />
          我们期待您加入这一卓越的盛会，并期待在广州与您相见。
        </div>
        <div
          class="main-section"
          style="text-align: left; margin-top: 20px"
        >
          顺祝商祺，<br />FinLLM 2025组委会代表
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.invitation2025 {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.header-bg {
  background: url('@/assets/img/2025-header.png') no-repeat;
  background-size: cover;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 750px) {
    height: 180px;
  }
}
.header-content {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  margin-top: 16px;
}
.header-title {
  color: #fff;
  font-size: 48px;
  font-weight: 800;
  letter-spacing: 2px;
  @media (max-width: 750px) {
    font-size: 64px;
  }
}
.header-logo {
  height: 80px;
  @media (max-width: 750px) {
    height: 120px;
  }
}
.main-content {
  padding: 0 24px;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: -1;
  flex: 1;
  overflow: hidden;
}
.main-bg {
  position: absolute;
  left: 50%;
  top: 0;
  width: 100vw;
  max-width: 700px;
  transform: translateX(-50%);
  z-index: 1;
}
.main-bg-img {
  position: absolute;
  top: -5%;
  width: 100%;
  height: 105%;
}
.main-triangle {
  position: absolute;
  right: 0;
  top: 0;
  width: 80px;
  @media (max-width: 750px) {
    width: 120px;
  }
}
.main-inner {
  position: relative;
  z-index: 2;
  margin: 0 auto;
  padding: 80px 100px 32px 100px;
  box-sizing: border-box;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 1920px;
}
.main-title {
  color: #1556a2;
  font-size: 60px;
  font-weight: 900;
  line-height: 1.3;
  margin-bottom: 100px;
  @media (max-width: 750px) {
    font-size: 80px;
  }
}
.main-section {
  color: #222;
  font-size: 32px;
  line-height: 1.7;
  margin-bottom: 32px;
  word-break: break-all;
  text-align: left;
  padding: 0 32px;
  @media (max-width: 750px) {
    font-size: 44px;
    margin-bottom: 48px;
    line-height: 1.7;
    padding: 0 40px;
  }
}
.main-section a {
  color: #1556a2;
  word-break: break-all;
}
@media (max-width: 750px) {
  .main-inner {
    padding: 80px 100px 32px 100px;
  }
  .main-bg-img {
    border-radius: 32px;
  }
}
</style>
