<script>
    import rentCatalog__items from '../assets/js/Catalog.js';
    import Catalog from './Catalog.vue';
    import vSelect from 'vue-select'
    import 'vue-select/dist/vue-select.css';
    export default {
        components: {
            Catalog,
            vSelect
        },
        computed: {
            
        },
        data() {
            return {
                rentCatalog__items: rentCatalog__items,
                // selected: ''
                selected: 'Вид спецтехники'
                
            }
        }
    }
</script>
<template>
    <div class="rentFilter">
        <div class="contentData df fww aic">
            <div class="rentFilter__label">выберите спецтехнику:</div>
            <a  class="rentFilter__link showInd">Не нашли нужную спецтехнику?</a>
            <div class="rentFilter__selects df fww">
            <div class="select">
                <v-select v-model="selected" placeholder ='Выберите вид спецтехники' label="name" :options="rentCatalog__items" class="FilterCategory" 
                ></v-select>
            </div>
                <div class="rentCatalog rentCatalog--mb155 contentData df fww" v-if="selected =='Вид спецтехники'">
                    <div class="rentCatalog__item" v-for="item in rentCatalog__items">
                        <div class="rentCatalog__img" >
                                <img :src="item.img_src" alt="">
                        </div>
                        <div class="rentCatalog__name">
                            {{item.name}}
                        </div>
                        <div class="rentCatalog__link" ></div>
                    </div>                       
                </div>
                <div class="rentCatalog rentCatalog--mb155 contentData df fww" v-else>
                    <div class="rentCatalog__item">
                        <div class="rentCatalog__img" >
                                <img :src="selected.img_src" alt="">
                        </div>
                        <div class="rentCatalog__name">
                            {{selected.name}}
                        </div>
                        <div class="rentCatalog__link" ></div>
                    </div>                       
                </div>
            </div>
        </div>
    </div>
</template>
