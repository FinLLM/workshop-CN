<template>
  <div id="app">
    <router-view />
    <div class="footer padding">
      <div>
        <div class="email-info">
          <p>粤ICP备 2024250148</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="less" scoped>
html {
  -webkit-text-size-adjust: 100%; /* WebKit */
  -ms-text-size-adjust: 100%; /* IE */
  -moz-text-size-adjust: 100%; /* Firefox */
}

body {
  margin: 0;
}
.padding {
  padding: 0 130px;
}
.w {
  min-width: 1715px;
  max-width: 1920px;
  margin: 0 auto;
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
      }
    }
  }
}
</style>
