<template>
  <div class="image" :style="{backgroundImage: `url('/${img}')`}">
    <h1 class="title">{{title}}</h1>
  </div>
</template>

<style media="screen">
  .image{
    background-size: cover;
    height: 775px;
    background-position: top;
  }
  .title{
    padding-top: 300px;
    font-family: 'Kanit', sans-serif;
    font-size: 90px;
    color: white;
    margin-left: 10%;
    text-shadow: black 4px 5px
  }
  @media only screen and (max-width: 1050px) {
    .title{
      font-size: 60px
    }
  }
  @media only screen and (max-width: 725px) {
    .title{
      font-size: 50px;
      padding-top: 250px;
    }
    .image{
      height: 581px;
    }
  }
  @media only screen and (max-width: 500px) {
    .title{
      font-size: 40px;
      padding-top: 250px;
    }
    .image{
      height: 485px;
    }
  }
  @media only screen and (max-width: 380px) {
    .title{
      font-size: 35px;
    }
  }
</style>

<script>
export default {
  props:{
    title:String,
    img:String
  },
}
</script>
