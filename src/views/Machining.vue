<template>
  <div class="page">
    <PageImage :title="$t('title.machining')" :img="`obrada.jpg`"/>
    <div class="content">
      <div class="page-title">
        <h1>{{ $t('title.machining') }}</h1>
        <div class="border-short"></div>
      </div>
      <div class="page-content" v-in-viewport.once='{ margin: "-150px 0px" }'>
        <div class="page-img">
          <img src="/machining.jpg">
        </div>
        <p>{{ $t('machining.text') }} <a class="bold-p" v-if="$t('machining.text')" href="mailto:strojna@europlast-croatia.com">strojna@europlast-croatia.com</a></p>
        <p class="bold-p underline">{{ $t('machining.list-name') }}</p>
        <div class="grid grid-rows-2 grid-cols-1 sm:grid-rows-1 sm:grid-cols-2">
          <div class="col-span-1">
            <div class="machine-list">
              <p class="bold-p">{{ $t('machining.list.item1.name') }}</p>
              <ul>
                <li v-for="(item, index) in $t('machining.list.item1.items')" :key="index">{{item}}</li>
              </ul>
            </div>
            <div class="machine-list">
              <p class="bold-p">{{ $t('machining.list.item2.name') }}</p>
              <ul>
                <li v-for="(item, index) in $t('machining.list.item2.items')" :key="index">{{item}}</li>
              </ul>
            </div>
            <div class="machine-list">
              <p class="bold-p">{{ $t('machining.list.item3.name') }}</p>
              <ul>
                <li v-for="(item, index) in $t('machining.list.item3.items')" :key="index">{{item}}</li>
              </ul>
            </div>
          </div>
          <div class="col-span-1">
            <div class="machine-list">
              <p class="bold-p">{{ $t('machining.list.item4.name') }}</p>
              <ul>
                <li v-for="(item, index) in $t('machining.list.item4.items')" :key="index">{{item}}</li>
              </ul>
            </div>
            <div class="machine-list">
              <p class="bold-p">{{ $t('machining.list.item5.name') }}</p>
              <ul>
                <li v-for="(item, index) in $t('machining.list.item5.items')" :key="index">{{item}}</li>
              </ul>
            </div>
          </div>
        </div>
        <Gallery :images="images" class="machining-gallery"/>
      </div>
    </div>
  </div>
</template>

<style>
  .machine-list{
    display: block;
  }
  @media only screen and (max-width: 639px) {
    .machining-gallery{
      position: relative;
      top: -230px;
      height: 40px;
    }
  }



</style>

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
          src:'/s1.jpg'
        },
        {
          src:'/s2.jpg'
        },
        {
          src:'/s3.jpg'
        },
        {
          src:'/s4.jpg'
        },
        {
          src:'/s5.jpg'
        },
        {
          src:'/s6.jpg'
        },
        {
          src:'/s7.jpg'
        },
        {
          src:'/s8.jpg'
        },
      ]
    }
  }
}
</script>
