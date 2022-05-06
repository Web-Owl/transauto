<script setup>
  import Goods from '../components/Goods.vue'
  import Description from '../components/Description.vue';
  import Filter from '../components/Filter.vue';
</script>
<template>
  <Filter @open-modal="$emit('isOpened')"/>
  <Goods @open-modal="$emit('isOpened')"/>
</template>