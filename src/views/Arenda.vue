<script setup>
  import Goods from '../components/Goods.vue'
  import Description from '../components/Description.vue';
  import Filter from '../components/Filter.vue';
</script>
<script>
export default {
  components: {
    Filter
  }
}
</script>

<template>
  <Filter @open-modal="$emit('isOpened', $event)"/>
  <Goods @open-modal="$emit('isOpened', $event)"/>
</template>