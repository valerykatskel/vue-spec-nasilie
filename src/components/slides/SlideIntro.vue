<template>
  <section class="app-section app-section--intro">
    <div class="section-content" id="sectionContentIntro">
      <div class="content-background">
        <img 
          :src="background" 
          alt="Истории людей, которые заявили о насилии со стороны милиции"
        />
      </div>
      <div class="content-header"> 
        <h2 class="section-title">{{title}}</h2>
        <div class="section-description">{{description}}</div>
      </div>
      <div class="app-section--intro__spacer-after-header"></div>
      <div class="content-main">
        <p>«Мы — защита граждан, а не карающий меч революции, как это раньше об органах ВЧК-НКВД говорили,» — слова нового министра внутренних дел Юрия Караева. Истории белорусов, которые заявили о насилии со стороны милиции и о которых рассказывает в своем фотопроекте Максим Сарычев, произошли более года назад. Во всех случаях герои пытаются доказать, что в отношении них были превышены служебные полномочия. Пока безрезультатно.</p>
        <p>Светлана встречала Новый год с друзьями и даже не предполагала, что ее задержит ОМОН. Домой она вернулась с сотрясением мозга. Сергей утверждает, как правоохранители вывезли его в лес, требуя, чтобы он выдал информацию о своих друзьях. Для Бориса ссора с женой закончилась вызовом милиции и применением газового баллончика. Татьяну заставили сдать отпечатки пальцев, удерживали силой, чтобы сфотографировать для базы правонарушителей.</p>
        <p>Мы не можем утверждать, что все происходило именно так, как описывают герои (ни один из случаев не дошел до суда), поэтому не приводим их прямую речь полностью. Мы считаем важным привлечь внимание к теме отношения отдельных сотрудников милиции к гражданам, потому что тоже считаем, что милиция — это защита, а не «карающий меч революции».</p>
        <p>Может ли милиция применить силу, может ли гражданин дать отпор и как отстоять свои права в таком конфликте?</p>
        <p>Пытки в Беларуси, как и во всех цивилизованных странах, запрещены, еще в 1987 году мы присоединились к Конвенции против пыток. Что такое пытка? Это любое действие должностного лица, которым человеку причиняется боль, физическое или психическое расстройство, чтобы заставить его или другого человека что-то сообщить, в чем-то признаться или чтобы его наказать.</p>
        <p>Может ли милиция применять силу? Может, если без силы остановить или задержать человека невозможно. Милиционер обязан предупредить нарушителя, за исключением случаев, когда промедление создает угрозу для жизни, может повлечь тяжкие последствия. Милиционер должен стремиться причинить наименьший вред и оказать первую помощь.</p>
      </div>
      <div class="spacerBetweenSlides"></div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'SlideIntro',
  props: {
    title: String,
    description: String,
    background: String,
    animationDuration: String,
  },
  mounted () {
    debugger
    // инициализируем контролллер ScrollMagic
    let controller = new ScrollMagic.Controller();
    // создаем новый таймлайн для анимаций (новую анимацию)
    let tl = new TimelineLite();
    
    tl
      //.to('.content-header', 3, {y: -850, opacity: 0.0}) 
      //.add("end", 3)                                                // добавляем контрольную точку на 3 секунды
      .to('.content-background img', 3, {opacity: 0.0,}, 0)         // анимируем фон титульного слайда   
    
    // создадим сцену
    new ScrollMagic.Scene({
      duration: this.sceneDuration,                          // задаем длительность сцены в процентах, 100% это одна высота вьюпорта (экрана)
      offset: "200",                                         // смещение срабатывания триггера
      triggerElement: "#app",                 // селектор элемента-триггера
      triggerHook: "0",                                       // каким образом будет срабатывать триггер
    })
      //.setPin("#sectionContentIntro")                                               
      .setTween(tl)
      .addIndicators({
        name: 'firstSlide'
      }) // add indicators (requires plugin)
      .addTo(controller);
  },
  computed: {
    sceneDuration () {
      const duration = this.animationDuration !== ''? this.animationDuration : 100
      return `${this.animationDuration}%`
    }
  }
}
</script>

<style lang="scss">
  
.app-section--intro__spacer-after-header {
  height: 55vh;
}

.app-section {
  &.app-section--intro {
    opacity: 1;

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
}
</style>