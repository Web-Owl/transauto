<script setup>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import Map from './components/Map.vue';
  import BaseModal from './components/BaseModal.vue';
</script>

<script>
export default {
components:{BaseModal},
  setup() {
    
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    isOpened() {
      this.showModal = true
    },
  }
}
</script>


<template>
  <div class="wrapper"> 
    <Header @open-modal="isOpened"/>
    <router-view @is-opened = "isOpened"></router-view>
    <Map @open-modal="isOpened"/>
    <Footer @open-modal="isOpened"/>
    <BaseModal v-if="showModal" @close-modal="showModal = false"/>
  </div> 
</template>

