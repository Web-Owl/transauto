<script setup>
  import Goods from '../components/Goods.vue'
  import Description from '../components/Description.vue';
  import Filter from '../components/Filter.vue';
</script>
<script>
export default {
  components: {
    Filter
  },
  methods: {
    isSelected(event) {
      this.category = event
      console.log(event)
    }
  },
  data() {
    return{
      category: ''
    }
  }
}
</script>

<template>
  <Filter @open-modal="$emit('isOpened', $event)" @select-cat="isSelected"/>
  <Goods @open-modal="$emit('isOpened', $event)" :category='category'/>
</template>