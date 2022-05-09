<script>
import JustValidate from 'just-validate';
import axios from 'axios'
export default {
  props: {
      title: String
  },
  methods: {
	  masked() {
		   var selector = this.$el.querySelector('input[name="PHONE"]');
		   var im = new Inputmask('+7 (999) 999-99-99');
		   im.mask(selector)
	  },
      send: function () {
      let formData = new FormData(requestForm);
      ym(88437916,'reachGoal','send_form')
		  return axios.post(`/ajax/send.php`, formData)
		},
        agreeded: function() {
            return this.checked = !this.checked
        }
  },
  mounted() {
	  const validate = new JustValidate('#requestForm');
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
  },
  data() {
      return {
          checked: true
      }
  }
}
</script>
<template>
    <div class="b1">
        <div class="contentData df aic fww">
            <div class="b1__data">
                <div class="b1__title">
                    <span>Аренда</span> <br>
                    <span>спецтехники</span> <br>
                    в Москве <br>и области
                </div>
                <div class="b1__call">Звоните:
                    <a href="tel:79162716060">+7 (916) 271-60-60</a>
                </div>
            </div>
            <div class="wf">
                <div class="wf__title">
                    {{title}}
                </div>
                <div class="wf__text">
                    Мы перезвоним Вам за 1 минуту
                </div>
                <form @submit.prevent id="requestForm">
                    <div>
                        <label for="phone"></label>
                                    <input class="form-check-input" type="text" placeholder="+7 (___) ___ - __- __" name="PHONE" @click="masked" id="phone">
                    </div>
                    <label class="LABEL_CHECK" data-id="CHECK_CALS3">
                        <input type="checkbox" :checked='checked' id="CHECK_CALS3" value="1" @click="agreeded">
                        <span></span>
                        Согласен с&nbsp;политикой конфиденциальности
                    </label>
                    <div class="iconInk iconInk-td">
                        <input class="yBtn" type="submit" value="Заказать" :disabled="!checked"  id="submit-btn">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
