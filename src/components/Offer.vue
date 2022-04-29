<script>
import Inputmask from "inputmask";
import JustValidate from 'just-validate';
export default {
  props: {
      title: String,
      text: String,
	  phone: String
  },
  data() {
	  return {
		  isValid: false
	  }
  },
  methods: {
	  masked() {
		   var selector = this.$el.querySelector('input[name="PHONE"]');
		   var im = new Inputmask('+7 (999) 999-99-99');
		   im.mask(selector)
	  }
  },
  mounted() {
	  const validate = new JustValidate('#form');
	  validate.addField('#name', [
		{
			rule: 'minLength',
			value: 3,
		},
		{
			rule: 'maxLength',
			value: 30,
		},
	])
	.addField('#phone', [
		{
			rule: 'required',
			errorMessage: 'Введите телефон'
		},
	])
	.onSuccess((event) => {
    	console.log('Validation passes and form submitted', event);
		this.$emit('formSend')
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
		<form action="" id="form">
			<label for="name"></label>
			<input class="form-check-input" type="text" placeholder="Ваше Имя" name="NAME" id="name">
			<label for="phone"></label>
			<input class="form-check-input" type="text" placeholder="+7 (___) ___ - __- __" name="PHONE" @click="masked" id="phone">
			<label class="LABEL_CHECK">
				<input type="checkbox" checked="checked" id="CHECK_ARENDA" value="1">
				<span></span>
				Согласен с &nbsp;<a href="/confidance/" target="_blank">политикой конфиденциальности</a>
			</label>
			<div class="iconInk iconInk-tr">			
				<input class="yBtn" type="submit" value="Заказать" id="submit-btn">
			</div>
		</form>
	</div>
</div>
</template>