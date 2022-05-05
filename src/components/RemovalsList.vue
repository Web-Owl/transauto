<script>
    export default {
        methods: {
        getImageUrl(name) {
                return new URL(`../assets/img/remove-items/${name}`, import.meta.url).href
            }
        },
        data() {
            return {
                items: [
                    {
                        title: 'Строительный и производственный мусор',
                        image: 'official1.jpg',
                        options: [
                            'кирпич и бетон', 'дерево и пластик', 'окна и двери', 'гипсокартон и стекло', 'бумагу и картон', 'резину и полиэтилен', 'шифер и рубероид'
                        ]  
                    },
                    {
                        title: 'Складской и гаражный мусор',
                        image: 'official2.jpg',
                        options: [
                            'доски','стекло', 'мебель и стеллажи', 'окна и двери', 'складской хлам', 'картон и бумагу', 'мешки и коробки'
                        ]
                    },
                    {
                        title: 'Коммунальный мусор',
                        image: 'official4.jpg',
                        options: [
                            'стекло и пластик', 'бумага и картон', 'дерево и ветки', 'трава и листва', 'окна и двери', 'утеплитель', 'почва и грунт'
                        ]
                    },
                ]
            }
        }
    }
</script>

<template>
    <div class="flex flex-wrap justify-center mx-6">
        <div v-for="item in items" :key="item.image" class="w-full sm:w-1/3 lg:w-1/4 m-4 p-4 bg-white lg:bg-gray-100 rounded-lg shadow-lg lg:hover:shadow-lg lg:hover:bg-white ease-in duration-300">
            <div class="h-28 flex items-center text-center ">
                <p class="font-bold my-4 w-full text-2xl">{{item.title}}</p>
            </div>
            <div class="">
                <img :src="getImageUrl(item.image)" alt="" class="w-full">
            </div>
            <div v-if="item.options" class="flex justify-start mt-2">
                <ul class="">
                    <li v-for="item in item.options" :key="item.value" class="text-lg my-2">
                        <div class="flex flex-row items-center">
                            <img src="../assets/img/remove-items/brick.png" alt="" class="w-4 h-4 mr-2">
                            {{item}}
                        </div>
                    </li>
                </ul>
            </div>
            <div class="flex justify-center my-4">
                <div class=" bg-primaryYellow w-full font-bold cursor-pointer text-center py-4 lg:hover:bg-white border-primaryYellow border-2 border-solid" @click="$emit('openModal')">
                    Получить предложение
                </div>
            </div>
        </div>
    </div>
</template>