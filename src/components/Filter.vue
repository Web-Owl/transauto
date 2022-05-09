<script>
    import rentCatalog__items from '../assets/js/Catalog.js';
    import goods from '../assets/js/Goods.js';
    import Catalog from './Catalog.vue';
    import vSelect from 'vue-select'
    import 'vue-select/dist/vue-select.css';
    export default {
        components: {
            Catalog,
            vSelect
        },
        methods: {
        getImageUrl(name) {
                return new URL(`../assets/img/iblock/${name}`, import.meta.url).href
            },
        getCharImageurl(name){
                return new URL(`../assets/img/${name}`, import.meta.url).href
            }             
        },
        data() {
            return {
                rentCatalog__items: rentCatalog__items,
                goods: goods,
                selected: 'Вид спецтехники',
            }
        }
    }
</script>
<template>
    <div class="rentFilter">
        <div class="contentData df fww aic">
            <div class="rentFilter__label">выберите спецтехнику:</div>
            <div class="rentFilter__selects df fww">
            <div class="select">
                <v-select v-model="selected" placeholder ='Выберите вид спецтехники' label="name" :options="rentCatalog__items" :reduce="rentCatalog__items => rentCatalog__items.name" class="FilterCategory" 
                ></v-select>
            </div>
                <div class="rentCatalog rentCatalog--mb155 contentData df fww" v-if="selected === 'Вид спецтехники' || selected === null">
                    <div class="rentCatalog__item bg-white" v-for="item in rentCatalog__items"  @click="$emit('openModal')">
                        <div class="rentCatalog__img" >
                                <img :src="getImageUrl(item.image)" alt="">
                        </div>
                        <div class="rentCatalog__name">
                            {{item.name}}
                        </div>
                        <div class="rentCatalog__link" @click="$emit('openModal')"></div>
                    </div>                       
                </div>
                
                <div class="goods" v-else>
                    <div class="goods__list df fww">
                        
                        <template v-for="item in goods" :key="item.name">
                            <div class="goods__item bg-white" v-if="item.category == selected" @click="$emit('openModal', item)">
                                
                                <div class="goods__itemName">
                                    {{ item.name }}
                                </div>
                                <div class="goods__itemImg">
                                    <img :src="getImageUrl(item.image)" alt="">
                                </div>
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
                                        Заказать
                                    </div>
                                </div>
                            </div>                     
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
