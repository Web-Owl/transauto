<script setup>
  import Request from '../components/Request.vue'
  import Services from '../components/Services.vue'
  import Description from '../components/Description.vue'
  import Offer from '../components/Offer.vue'
</script>

<template>
  <Request title="ЗАЯВКА НА ОКАЗАНИЕ УСЛУГ"/>
  <div class="sectionTitle tac">наши услуги</div>
  <Services />
  <Description />
  <Offer title="ГОТОВЫ К СОТРУДНИЧЕСТВУ?" text="Оставьте заявку, мы свяжемся с вами в ближайшее время и ответим на <span>любые ваши вопросы</span>"/>
</template>
