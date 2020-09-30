<template>
  <div class="gallery">
    <CoolLightBox
      :items="images"
      :index="index"
      @close="index = null">
    </CoolLightBox>
    <carousel :per-page="2" :mouse-drag="true" :autoplay="true" :navigationEnabled="true">
      <slide v-for="(item, index) in images" :key="index">
        <img class="gallery-img" @click="logIndex(index)" :src="item.src">
      </slide>
    </carousel>
  </div>
</template>

<style>
  .gallery{
    margin-top: 40px;
  }
  .gallery-img{
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .VueCarousel-slide{
    height: 550px;
  }
  @media only screen and (max-width: 1300px) {
    .VueCarousel-slide{
      height: 400px;
    }
  }
  @media only screen and (max-width: 1000px) {
    .VueCarousel-slide{
      height: 300px;
    }
    .VueCarousel-navigation{
      display: none;
    }
  }
  @media only screen and (max-width: 720px) {
    .VueCarousel-slide{
      height: 200px;
    }
  }
  @media only screen and (max-width: 450px) {
    .VueCarousel-slide{
      height: 150px;
    }
  }
</style>

<script>
  import CoolLightBox from 'vue-cool-lightbox'
  import { Carousel, Slide } from 'vue-carousel';
  import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

  export default {
    components: {
      Carousel,
      CoolLightBox,
      Slide
    },
    props:{
      images: Array
    },
    data(){
      return{
        index:null
      }
    },
    methods:{
      logIndex(index){
        this.index = index
      }
    }
  }
</script>
