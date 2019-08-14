<template>
  <div id="app">
    <section class="app-section app-section--intro">
      <div class="section-content">
        <div class="content-header"> 
          <h2 class="section-title">Сопротивление бесполезно</h2>
          <div class="section-description">Истории людей, которые заявили о насилии со стороны милиции</div>
        </div>
      </div>
      <readmore-indicator title="Читать далее"/>
    </section>
  </div>
</template>

<script>
import ReadmoreIndicator from './components/ReadMoreIndicator.vue'

export default {
  name: 'app',
  components: {
    ReadmoreIndicator,
  }
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
}
</style>
