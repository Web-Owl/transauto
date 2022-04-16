<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <header>
      <div class="header-container">
          <div id="nav">
              <router-link to="/"><img src="../assets/img/logo.svg" alt="logo" class="w-56 mx-auto"> </router-link>
              <router-link to="/arenda" class="hidden md:block">Аренда спецтехники</router-link>
              <router-link to="/services" class="hidden md:block">Услуги</router-link>
              <router-link to="/about" class="hidden md:block">О компании</router-link>
              <router-link to="/contacts" class="hidden md:block">Контакты</router-link>
            <!--<router-view />-->
          </div>
          <div class="header-item">
            <div class="header-item-phones">
                <a href="tel:+74958856265">+7 (495) 885-62-65</a>
            </div>
            <div class="header-item-socials">
                <a href="https://wa.me/+79175170350">
                    <img src="../assets/img/whatsapp.svg" alt="">
                </a>
                <a href="tg://resolve?domain=OOOTransavto">
                    <img src="../assets/img/telegram.svg" alt="">
                </a>
            </div>
          </div>
          <div class="h-16 mb-2.5 w-64 text-center uppercase  flex items-center justify-center bg-primaryYellow text-xs mx-auto font-bold">
            связаться с нами 24/7
          </div>
      </div>
  </header>
</template>
