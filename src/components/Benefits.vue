<script>
    import benefits from '../assets/js/Benefits.js';
    export default {
    methods: {
        getImage(imagepath) {
            return imagepath;
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
              <img :src="getImage(item.img_src)" alt="">
            </div>
            {{item.name}}
      </div>
  </div>
</div>
</template>