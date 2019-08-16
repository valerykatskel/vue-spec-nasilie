<template>
  <div 
    :class="addRevertedClass"
    class="readmore"
    @click="clickMoveTop"
  >
   
    <template v-if="!showReadMoreBlock">
      <span class="readmore-text">{{getTitle}}</span>
      <div class="readmore-arrow"></div>
    </template>
  
  
  
    <template v-if="showReadMoreBlock">
      <div class="showtop-arrow"></div>
      <span class="readmore-text">{{getTitle}}</span>
    </template>
    
  </div>
</template>

<script>

export default {
  name: 'ReadMoreIndicator',

  props: {
    title: String,
    topText: String,
    revert: Boolean,
    isBottomOfPage: Boolean,
  },

  methods: {
    clickMoveTop () {
      if (!this.isBottomOfPage || !this.revert) return
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  },

  computed: {
    getTitle () {
      return !this.revert? this.title : this.getTopText
    },

    getTopText () {
      return this.isBottomOfPage? this.topText : this.title
    },

    addRevertedClass () {
      return this.isBottomOfPage && this.revert? 'reverted' : ''
    },

    showReadMoreBlock () {
      return this.isBottomOfPage && this.revert
    }
  }
}
</script>

<style lang="scss">
.readmore {
  position: fixed;
  text-align: center;
  bottom: 0;
  left: 50%;
  margin-left: -80px;
  width: 160px;
  height: 50px;
  background-position-y: bottom;
  z-index: 1;
  transition: animation 400ms;
  animation: spinBack 400ms linear;
  will-change: animation;

  &.reverted {
    animation: spin 400ms linear;
    cursor: pointer;
  }

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
    animation: pointUpToDown 1300ms infinite linear;
    display: inline-block;
  }
  
  .showtop-arrow {
    left: 50%;
    width: 30px;
    height: 15px;
    bottom: 0;
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAOCAMAAAAPOFwLAAAAaVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8G612AAAAInRSTlMA/PJ/IA4EWTrexaP26uXY0sGkm4NvTzEdEga5uKZ4ZEc2hLB9kgAAAJBJREFUGNN1j1kOhCAQBRtQAXfH3dnf/Q85HT5kQK0PElKBrqaArB/omvQBFNuVXVow3Xpu5xqOJjmzHwlIrfmszNG+BZDzuyQHSh3bARAqc/VKAK9Abk/A7l8aC/SZt2sHFOnfgjfgvt+TBjKaxoXtQo5v5ZpCuLCeiZlK1xTDhXIiGoVvCjFWjKS4KcIXqh9PMwkM2FZ22AAAAABJRU5ErkJggg==');
    background-repeat: no-repeat;
    animation: pointDownToUp 1300ms infinite linear;
    display: inline-block;
  }
}
@keyframes pointUpToDown {
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

@keyframes pointDownToUp {
  0% {
    transform: translate3d(0, -2px, 0)
  }

  30% {
    transform: translate3d(0, 6px, 0)
  }

  100% {
    transform: translate3d(0, -2px, 0)
  }
}

@keyframes spin { 
  from {
    transform:rotate(0deg) scale(1);
  }
  50% {
    transform:rotate(180deg) scale(0.3);
  }
  to { 
    transform:rotate(360deg) scale(1);
  } 
}

@keyframes spinBack { 
  from {
    transform:rotate(0deg) scale(1);
  }
  50% {
    transform:rotate(-180deg) scale(0.3);
  }
  to { 
    transform:rotate(-360deg) scale(1);
  } 
}



</style>
