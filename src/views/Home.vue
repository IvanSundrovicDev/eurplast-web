<template>
  <div class="page">
    <PageImage :title="$t('title.home')" :img="`naslovna.jpg`"/>
    <div class="content">
      <div class="about-main grid grid-rows-1 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2">
        <div class="col-span-1 text-center center-vertical"  v-in-viewport.once='{ margin: "-150px 0px" }'>
          <h1 class="home-text">{{$t('home.about-text')}}</h1>
          <button class="home-button"><router-link to="/about">{{$t('home.button')}}</router-link></button>
        </div>
        <div class="col-span-1 about-img">
          <img src="/home-about.jpg">
        </div>
      </div>
    </div>
    <div class="machining-main">
      <div class="background-fade">
        <div class="text-center center-vertical white padding-20" v-in-viewport.once='{ margin: "-150px 0px" }'>
          <h1 class="home-text">{{$t('home.machining-text')}}</h1>
          <button class="home-button white"><router-link to="/machining">{{$t('home.button')}}</router-link></button>
        </div>
      </div>
    </div>
    <div class="prod-content">
      <div class="about-main grid grid-rows-1 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2">
        <div class="col-span-1 about-img pad-40">
          <img src="/prod.jpg">
        </div>
        <div class="col-span-1 text-center center-vertical pad-40" v-in-viewport.once='{ margin: "-150px 0px" }'>
          <h1 class="home-text">{{$t('home.products')}}</h1>
          <button class="home-button custom-button"><router-link to="/catalog">{{$t('home.button')}}</router-link></button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .center-vertical{
    margin: auto;
    opacity: 0;
    transition: opacity 2s;
  }
  .center-vertical.in-viewport{
    opacity: 1;
  }
  .home-text{
    font-size: 30px;
  }
  .about-img img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .home-button{
    font-size: 25px;
    color: black;
    padding:8px 12px;
    margin:30px 0 0;
    border:2px solid #0093dd;
    background:0;color:#5a5a6e;
    cursor:pointer;
    transition:all .3s
  }
  .home-button:hover{
    background: #0093dd;
    color:#fff
  }
  .machining-main{
    height: 580px;
    background-size: cover;
    background-image: url('/home-machining.jpg');
  }
  .background-fade{
    display: flex;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .padding-20{
    padding: 0 20px;
  }
  .white{
    color: white;
  }
  .prod-content{
    background-color: #0193de;
    padding: 30px;
    color: white;
  }
  .pad-40{
    padding: 40px;
  }
  .custom-button{
    color: white;
    border-color: white;
  }
  .custom-button:hover{
    background-color: black;
    border-color: black;
  }
  @media only screen and (max-width: 1023px) {
    .about-img{
      display: none;
    }
    .about-main{
      height: 340px;
    }
    .machining-main{
      height: 500px;
    }
  }
  @media only screen and (max-width: 675px) {
    .home-text{
      font-size: 24px;
    }
    .home-button{
      font-size: 20px;
    }
  }
  @media only screen and (max-width: 500px) {
    .home-text{
      font-size: 20px;
    }
    .home-button{
      font-size: 17px;
    }
  }
</style>

<script>
import PageImage from '@/components/PageImage.vue'

export default {
  name: 'Home',
  components: {
    PageImage
  }
}
</script>
