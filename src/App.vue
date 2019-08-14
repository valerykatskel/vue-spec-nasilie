<template>
  <div id="app">
    <section class="app-section app-section--intro">
      <div class="section-content">
        <div class="content-header"> 
          <h2 class="section-title">Сопротивление бесполезно</h2>
          <div class="section-description">Истории людей, которые заявили о насилии со стороны милиции</div>
        </div>
      </div>
      <div class="readmore">
        <span class="readmore-text">Читать далее</span>
        <div class="readmore-arrow"></div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: Helvetica, sans-serif;
}
.section-title {
  margin: 0;
  font-size: 50px;
  line-height: 52px;
  color: #fff;
  font-weight: bold;
}
.section-content {
  color: #fff;
  .content-header {
    text-align: center;
    .section-description {
      font-size: 19px;
      line-height: 30px;
    }
  }
}
.app-section {
  position: relative;
}
.app-section--intro {
  display: flex;
  height: 100vh;
  background-color: #000;
  background-image: url(./assets/images/section-intro-bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center;
  justify-content: center;
  .section-title {
    font-size: 70px;
    line-height: 82px;
  }
  .readmore {
    position: absolute;
    text-align: center;
    bottom: 0;
    left: 50%;
    margin-left: -80px;
    width: 160px;
    height: 50px;
    background-position-y: bottom;

    .readmore-text {
      font-size: 17px;
      line-height: 25px;
      color: #fff;
      display: inline-block;
      width: 100%;
    }
    .readmore-arrow {
      left: 50%;
      width: 30px;
      height: 15px;
      bottom: 0;
      background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAOCAMAAAAPOFwLAAAAaVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8G612AAAAInRSTlMABPzyfx8OWTreo0z26uXY0sXEwbmkm4NvNBIBpnhkLyMi+Kud8wAAAJJJREFUGNN1j1kSgyAQREdAFnFLNK5Z+/6HDKSsGCK8j6mu6o95TeIiKYEsBE3M6HirDZuILGciO5aZYKX1Ya5xyv/b/Ixq3mILrsJWcTSvr0MPeMPdCeiWn0cDYPTuBFxDnRvgDDcnYFwpRJXwht4J7B6ZWcEZKu6upQjPBh/qB0VZOjjanBJkBdBLSrKOQzjoDRZkCSBsYkiwAAAAAElFTkSuQmCC');
      background-repeat: no-repeat;
      animation: moveUpDown 1300ms infinite linear;
      display: inline-block;
    }
  }
  @keyframes moveUpDown {
    0% {
      transform: translate3d(0, -2px, 0)
    }

    70% {
      transform: translate3d(0, 6px, 0)
    }

    100% {
      transform: translate3d(0, -2px, 0)
    }
  }
}
</style>
