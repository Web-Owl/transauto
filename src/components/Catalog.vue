<script>
    import rentCatalog__items from '../assets/js/Catalog.js';
    export default {
        methods: {
        getImageUrl(name) {
                return new URL(`../assets/img/iblock/${name}`, import.meta.url).href
            }
        },
        data() {
            return {
                rentCatalog__items: rentCatalog__items
            }
        }
    }
</script>

<template>
    <div class="rentCatalog rentCatalog--mb155 contentData df fww">
        <div class="rentCatalog__item" v-for="item in rentCatalog__items">
            <div class="rentCatalog__img">
                <img :src="getImageUrl(item.image)" alt="">
            </div>
            <div class="rentCatalog__name">
                {{item.name}}
            </div>
            <div class="rentCatalog__link"></div>
            <a></a>
        </div>
    </div>
</template>
