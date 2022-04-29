<template>
    <footer class="footer">
        <div class="contentData">
            <a href="/" class="logo"><img src="../assets/img/logo.png" alt=""></a>
            <div class="footer__data df fww">
                <div class="footer__dataItem">
                    <a href="/arenda/">Аренда спецтехники</a>
                    <ul>
                        <li>Самосвалы</li>
                        <li>Экскаваторы погрузчики</li>
                        <li>Колесные экскаваторы</li>
                        <li>Гусеничные экскаваторы</li>
                        <li>Автокраны</li>
                        <li>Манипуляторы</li>
                        <li>Коммунальные тракторы</li>
                        <li>Мини-погрузчики</li>
                    </ul>
                </div>
                <div class="footer__dataItem">
                    <a href="/services/">Услуги</a>
                    <ul>
                        <li>Вывоз строительного мусора с утилизацией</li>
                        <li>Вывоз мусора контейнерами</li>
                        <li>Вывоз твердых отходов</li>
                        <li>Вывоз снега</li>
                        <li>Утилизация снега</li>
                        <li>Вывоз грунта с утилизацией</li>
                        <li>Разработка котлованов и траншей</li>
                        <li>Демонтаж зданий</li>
                    </ul>
                </div>
                <div class="footer__dataItem">
                    <a href="/about/">О компании</a>
                    <ul>
                        <li>Марки спецтехники</li>
                        <li>Блог</li>
                        <li>Контакты</li>
                    </ul>
                </div>
                <div class="footer__dataItem">
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
