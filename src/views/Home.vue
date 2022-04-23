<script setup>
  import Request from '../components/Request.vue'
  import Catalog from '../components/Catalog.vue'
  import Brands from '../components/Brands.vue'
  import Offer from '../components/Offer.vue'
  import Benefits from '../components/Benefits.vue'
  import Goods from '../components/Goods.vue'
</script>

<template>
  <Request title="ЗАЯВКА НА АРЕНДУ СПЕЦТЕХНИКИ"/>
  <div class="sectionTitle sectionTitle--mb90 tac"><h1>Аренда спецтехники</h1></div>
  <Catalog /> 
  <div class="sectionTitle sectionTitle--mb110 tac">марки спецтехники</div>
  <Brands />
  <Offer />
  <div class="sectionTitle tac">наши преимущества</div>
  <Benefits />
  <Goods/>
</template>
