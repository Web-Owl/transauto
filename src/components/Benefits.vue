<script>
    import benefits from '../assets/js/Benefits.js';
    export default {

    methods: {
        getImageUrl(name) {
            return new URL(`../assets/img/benefits/${name}.svg`, import.meta.url).href
        }
    },
        data() {
            return {
                benefits: benefits
            }
        }
    }
</script>

<template>
<div class="benefits">
  <div class="contentData df fww">
      <div class="benefits__item" v-for="item in benefits">
          <div class="benefits__img">
              <img :src="getImageUrl(item.image)" alt="">
            </div>
            {{item.name}}
      </div>
  </div>
</div>
</template>