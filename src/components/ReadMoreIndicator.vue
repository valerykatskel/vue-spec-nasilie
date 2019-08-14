<template>
  <div class="readmore">
    <span class="readmore-text">{{title}}</span>
    <div class="readmore-arrow"></div>
  </div>
</template>

<script>

export default {
  name: 'ReadmoreIndicator',
  props: {
    title: String
  },
}
</script>

<style lang="scss">
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
</style>
