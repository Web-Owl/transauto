<script>
    import rentCatalog__items from '../assets/js/Catalog.js';
    import goods from '../assets/js/Goods.js';
    import Catalog from './Catalog.vue';
    export default {
        components: {
            Catalog
        },
        methods: {
            sortByCategories(category) {
                this.sortedCatalogs = [];
                let vm = this;
                this.rentCatalog__items.map(function (item) {
                    if (item.category === category.name) {
                        vm.sortedCatalogs.push(item);
                    }
                })
            }
        },
        data() {
            return {
                rentCatalog__items: rentCatalog__items,
                categories: [
                    {
                        name:'Вид спецтехники', value: 'All',
                        name:'Самосвалы', value: 'сам'
                    }
                ],
                selected: 'Вид спецтехники',
                sortedCatalogs: []
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
                <select name="FilterCategory" class="FilterCategory"  @select="sortByCategories">
                    <option>{{selected}}</option>
                    <option v-for="item in rentCatalog__items">{{item.name}}</option>
                </select>
            </div>
        </div>
    </div>
    <div class="sectionTitle sectionTitle--mb40 contentData ">Выберите спецтехнику:</div>
    <Catalog />
</template>
