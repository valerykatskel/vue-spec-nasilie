<template>
  <div id="app">
    
    <!-- header slide -->
    <section class="app-section app-section--intro">
      <div class="section-content" id="sectionContentIntro">
        <div class="content-background">
          <img src="./assets/images/slide-intro/background.jpg" alt="Истории людей, которые заявили о насилии со стороны милиции">
        </div>
        <div class="content-header"> 
          <h2 class="section-title">Сопротивление бесполезно</h2>
          <div class="section-description">Истории людей, которые заявили о насилии со стороны милиции</div>
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
      <read-more-indicator title="Читать далее"/>
    </section>
  </div>
</template>

<script>
import ReadMoreIndicator from './components/ReadMoreIndicator.vue'

export default {
  name: 'app',
  components: {
    ReadMoreIndicator,
  },
  mounted () {
    // инициализируем контролллер ScrollMagic
    var controller = new ScrollMagic.Controller();
    // создаем новый таймлайн для анимаций (новую анимацию)
    var tl = new TimelineLite();
    tl
      //.to('.content-header', 3, {y: -850, opacity: 0.0})                          // анимируем заголовок титульного слайда
      //.add("end", 3)                                                // добавляем контрольную точку на 3 секунды
      .to('.content-background img', 3, {opacity: 0.0,})         // анимируем фон титульного слайда   
    
    
    // создадим сцену для анимации первого слайда
    new ScrollMagic.Scene({
      duration: "270%",                                             // задаем длительность сцены в процентах, 100% это одна высота вьюпорта (экрана)
      offset: "200",                                                    // смещение срабатывания триггера
      triggerElement: "#sectionContentIntro",                                       // селектор элемента-триггера
      triggerHook: "0",                                       // каким образом будет срабатывать триггер
    })
      //.setPin("#sectionContentIntro")                                               
      .setTween(tl)
      .addIndicators({
        name: 'firstSlide'
      }) // add indicators (requires plugin)
      .addTo(controller);
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

.app-section--intro__spacer-after-header {
  height: 55vh;
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

.section-content {
  min-width: 290px;
  margin: 0 auto;
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
