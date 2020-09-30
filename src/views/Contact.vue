<template>
  <div class="page">
    <PageImage :title="$t('title.contact')" :img="`kontakt.jpg`"/>
    <div class="content">
      <div class="page-title">
        <h1>{{ $t('title.contact') }}</h1>
        <div class="border-short"></div>
      </div>
      <div class="message" v-show="message">
        <p>{{ $t('success') }}</p>
      </div>
      <div class="errors" v-show="errors">
        <p v-if="errors.name">{{ $t('errors.name') }}</p>
        <p v-if="errors.email">{{ $t('errors.email') }}</p>
        <p v-if="errors.message">{{ $t('errors.mess') }}</p>
      </div>
      <div class="page-content" v-in-viewport.once='{ margin: "-150px 0px" }'>
        <div class="form">
          <h2>{{ $t('contact.title') }}</h2>
          <p :type="$t('contact.name')"><input type="text" v-model="data.name" :placeholder="$t('contact.name_s')"/></p>
          <p :type="$t('contact.email')"><input type="text" v-model="data.email" :placeholder="$t('contact.email_s')"/></p>
          <p :type="$t('contact.text')"><textarea type="text" v-model="data.message" :placeholder="$t('contact.text_s')"/></p>
          <div class="form-bottom">
            <vue-recaptcha class="captcha inline-block" sitekey="6LcO0sEZAAAAAMdbW9obT5Z_XT9-w7IYZTv7CNu2" @verify="onVerify"></vue-recaptcha>
            <button v-on:click="sendRequest" :disabled="data.robot">{{ $t('contact.button') }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .message{
    margin: 20px;
    background: #5cd65c;
    border-radius: 10px;
  }
  .message p{
    padding: 20px;
    font-size: 18px;
  }
  .errors{
    margin: 20px;
    padding: 20px 20px 14px 20px;
    background:  #ff3333;
    border-radius: 10px;
  }
  .errors p{
    margin-bottom: 6px;
    font-size: 18px;
  }
  .form{
    max-width: 1000px;
    background:#e6e6e6;
    border-radius:8px;
    padding: 30px 30px 30px 30px;
    box-shadow:0 0 40px -10px #000;
    background-color: #f1f1f1;
    position:relative
  }
  .form h2{
    margin:10px 0;
    font-size: 24px;
    display: inline;
    padding-bottom:10px;
    color: black;
    border-bottom:3px solid #0093dd
  }
  .form input, textarea{
    width:100%;
    padding:10px;
    box-sizing:border-box;
    background:none;
    outline:none;
    resize:none;
    border:0;
    transition:all .3s;
    border-bottom:2px solid #0093dd
  }
  .form input:focus{
    border-bottom:2px solid #0093dd
  }
  .form p:before{
    content:attr(type);
    display:block;
    margin:28px 0 0;
    font-size:18px;
    color: black
  }
  .form button{
    float:right;
    font-size: 20px;
    color: black;
    padding:8px 12px;
    margin:25px 0 0;
    border:2px solid #0093dd;
    background:0;color:#5a5a6e;
    cursor:pointer;
    transition:all .3s
  }
  .form button:hover{
    background: #0093dd;
    color:#fff
  }
  .form button:disabled, .form button[disabled]{
    background-color: grey;
    color: white;
    border-color: grey;
    cursor: default;
  }
  .form span{
    margin:0 5px 0 15px
  }
  .form-bottom{
    margin-top: 20px;
  }
  @media only screen and (max-width: 567px) {
    .form button{
      float:none;
    }
    .captcha{
      transform:scale(0.8);
      -webkit-transform:scale(0.8);
      transform-origin:0 0;
      -webkit-transform-origin:0 0;
    }
  }
</style>

<script>
import PageImage from '@/components/PageImage.vue'
import VueRecaptcha from 'vue-recaptcha';
import axios from 'axios';

export default {
  components: {
    PageImage,
    VueRecaptcha
  },
  data(){
    return{
      data:{
        name:'',
        email:'',
        message:'',
        robot: false
      },
      message:'',
      errors:''
    }
  },
  methods:{
    onVerify(response) {
      if (response) this.data.robot = true;
    },
    sendRequest(){
      if (this.data.robot) {
        axios({
          method: 'post',
          url: 'https://dev.europlast.hr/api/contact_form',
          data: this.data
        }).then((res) => {
          this.message = res.data.message
          this.errors = ''
        }).catch((err) => {
          this.errors = err.response.data.errors
          this.message = ''
        })
      }
    }
  }
}
</script>
