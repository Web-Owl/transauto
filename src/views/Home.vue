<script setup>
  import Request from '../components/Request.vue'
  import Catalog from '../components/Catalog.vue'
  import Brands from '../components/Brands.vue'
  import Offer from '../components/Offer.vue'
  import Benefits from '../components/Benefits.vue'
  import Goods from '../components/Goods.vue'
</script>
<template>
  <Request title="ЗАЯВКА НА АРЕНДУ СПЕЦТЕХНИКИ" @form-send="$emit('formSend')"/>
  <div class="sectionTitle sectionTitle--mb90 tac"><h1>Аренда спецтехники</h1></div>
  <Catalog @open-modal="$emit('isOpened', $event)"/> 
  <div class="sectionTitle sectionTitle--mb110 tac">марки спецтехники</div>
  <Brands />
  <Offer title="ХОТИТЕ УЗНАТЬ УСЛОВИЯ АРЕНДЫ СПЕЦТЕХНИКИ?" text="Оставьте заявку или звоните нам <a href='tel:79162716060'>+7 (916) 271-60-60</a>" @form-send="$emit('formSend')"/>
  <div class="sectionTitle tac">наши преимущества</div>
  <Benefits />
  <Goods @open-modal="$emit('isOpened', $event)"/>
</template>
<script>
export default {
  emits:['isOpened'],
  computed: {
    username() {
      // We will see what `params` is shortly
      return this.$route.params.username
    },
  },
  methods: {
    goToDashboard() {
      if (isAuthenticated) {
        this.$router.push('/dashboard')
      } else {
        this.$router.push('/login')
      }
    },
  },
}
</script>