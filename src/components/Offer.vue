<script>
import axios from 'axios'
export default {
  props: {
      title: String,
      text: String,
	  phone: String
  },
  methods: {
	send() {
		return axios.post(`../public/ajax/send.php`, {
			firstName: 'Fred',
			lastName: 'Flintstone'
		}
	)
  },
  created() {
	
  }
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
		<form action="javascript:void(null)" id="MyFRM_ARENDA">
			<input type="text" placeholder="Ваше Имя" name="NAME" id="NAME_ARENDA">
			<input type="text" placeholder="+7 (___) ___ - __- __" name="PHONE" id="PHONE_ARENDA">
			<textarea name="MESS" id="MESS_ARENDA" placeholder="Напишите перечень или название спецтехники"></textarea>
			<label class="LABEL_CHECK" data-id="CHECK_ARENDA">
				<input type="checkbox" checked="checked" id="CHECK_ARENDA" value="1">
				<span></span>
				Согласен с &nbsp;<a href="/confidance/" target="_blank">политикой конфиденциальности 1</a>
			</label>
			<div class="iconInk iconInk-tr">
        <input type="hidden" name="MOZG" value="1">
        <input type="hidden" name="links" value="/">
        <input type="hidden" name="subject" value="Условия аренды"> 			
				<input class="yBtn SND_AJAX_ARENDA" type="submit" value="Заказать" @click="send()">
			</div>
		</form>
	</div>
</div>
</template>