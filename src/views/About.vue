<template>
  <div class="page">
    <PageImage :title="$t('title.about')" :img="`o-nama.jpg`"/>
    <div class="content">
      <div class="page-title">
        <h1>{{ $t('about.company.title') }}</h1>
        <div class="border-short"></div>
      </div>
      <div class="page-content" v-in-viewport.once='{ margin: "-150px 0px" }'>
        <div class="page-img">
          <img src="/o-nama-ulaz.jpg">
        </div>
        <p>{{ $t('about.company.text') }}</p>
        <ul>
          <li v-for="(item, index) in $t('about.company.list')" :key="index">{{item}}</li>
        </ul>
        <p v-for="(item, index) in $t('about.company.main-text')" :key="index">{{item}}</p>
      </div>
      <div class="page-title title-padding-top">
        <h1>{{ $t('about.staff.title') }}</h1>
        <div class="border-short"></div>
      </div>
      <div class="page-content" v-in-viewport.once='{ margin: "-150px 0px" }'>
        <div class="page-img">
          <img src="/o-nama-eud.jpg">
        </div>
        <p>{{ $t('about.staff.text') }}</p>
      </div>
      <div class="page-title title-padding-top">
        <h1>{{ $t('about.waste.title') }}</h1>
        <div class="border-short"></div>
      </div>
      <div class="page-content" v-in-viewport.once='{ margin: "-150px 0px" }'>
        <div class="page-img">
          <img src="/o-nama-otpad.jpg">
        </div>
        <p>{{ $t('about.waste.text') }}</p>
        <p>{{ $t('about.waste.text2') }}</p>
      </div>
      <div class="page-title title-padding-top">
        <h1>{{ $t('about.iso.title') }}</h1>
        <div class="border-short"></div>
      </div>
      <div class="page-content" v-in-viewport.once='{ margin: "-150px 0px" }'>
        <div class="page-img">
          <img src="/o-nama-iso.jpg">
        </div>
        <p class="bold-p">{{ $t('about.iso.bold') }}</p>
        <p v-for="(item, index) in $t('about.iso.text')" :key="index">{{item}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import PageImage from '@/components/PageImage.vue'

export default {
  name: 'Home',
  components: {
    PageImage
  }
}
</script>
