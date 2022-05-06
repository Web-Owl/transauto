<script>
    import services from '../assets/js/Services.js';
    export default {
    methods: {
        getImageUrl(name) {
                return new URL(`../assets/img/iblock/${name}`, import.meta.url).href
            }
        },
        data() {
            return {services: services}
        }
    }
</script>
<template>
    <div class="services contentData">
        <div class="services__list df fww">
            <div class="services__item" v-for="item in services" @click="$emit('openModal')">
                <div class="services__img"><img :src="getImageUrl(item.image)" alt=""></div>
                <div class="services__data">
                    <div class="services__name">
                        <a>{{item.name}}</a>
                    </div>
                    <div class="services__price">от
                        {{item.price}}</div>
                    <div class="services__link" @click="$emit('openModal')">
                        <a>подробнее</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>