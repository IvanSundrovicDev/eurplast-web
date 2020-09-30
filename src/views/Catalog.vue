<template>
  <div class="page">
    <PageImage :title="$t('title.catalog')" :img="`program.jpg`"/>
    <div class="content">
      <div class="page-title">
        <h1>{{ $t('products.title') }}</h1>
        <div class="border-short"></div>
      </div>
      <div class="page-content" v-in-viewport.once='{ margin: "-150px 0px" }'>
        <p>{{ $t('products.list-title1') }}</p>
        <ul>
          <li v-for="(item, index) in $t('products.list1')" :key="index + 'j'">{{item}}</li>
        </ul>
        <p>{{ $t('products.list-title2') }}</p>
        <ul>
          <li v-for="(item, index) in $t('products.list2')" :key="index + 'f'">{{item}}</li>
        </ul>
        <p v-for="(item, index) in $t('products.text')" :key="index + 'l'">{{item}}</p>
        <p class="bold-p">{{ $t('products.bold') }}</p>
        <p v-for="(item, index) in $t('products.more-text')" :key="index + 'p'">{{item}}</p>
        <Gallery :images="images" />
      </div>
    </div>
  </div>
</template>

<script>
import PageImage from '@/components/PageImage.vue'
import Gallery from '@/components/Gallery.vue'

export default {
  components: {
    PageImage,
    Gallery
  },
  data(){
    return {
      images:[
        {
          src:'/p1.jpg'
        },
        {
          src:'/p2.jpg'
        },
        {
          src:'/p3.jpg'
        },
        {
          src:'/p4.jpg'
        },
        {
          src:'/p5.jpg'
        },
        {
          src:'/p6.jpg'
        },
        {
          src:'/p7.jpg'
        },
        {
          src:'/p8.jpg'
        },
      ]
    }
  }
}
</script>
