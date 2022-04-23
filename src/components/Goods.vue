<script>
    import goods from '../assets/js/Goods.js';
      import { Swiper, SwiperSlide } from 'swiper/vue';
    import SwiperCore, {Pagination, Navigation } from "swiper";
    import 'swiper/css';
    import 'swiper/css/navigation';
    SwiperCore.use([Pagination, Navigation]);
    export default {
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
                
            };
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
      <div class="goods__sr"></div>
    </div>

    <swiper
        navigation
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :navigation="true"
        :breakpoints="{
            '640': {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            '768': {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            '1024': {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        }"
        class="goods__slider">
      <swiper-slide
        class="goods__item" v-for="item in goods"
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
              :src="item.img_src"
              alt=""
            />
          </div>
        </a>
        <div class="goods__chars">
          <span>Характеристики</span>
          <div class="goods__char">
            <img src="/images/act_ch1.svg" alt="" />
            Эксплуатационная масса, кг <span></span>
            <b>32700</b>
          </div>
          <div class="goods__char">
            <img src="/images/act_ch2.svg" alt="" />
            Объем ковша, м3 <span></span>
            <b>1.6</b>
          </div>
        </div>
        <div class="goods__po df fww aic">
          <div class="goods__price">
            <b>{{item.price_per_hour}}₽/Ч</b>
            {{item.price_total}}₽/смена
          </div>
          <div
            class="yBtn goods__order showPdOrder"
          >
            Заказать
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
