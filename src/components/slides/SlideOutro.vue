<template>
  <section class="app-section app-section--outro">
    <div class="section-content" id="sectionContentOutro">
      <div class="content-background">
        <img 
          :src="background" 
          alt="Что делать, если милиция применяет силу?"
        />
      </div>
      
      <div class="content-main">
        <h3>Что делать, если милиция применяет силу?</h3>
        <p>Можно ли дать отпор милиции? Задираться и провоцировать милицию однозначно не стоит. Если возник конфликт, постарайтесь спокойно, словами, донести, что вы не нарушаете закон и применять к вам силу неоправданно. Если силу применяет сотрудник в штатском, попытайтесь узнать, на каком основании, попросите показать удостоверение. Нужно понимать: на практике суды чаще доверяют сотрудникам правоохранительных органов, чем простым гражданам, особенно если гражданин был в состоянии опьянения (это всегда отягощает вину!). За физический отпор вас могут привлечь к ответственности уже за сопротивление — до пяти лет ограничения или лишения свободы (ч. 2 ст. 363 УК). </p>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'SlideOutro',
  props: {
    background: String,
    controller: Object,
  },
  mounted () {
    // // инициализируем контролллер ScrollMagic
    // let controllerOutro = new ScrollMagic.Controller();

    // // создаем новый таймлайн для анимаций (новую анимацию)
    // let tlOutro = new TimelineLite();
    // debugger
    // tlOutro
    //   //.to('.content-header', 3, {y: -850, opacity: 0.0}) 
    //   //.add("end", 3)                                                // добавляем контрольную точку на 3 секунды
    //   .to('.content-background img', 3, {opacity: 0.0,}, 0)         // анимируем фон титульного слайда   
    
    // // создадим сцену
    // new ScrollMagic.Scene({
    //   duration: this.sceneDuration,                          // задаем длительность сцены в процентах, 100% это одна высота вьюпорта (экрана)
    //   offset: "0",                                         // смещение срабатывания триггера
    //   triggerElement: "#app",                 // селектор элемента-триггера
    //   triggerHook: "0",                                       // каким образом будет срабатывать триггер
    // })
    //   //.setPin("#sectionContentIntro")                                               
    //   .setTween(tlOutro)
    //   .addIndicators({
    //     name: 'lastSlide'
    //   })
    //   .addTo(controllerOutro);
  },
}
</script>

<style lang="scss">
  
.app-section--intro__spacer-after-header {
  height: 55vh;
}

.app-section--intro {
  width: 100%;
  height: 100vh;

  .content-background {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }

  .content-main {
    padding: 50px;
    background: rgba(255, 255, 255, 0.05);
  }

  .section-content .content-header {
    padding-top: 40vh;
  }
}
</style>