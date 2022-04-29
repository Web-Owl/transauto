<script setup>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import Map from './components/Map.vue';
  import BaseModal from './components/BaseModal.vue';
  import axios from 'axios'
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
    send: function () {
      let formData = new FormData(form);
      // formData.append('NAME', this.nam,.value);
      // formData.append('PHONE', this.phone);
		  return axios.post(`/ajax/send.php`, formData)
		},
  }
}
</script>


<template>
  <div class="wrapper"> 
    <Header @open-modal="isOpened"/>
    <router-view @is-opened = "isOpened" @form-send = "send"></router-view>
    <Map @open-modal="isOpened"/>
    <Footer @open-modal="isOpened"/>
    <BaseModal v-if="showModal" @close-modal="showModal = false"/>
  </div> 
</template>

