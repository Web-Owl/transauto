<script>
  export default {  
  emits:['openModal'], 
  data: function() {
    return {
      isActive : false,
    } 
  },
    methods: {
    showMobileMenu: function() {
        this.isActive = !this.isActive;
        }
    }
}
</script>
<template>
  <div class="device">
      <button id="burger" class="open-main-nav" @click="showMobileMenu" :class="{'is-open': isActive}">
          <span class="burger"></span>
          <span class="burger-text"></span>
      </button>
      <div class="container">
          <nav class="main-nav" id="main-nav" @click="showMobileMenu" :class="{'is-open': isActive}">
              <ul class="nav df">
                  <li>
                      <a href="/arenda/">Аренда спецтехники</a>
                  </li>
                  <li>
                      <a href="/removals/">Вывоз мусора</a>
                  </li>
                  <li>
                      <a href="/services/">Услуги</a>
                  </li>
                  <li>
                      <a href="/about/">О компании</a>
                  </li>
                  <li>
                      <a href="/contacts/">Контакты</a>
                  </li>
              </ul>
          </nav>
      </div>
  </div>
  <div class="mobMenu">
      <div>
          <span></span>
      </div>
  </div>
  <div class="spopup"></div>
  <header class="header">
      <div class="contentData df fww aic">
          <router-link to="/" class="logo"><img src="../assets/img/logo.png" alt="logo"></router-link>
          <ul class="nav df">
              <li>
                  <router-link to="/arenda" class="hidden md:block">Аренда спецтехники</router-link>
              </li>
              <li>
                  <router-link to="/removals" class="hidden md:block">Вывоз мусора</router-link>
              </li>
              <li>
                  <router-link to="/services" class="hidden md:block">Услуги</router-link>
              </li>
              <li>
                  <router-link to="/about" class="hidden md:block">О компании</router-link>
              </li>
              <li>
                  <router-link to="/contacts" class="hidden md:block">Контакты</router-link>
              </li>
          </ul>
          <div class="head_contacts df aic">
              <div class="phones">
                  <a href="tel:79162716060">+7 (916) 271-60-60</a>
              </div>
              <div class="">
                      <p class="my-4 text-center">круглосуточно - без выходных</p>
                  </div>
              <div class="socials df aic">
                  <!-- <a href="https://wa.me/+79175170350" target="_blank" rel="nofollow"><img src="../assets/img/whatsapp.svg" alt=""></a>
                  <a href="tg://resolve?domain=OOOTransavto" target="_blank" rel="nofollow"><img src="../assets/img/telegram.svg" alt=""></a> -->
              </div>
          </div>
                  
          <div class="callback yBtn showCallBack" @click="$emit('openModal')">связаться с нами 24/7</div>
      </div>
  </header>
</template>
