<template>
  <div>
    <div class="footer">
      <div class="grid grid-rows-2 grid-cols-1 lg:grid-cols-5 lg:grid-rows-1">
        <div class="col-span-1 md:col-span-3 footer-text">
          <div class="logo">
            <img src="../assets/logo.png">
          </div>
          <div class="adresa">
            <p><span>{{ $t('footer.hq') }}:</span> EUGENA KUMIČIĆA 20, 31540 DONJI MIHOLJAC</p>
            <p><span>{{ $t('footer.factory') }}:</span> VUKOVARSKA BB(BIVŠI POGON "BOROVO"), 31540 DONJI MIHOLJAC</p>
          </div>
          <div class="grid grid-rows-2 grid-cols-1 sm:grid-rows-1 sm:grid-cols-2">
            <div class="col-span-1 footer-info">
              <p><span>{{ $t('footer.mb') }}:</span> 0312963301601</p>
              <p><span>OIB:</span> 80622365528</p>
              <br>
              <br>
              <p><span>{{ $t('footer.bank') }}:</span> 2412009-1134000762</p>
            </div>
            <div class="col-span-1 footer-info">
              <p><span>{{ $t('footer.phone') }}:</span> 00 385 31 630 881</p>
              <p class="other-phone-number">00 385 31 630 883</p>
              <p><span>{{ $t('footer.mob') }}:</span> 00385 98 391 785</p>
              <p><span>{{ $t('footer.fax') }}:</span> 00 385 31 630 882</p>
              <p><span>{{ $t('footer.mail') }}:</span> INFO@EUROPLAST-CROATIA.COM</p>
            </div>
          </div>
        </div>
        <div class="col-span-1 lg:col-span-2">
          <div class="map">
            <CustomMap />
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <span>COPYRIGHT @ {{ new Date().getFullYear() }} <a href="mailto:zubcic.hrvoje@gmail.com" rel="nofollow">CrossDev Tech</a>, All rights Reserved</span>
    </div>
  </div>
</template>

<style>
  .footer{
    background: black;
    color: white;
    padding: 50px;
  }
  .footer p, .footer span{
    text-transform: uppercase;
  }
  .footer-text{
    border-right: solid 3px #0093dd;
  }
  .adresa{
    padding: 20px;
  }
  .footer-info{
    padding-left: 20px;
  }
  .other-phone-number{
    margin-left: 72px;
  }
  .map{
    height: 100%;
    width: 100%;
    padding-left: 50px;
  }
  span{
    color: #0093dd;
  }
  .copyright{
    background: black;
    text-align: center;
    padding-bottom: 10px;
  }
  .copyright span{
    color: white
  }
  @media only screen and (max-width: 1024px) {
    .map{
      padding: 20px;
    }
    .footer-text{
      border-right: none;
      font-size: 13px;
    }
    .other-phone-number {
      margin-left: 58px;
    }
  }
  @media only screen and (max-width: 450px) {
    .footer{
      padding: 20px;
    }
  }
</style>

<script>
  import CustomMap from '@/components/Map.vue'
  export default{
    components:{
      CustomMap
    }
  }
</script>
