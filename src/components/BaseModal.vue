<script>
import Inputmask from "inputmask";
import JustValidate from 'just-validate';
import axios from 'axios'
import vClickOutside from 'click-outside-vue3'
export default {
  emits:['closeModal'],
  props:{
    select: {
      type: Object
    },
  },
  directives: {
      clickOutside: vClickOutside.directive
    },
  methods: {
    onClickOutside (event) {
        this.$emit('closeModal')
      },
	  masked() {
		   var selector = document.getElementById("modalphone");
		   var im = new Inputmask('+7 (999) 999-99-99');
		   im.mask(selector)
	  },
     send: function () {
      let formData = new FormData(modalForm);
      // formData.append('NAME', this.nam,.value);
      // formData.append('PHONE', this.phone);
      ym(88437916,'reachGoal','send_form')
		  return axios.post(`/ajax/send.php`, formData)
		},
    getImageUrl(name) {
      return new URL(`../assets/img/iblock/${name}`, import.meta.url).href
    },
  }, 
  mounted() {
	  const validate = new JustValidate('#modalForm');
	  validate.addField('#modalphone', [
		{
			rule: 'required',
			errorMessage: 'Введите телефон'
		},
	])
	.onSuccess((event) => {
    console.log('Validation passes and form submitted', event);
		this.send();
		alert('Форма успешно отправлена!')
    this.$emit('closeModal')
  })
  },
  data () {
    return{

    }
  }
}
</script>
<template>
  <div class="popUps__block" v-click-outside="onClickOutside">
    <div class="popUps__blockInner">
      <div class="popUps__close" @click="$emit('closeModal')"></div>
      <div v-if='select'>
        <div class="popUps__title TitleFormCart" >Заказать {{select.name}}</div>
        <div class="w-full h-40 flex items-center justify-center mb-4" >
          <img :src = "getImageUrl(select.image)" class="w-1/2"/>
        </div>
      </div>
        <div class="popUps__title TitleFormCart" v-else>Заказать</div>
      <form @submit.prevent id="modalForm">
      <div>
        <label for="phone"></label>
              <input class="form-check-input" type="text" placeholder="+7 (___) ___ - __- __" name="PHONE" @click="masked" id="modalphone">
      </div>
        <label class="LABEL_CHECK" data-id="CHECK1">
          <input type="checkbox" checked="checked" id="CHECK1" value="1" />
          <span></span>
          Согласен с&nbsp;политикой конфиденциальности
        </label>
        <input class="yBtn" type="submit" value="отправить" id="submit-btn"/>
      </form>
    </div>
  </div>
  <div modal-backdrop="" class="bg-gray-900 bg-opacity-50 fixed inset-0 z-40"></div>
</template>
