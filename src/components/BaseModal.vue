<template>
  <div class="popUps__block">
    <div class="popUps__blockInner">
      <div class="popUps__close" @click="$emit('closeModal')"></div>
      <div class="popUps__title TitleFormCart">Заказать</div>
      <form action="javascript:void(null)" id="MyFRM1">
        <input
          maxlength="50"
          type="text"
          placeholder="Ваше Имя"
          name="NAME"
          id="NAME1"
        />
        <input
          type="text"
          placeholder="+7 (___) ___ - __- __"
          name="PHONE"
          id="PHONE1"
        />
        <input type="email" placeholder="Email" name="EMAIL" id="EMAIL1" />
        <label class="LABEL_CHECK" data-id="CHECK1">
          <input type="checkbox" checked="checked" id="CHECK1" value="1" />
          <span></span>
          Согласен с &nbsp;<a href="/confidance/" target="_blank"
            >политикой конфиденциальности</a
          >
        </label>
        <input type="hidden" name="MOZG" value="1" />
        <input type="hidden" name="links" id="links1" value="/services/" />
        <input
          type="hidden"
          name="subject"
          id="subject1"
          value="Заказать технику"
        />
        <input type="hidden" name="oborudovanie" id="oborudovanie1" value="" />
        <input class="yBtn SND_AJAX1" type="submit" value="отправить" />
      </form>
    </div>
  </div>
</template>
