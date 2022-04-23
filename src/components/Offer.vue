<template>
<div class="formOrder formOrder--bg1">
	<div class="formOrder__inner">
		<div class="formOrder__title">
			хотите узнать условия<br> аренды спецтехники?
		</div>
		<div class="formOrder__text">Оставьте заявку или звоните нам <a href="tel:79175170350">+7 (917) 517-03-50</a></div>
		<form action="javascript:void(null)" id="MyFRM_ARENDA">
			<input type="text" placeholder="Ваше Имя" name="NAME" id="NAME_ARENDA">
			<input type="text" placeholder="+7 (___) ___ - __- __" name="PHONE" id="PHONE_ARENDA">
			<textarea name="MESS" id="MESS_ARENDA" placeholder="Напишите перечень или название спецтехники"></textarea>
			<label class="LABEL_CHECK" data-id="CHECK_ARENDA">
				<input type="checkbox" checked="checked" id="CHECK_ARENDA" value="1">
				<span></span>
				Согласен с &nbsp;<a href="/confidance/" target="_blank">политикой конфиденциальности</a>
			</label>
			<div class="iconInk iconInk-tr">
        <input type="hidden" name="MOZG" value="1">
        <input type="hidden" name="links" value="/">
        <input type="hidden" name="subject" value="Условия аренды"> 			
				<input class="yBtn SND_AJAX_ARENDA" type="submit" value="Заказать">
			</div>
		</form>
	</div>
</div>
</template>