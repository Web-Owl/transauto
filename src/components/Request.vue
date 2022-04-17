<script>
export default {
  props: {
      title: String
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
                    <a href="tel:79175170350">+7 (917) 517-03-50</a>
                </div>
            </div>
            <div class="wf">
                <div class="wf__title">
                    {{title}}
                </div>
                <div class="wf__text">
                    Мы перезвоним Вам за 1 минуту
                </div>
                <form action="javascript:void(null)" id="MyFRM_CALS3">
                    <input type="text" placeholder="Ваше Имя" name="NAME" id="NAME_CALS3">
                    <input type="text" placeholder="+7 (___) ___ - __- __" name="PHONE" id="PHONE_CALS3">
                    <label class="LABEL_CHECK" data-id="CHECK_CALS3">
                        <input type="checkbox" checked="checked" id="CHECK_CALS3" value="1">
                        <span></span>
                        Согласен с &nbsp;<a href="/confidance/" target="_blank">политикой конфиденциальности</a>
                    </label>
                    <div class="iconInk iconInk-td">
                        <input type="hidden" name="MOZG" value="1">
                        <input type="hidden" name="links" value="/">
                        <input type="hidden" name="subject" value="Аренда спецтехники">
                        <input class="yBtn SND_AJAX_CALS3" type="submit" value="Заказать">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
