<script>
    import goods from '../assets/js/Goods.js';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import SwiperCore, {Pagination, Navigation } from "swiper";
    import 'swiper/css';
    import 'swiper/css/navigation';
    SwiperCore.use([Pagination, Navigation]);
    export default {
      props:{
        category: {
          type: String,
          required: true
        },
      },
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {
            const onSwiper = (swiper) => {
                console.log(swiper);
            };
            const onSlideChange = () => {
                console.log('slide change');
            };
            return {
                onSwiper,
                onSlideChange,
                modules: [Navigation],
                navigation :{
                   nextEl: "#swiper-forward",
                   prevEl: ".goods__sl" 
                }
            };
        },
        methods: {
        getImageUrl(name) {
                return new URL(`../assets/img/iblock/${name}`, import.meta.url).href
            },
        getCharImageurl(name){
                return new URL(`../assets/img/${name}`, import.meta.url).href
            },
        },
        computed: {
          filteredGoods: function(){
            var goods = []
            if (this.category === 'Вид спецтехники' || this.category == null ) {
              goods = this.goods
            }
            else {
              goods = this.goods.filter(good => {
                if(good.category  == this.category){
                  return true
                }
                return  false
              })
            }
            return goods
          }
        },
        data() {
            return {
                goods: goods
            }
        }
    }
</script>
<template>
  <div class="goods">
    <div class="goods__head df fww aic">
      <div class="sectionTitle">популярная спецтехника</div>
      <div class="goods__sl"></div>
      <div class="goods__sr" id="swiper-forward"></div>
    </div>
    <swiper
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :loop = "false"
        :navigation="{
          nextEl: '.goods__sr',
          prevEl: '.goods__sl'
        }"
        :breakpoints="{
            '640': {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            '768': {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            '1024': {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        }"
        class="goods__slider">
        {}
      <swiper-slide 
        class="goods__item" v-for="item in filteredGoods"
      >
        <div class="goods__itemHit">Хит</div>
        <a
          style="text-decoration: none"
        >
          <div class="goods__itemName">
              {{item.name}}
            
          </div>
          <div class="goods__itemImg">
            <img
              :src="getImageUrl(item.image)"
              alt=""
            />
          </div>
        </a>
        <div class="goods__chars" v-if="item.characteristics">
          <span>Характеристики</span>
          <div class="goods__char" v-for="item in item.characteristics">
            <img :src="getCharImageurl(item.image)" alt="" />
            {{item.name}} <span></span>
            <b>{{item.value}}</b>
          </div>
        </div>
        <div class="goods__po df fww aic">
          <div class="goods__price">
            <b>{{item.price_per_hour}}₽/Ч</b>
            {{item.price_total}} ₽/смена
          </div>
          <div
            class="yBtn goods__order showPdOrder" @click="$emit('openModal', item)"
          >
            Забронировать 
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
