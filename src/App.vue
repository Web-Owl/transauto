<script setup>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import Map from './components/Map.vue'
  import BaseModal from './components/BaseModal.vue';
</script>
<template>
  <div class="wrapper">
    <Header/>
    <router-view></router-view>
    <Map />
    <Footer/>
  </div> 
</template>

