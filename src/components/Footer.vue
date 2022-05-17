<script>
    import rentCatalog__items from '../assets/js/Catalog.js';
    import services from '../assets/js/Services.js';
    export default {
        data() {
            return {
                rentCatalog__items: rentCatalog__items,
                services: services
            }
        }
    }
</script>
<template>
    <footer class="footer">
        <div class="contentData">
            <a href="/" class="logo"><img src="../assets/img/logo.png" alt=""></a>
            <div class="footer__data df fww">
                <div class="footer__dataItem w-1/4">
                    <a href="/arenda/">Аренда спецтехники</a>
                    <ul>
                        <li v-for="item in rentCatalog__items" :key="item.name">{{item.name}}</li>
                    </ul>
                </div>
                <div class="footer__dataItem w-1/4">
                    <a href="/services/">Услуги</a>
                    <ul>
                        <li v-for="item in services" :key="item.name">{{item.name}}</li>
                    </ul>
                </div>
                <div class="footer__dataItem w-1/4">
                    <a href="/about/">О компании</a>
                    <ul>
                        <li>Марки спецтехники</li>
                        <li>Блог</li>
                        <li>Контакты</li>
                    </ul>
                </div>
                <div class="footer__dataItem w-1/4">
                    <a href="/contacts/">Контакты</a>
                    <div class="phones">
                        <a href="tel:79162716060">+7 (916) 271-60-60</a>
                    </div>
                    <div class="address">
                        <a href="/contacts/">Малая летовская 10, Д. Сосенки, Москва</a>
                    </div>
                </div>
                <div class="writeback yBtn iconInk showCallBack2"  @click="$emit('openModal')">напишите нам</div>
            </div>
            <div class="footer__bot df fww aic">
                <div class="cop">2022 © Все права защищены</div>
                <div class="download">
                    <!-- <a href="/requisite.pdf">Скачать реквизиты</a> -->
                </div>
                <div class="links">
                    <!-- <a href="/confidance/">Политика конфиденциальности</a> -->
                </div>
            </div>
        </div>
    </footer>
</template>
