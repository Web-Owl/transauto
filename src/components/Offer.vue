<script>
import JustValidate from 'just-validate';
import axios from 'axios'
export default {
  props: {
      title: String,
      text: String,
	  phone: String
  },
  methods: {
	  masked() {
		   var selector = this.$el.querySelector('input[name="PHONE"]');
		   var im = new Inputmask('+7 (999) 999-99-99');
		   im.mask(selector)
	  },
	  send: function () {
      let formData = new FormData(offerForm);
	  ym(88437916,'reachGoal','send_form')
		  return axios.post(`/ajax/send.php`, formData)
		},
  },
  mounted() {
	  const validate = new JustValidate('#offerForm');
	  validate.addField('#phone', [
		{
			rule: 'required',
			errorMessage: 'Введите телефон'
		},
	])
	.onSuccess((event) => {
    	console.log('Validation passes and form submitted', event);
		this.send();
		alert('Форма успешно отправлена!')
  })
  }
}
</script>
<template>
<div class="formOrder formOrder--bg1">
	<div class="formOrder__inner">
		<div class="formOrder__title">
			{{title}}
		</div>
		<div class="formOrder__text"><p v-html="text"></p> 
		<slot></slot>
		</div>
		<form action="" @submit.prevent id="offerForm">
			<div class="w-full">
				<label for="phone"></label>
				<input class="form-check-input" type="text" placeholder="+7 (___) ___ - __- __" name="PHONE" @click="masked" id="phone">
			</div>
			<label class="LABEL_CHECK">
				<input type="checkbox" checked="checked" id="CHECK_ARENDA" value="1">
				<span></span>
				Согласен с&nbsp;политикой конфиденциальности
			</label>
			<div class="iconInk iconInk-tr">			
				<input class="yBtn" type="submit" value="Заказать" id="submit-btn">
			</div>
		</form>
	</div>
</div>
</template>