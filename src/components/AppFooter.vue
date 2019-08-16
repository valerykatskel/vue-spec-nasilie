<template>
  <footer class="app-footer">
    <div class="container">
      <div class="container-i-text">
        <div class="footer-copyright">
          <p>© ООО «ТУТ БАЙ МЕДИА», 2000 — 2019</p>
        </div>
        <div class="footer-social">
          <social-sharing 
            url="https://tut.by/"
            title="Сопротивление бесполезно"
            description="Истории людей, которые заявили о насилии со стороны милиции"
            quote="Истории белорусов, которые заявили о насилии со стороны милиции и о которых рассказывает в своем фотопроекте Максим Сарычев, произошли более года назад"
            hashtags="tutby,tut.by,Спецпроект TUT.BY"
            twitter-user="tutby"
            inline-template>
            <div>
              <network network="facebook"></network>
              <network network="vk"></network>
              <network network="twitter"></network>
              <network network="odnoklassniki"></network>
            </div>
          </social-sharing>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'AppFooter',
}
</script>

<style lang="scss">

</style>