<template>
  <section :class="this.addUniqClass" :id="this.id">
    
    <a :name="this.id"/>
    
    <div class="slide-background">
      <img :src="this.background" :alt="this.addAltForBackground"/>
    </div>
    
    <header v-if="this.showSlideHeader" class="slide-header"> 
      <h2 class="slide-header--title">{{this.title}}</h2>
      <div class="slide-header--description">{{this.description}}</div>
    </header>

    <div class="container" :id='this.getUniqIdForContainer'>
      <div class="container-i-text" v-html="this.html">
        <figure v-if="this.contentImage">
          <img :src="this.contentImage.url" :alt="this.contentImage.caption">
          <figcaption>{{this.contentImage.caption}}</figcaption>
        </figure>
      </div>    
      
      <footer v-if="this.showFooter" class="container-footer">
        <div class="container-i-text" v-html="this.footer"></div>
      </footer>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Slide',
  props: {
    id: String,
    background: String,
    title: String,
    description: String,
    html: String,
    contentImage: Object,
    footer: String,
  },
  mounted () {
    
  },

  methods: {
    
  },

  computed: {
    addUniqClass () {
      return `slide slide--${this.id}`
    },

    addAltForBackground () {
      return this.title !== undefined? this.title : ''
    },

    showSlideHeader () {
      return this.title !== '' || this.description !== ''
    },

    getUniqIdForContainer () {
      return `slideContent${this.id.toUpperCase()}`
    },

    showFooter () {
      return this.footer !== ''
    }
  }
}
</script>

<style lang="scss">

</style>