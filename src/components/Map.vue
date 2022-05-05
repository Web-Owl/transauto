<template>
    <div class="map">
			<!-- <div id="map_canvas"></div> -->
			<div class=""><iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Af2ef43477b4db8d63280ecf159092ce261d8981d56847f8b6d6c2ed18a7ddaa2&amp;source=constructor" frameborder="0"></iframe></div>
			<div class="map__data">
				<div class="map__name">
					Юго-запад Сервис
				</div>
				<div class="map__address">
					<b>Наш адрес:</b>
					<a href="/contacts/">Малая летовская 10, Д. Сосенки, Москва</a>				</div>
				<div class="map__phones">
					<b>Телефоны:</b>
					<a href="tel:79162716060">+7 (916) 271-60-60</a>				</div>
				<div class="map__email">
					<b>E-mail:</b>
					<a href="mailto:zakaz@yugo-zapad.com">zakaz@yugo-zapad.com</a>				</div>
				<div class="map__download">
				  <!-- <a href="/requisite.pdf">Скачать реквизиты</a>					 -->
				</div>
				<div class="map__actions">
					<div class="yBtn connect24_7 showCallBack" @click="$emit('openModal')">связаться с нами 24/7</div>
					<div class="map__actionsSoc">
						<!-- <a href="https://wa.me/+79175170350" target="_blank" rel="nofollow"><img src="../assets/img/whatsapp.svg" alt=""></a><a href="tg://resolve?domain=OOOTransavto" target="_blank" rel="nofollow"><img src="../assets/img/telegram.svg" alt=""></a>					 -->
					</div>
				</div>
			</div>
		</div>
</template>

<style scoped>
iframe {
	width: 100%;
	height: 955px;
}
@media screen and (max-width: 1024px) {
	iframe {
	width: 100%;
	height: 288px;
}
}
</style>