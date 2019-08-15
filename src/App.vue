<template>
  <div id="app">
    
    <read-more-indicator title="Читать далее"/>
    
    <slide-intro 
      title="Сопротивление бесполезно"
      description="Истории людей, которые заявили о насилии со стороны милиции"
      :background="require('./assets/images/slide-intro/background.jpg')"
      animationDuration="180"
    />

    <slide-outro 
      :background="require('./assets/images/slide-outro/background.jpg')"
      animationDuration="170"
    />

  </div>
</template>

<script>
import ReadMoreIndicator from './components/ReadMoreIndicator.vue'
import SlideIntro from './components/slides/SlideIntro.vue'
import SlideOutro from './components/slides/SlideOutro.vue'

export default {
  name: 'app',
  components: {
    ReadMoreIndicator,
    SlideIntro,
    SlideOutro,
  },
  mounted () {
    // инициализируем контролллер ScrollMagic
    // var controller = new ScrollMagic.Controller();
    // // создаем новый таймлайн для анимаций (новую анимацию)
    // var tl = new TimelineLite();
    // tl
    //   //.to('.content-header', 3, {y: -850, opacity: 0.0})                          // анимируем заголовок титульного слайда
    //   //.add("end", 3)                                                // добавляем контрольную точку на 3 секунды
    //   .to('.content-background img', 3, {opacity: 0.0,})         // анимируем фон титульного слайда   
    
    
    // // создадим сцену для анимации первого слайда
    // new ScrollMagic.Scene({
    //   duration: "270%",                                             // задаем длительность сцены в процентах, 100% это одна высота вьюпорта (экрана)
    //   offset: "200",                                                    // смещение срабатывания триггера
    //   triggerElement: "#sectionContentIntro",                                       // селектор элемента-триггера
    //   triggerHook: "0",                                       // каким образом будет срабатывать триггер
    // })
    //   //.setPin("#sectionContentIntro")                                               
    //   .setTween(tl)
    //   .addIndicators({
    //     name: 'firstSlide'
    //   }) // add indicators (requires plugin)
    //   .addTo(controller);
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: Helvetica, sans-serif;
  background: black;
}

.spacerBetweenSlides {
  height: 200vh;
}

.spacer50 {
  height: 50vh;
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
  opacity: 0;
  width: 100%;
  height: 100vh;
}

.section-content {
  min-width: 290px;
  margin: 0 auto;
}

.content-main {
  p {
    font-size: 17px;
    line-height: 25px;
    margin-top: 25px;
    margin-bottom: 0;
    &:first-child {
      margin-top: 0;
    }
  }
  width: 600px;
  margin: 0 auto;
}

.app-section--intro {
  .section-title {
    font-size: 35px;
    line-height: 40px;
  }
}
</style>
