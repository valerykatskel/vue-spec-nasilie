<template>
  <section :class="this.addUniqClass" :id="this.id">
    
    <a :name="this.id"/>
    
    <div class="slide-background" :style="this.addBackgroundInline"></div>
    
    <header v-if="this.showSlideHeader" class="slide-header"> 
      <h2 class="slide-header--title">{{this.title}}</h2>
      <div v-if="this.showHeaderDescription" class="slide-header--description">{{this.description}}</div>
    </header>

    <div class="container slide-content-history" :id='this.getUniqIdForContainer'>
      <div v-if="this.showHtml" class="container-i-text">
        <div v-html="this.html"></div>
      </div>    
      <figure v-if="this.showContentImage">
        <img :src="this.contentImage.url" :alt="this.contentImage.caption">
        <figcaption>{{this.contentImage.caption}}</figcaption>
      </figure>
      
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
      return `slideContent${this.getIdWithUppercasedFirstLetter}`
    },

    getIdWithUppercasedFirstLetter () {
      return this.id.charAt(0).toUpperCase() + this.id.slice(1);
    },

    showFooter () {
      return this.footer !== undefined
    },

    showHtml () {
      return this.html !== undefined
    },

    showHeaderDescription () {
      return this.description !== undefined
    },

    addBackgroundInline () {
      return `background-image: url(${this.background})`
    },

    showContentImage () {
      const res = this.contentImage !== undefined? true : false 
      return res
    }
  }
}
</script>

<style lang="scss">

</style>