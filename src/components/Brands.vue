<script>
    import brands from '../assets/js/Brands.js';
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
        methods: {
        getImageUrl(name) {
                return new URL(`../assets/img/brands/${name}`, import.meta.url).href
            }
        },
        data() {
            return {
                brands: brands
            }
        }
    }
</script>

<template>
    <swiper
        navigation
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :breakpoints="{
            '640': {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            '768': {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            '1024': {
                slidesPerView: 4,
                spaceBetween: 50,
            },
        }"
        class="mSpec contentData"
    >
        <swiper-slide class="mSpec__item" v-for="item in brands">
            <a>
                <img :src="getImageUrl(item.image)" alt="" style="max-height: 85px;">
            </a>
        </swiper-slide>
    </swiper>
</template>