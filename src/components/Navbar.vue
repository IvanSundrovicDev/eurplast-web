<template>
  <div class="inline-block w-full fixed nav">
    <div class="info">
      <div class="info-child p-4">
        <phone-icon size="1.7x" class="inline-block"></phone-icon>
        <p class="inline-block ml-1">+385 31 630 881</p>
      </div>
      <div class="info-child p-4">
        <map-pin-icon size="1.7x" class="inline-block"></map-pin-icon>
        <p class="inline-block ml-1">VUKOVARSKA BB(BIVŠI POGON "BOROVO"), 31540 DONJI MIHOLJAC</p>
      </div>
      <div class="info-child p-4">
        <mail-icon size="1.7x" class="inline-block"></mail-icon>
        <p class="inline-block ml-1">INFO@EUROPLAST-CROATIA.COM</p>
      </div>
      <div class="flags">
        <div v-on:click="switchLocale('de')">
          <flag iso="de"/>
        </div>
        <div v-on:click="switchLocale('en')">
          <flag iso="gb"/>
        </div>
        <div v-on:click="switchLocale('hr')">
          <flag iso="hr"/>
        </div>
      </div>
    </div>
    <div class="flex navbar p-4">
      <div class="logo">
        <img src="../assets/logo.png">
      </div>
      <div class="ml-auto list">
        <ul class="text-xl">
          <li class="inline-block custom-padding"><router-link to="/">{{ $t('title.home') }}</router-link ></li>
          <li class="inline-block custom-padding"><router-link to="/about">{{ $t('title.about') }}</router-link ></li>
          <li class="inline-block custom-padding"><router-link to="/machining">{{ $t('title.machining') }}</router-link ></li>
          <li class="inline-block custom-padding"><router-link to="/catalog">{{ $t('title.catalog') }}</router-link ></li>
          <li class="inline-block custom-padding"><router-link to="/contact">{{ $t('title.contact') }}</router-link ></li>
        </ul>
      </div>
      <div class="menu" v-bind:class="{ active: menu_open }" v-on:click="activateMenu">
        <menu-icon size="1.7x" class="inline-block menu-icon"></menu-icon>
      </div>
    </div>
    <div v-show="menu_open" class="menu-open">
      <ul class="text-m menu-border">
        <li v-on:click="activateMenu" class="p-1"><router-link to="/">{{ $t('title.home') }}</router-link ></li>
        <li v-on:click="activateMenu" class="p-1"><router-link to="/about">{{ $t('title.about') }}</router-link ></li>
        <li v-on:click="activateMenu" class="p-1"><router-link to="/machining">{{ $t('title.machining') }}</router-link ></li>
        <li v-on:click="activateMenu" class="p-1"><router-link to="/catalog">{{ $t('title.catalog') }}</router-link ></li>
        <li v-on:click="activateMenu" class="p-1"><router-link to="/contact">{{ $t('title.contact') }}</router-link ></li>
      </ul>
      <div class="flags-menu">
        <div v-on:click="switchLocale('hr')">
          <flag iso="hr"/>
        </div>
        <div v-on:click="switchLocale('en')">
          <flag iso="gb"/>
        </div>
        <div v-on:click="switchLocale('de')">
          <flag iso="de"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .nav{
    z-index: 100;
  }
  a.router-link-exact-active {
    color: #0093dd;
  }
  .info-child{
    display: inline-block;
  }
  .flags, .flags div{
    display: inline;
    float: right;
  }
  .flags div span:hover{
    cursor: pointer;
  }
  .flag-icon{
    height: 32px !important;
    width: 32px !important;
    margin: 10px 5px;
  }
  .logo img{
    height: 70px;
  }
  .navbar{
    font-family: 'Roboto', sans-serif;
    font-weight: 700 !important;
    text-transform: uppercase;
    color: white;
    background: rgba(0, 0, 0, 0.75)
  }
  .info{
    font-family: 'Anton', sans-serif;
    font-size: 12px;
    background: black;
    color: white;
  }
  .custom-padding{
    padding: 1.0rem;
  }
  .menu{
    display: none;
  }
  .menu-icon:hover{
    cursor: pointer;
    color: #0093dd;
  }
  .active{
    color: #0093dd;
  }
  .menu-open{
    display: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    color: white;
    position: fixed;
    right: 0;
    margin-left: auto;
    background: black;
    text-align: center;
    padding: 20px;
  }
  .menu-border{
    border-bottom: solid 2px #0093dd;
  }
  .flags-menu{
    display: none;
  }
  @media only screen and (max-width: 1250px) {
    .logo img{
      height: 50px;
    }
    .text-xl{
      font-size: 1.0rem !important;
    }
    .custom-padding{
      padding: 0.6rem !important;
    }
  }
  @media only screen and (max-width: 1030px) {
    .p-4 {
      font-size: 11px !important;
    }
    .flag-icon{
      height: 32px !important;
      width: 32px !important;
      margin: 9px;
    }
  }
  @media only screen and (max-width: 975px) {
    .logo img{
      height: 55px;
    }
    .info{
      padding: 10px 0;
    }
    .flags{
      display: none;
    }
    .menu{
      display: inline-block;
      margin-left: auto;
      font-size: 20px;
      padding: 0.7rem;
    }
    .menu-open{
      display: block;
    }
    .flags-menu{
      display: block;
    }
    .flags-menu div{
      display: inline-block;
      padding-top: 20px;
    }
    .flags-menu div span:hover{
      cursor: pointer;
    }
    .list{
      display: none;
    }
  }
  @media only screen and (max-width: 940px) {
    .info-child {
      display: block;
      text-align: center;
      padding: 0.2rem !important;
    }
  }
  @media only screen and (max-width: 450px) {
    .p-4{
      font-size: 10px !important;
    }
  }
</style>

<script>
import { PhoneIcon, MapPinIcon, MailIcon, MenuIcon } from 'vue-feather-icons'

export default {
  components: {
    PhoneIcon,
    MapPinIcon,
    MailIcon,
    MenuIcon
  },
  data(){
    return{
      menu_open:false,
    }
  },
  methods:{
    activateMenu(){
      this.menu_open = !this.menu_open
    },
    switchLocale(locale){
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale
      }
    }
  }
}
</script>
