<script setup>
  import Description from '../components/Description.vue'
  import Offer from '../components/Offer.vue'
  import Catalog from '../components/Catalog.vue'
</script>
<script>
    export default {
        emits:['isOpened'],
    }
</script>
<template>
  <Description>
    <img src="../assets/img/about.jpg" alt="" class="text__imgR">
    <h1 class="pageTitle">О компании</h1>
	<p>
		 Компания "Юго-запад Сервис" успешно зарекомендовала себя на рынке. Мы оказываем полный спектр услуг по аренде спецтехники, вывозу строительного мусора, а также разбор зданий и СМР-работы. 
	</p>
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
	<p>
		 Собственный автопарк импортной спецтехники позволяет нам выполнить заказ в кратчайшие сроки: при необходимости вы получите нужную машину в сжатые сроки после заявки. Наши сотрудники обладают высоким уровнем квалификации и отлично знают свою работу.
	</p>
	

  </Description>
  <Offer title="ХОТИТЕ УЗНАТЬ УСЛОВИЯ АРЕНДЫ СПЕЦТЕХНИКИ?" text="Оставьте заявку или звоните нам <a href='tel:79162716060'>+7 (916) 271-60-60</a>"/>
  <div class="sectionTitle sectionTitle--mb90 tac"><h1>Аренда спецтехники</h1></div>
  <Catalog @open-modal="$emit('isOpened', $event)"/>
</template>