<template>
    <div class="map">
			<!-- <div id="map_canvas"></div> -->
			<div id=""><iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A80184018a00011829d9499dd8bdfc43d38da8d96d067e5c99b9632f1654efb22&amp;source=constructor" width="100%" height="955" frameborder="0"></iframe></div>
			<div class="map__data">
				<div class="map__name">
					ТРАНСАВТО
				</div>
				<div class="map__address">
					<b>Наш адрес:</b>
					<a href="/contacts/">143904, Московская область, г. Балашиха, <br> ул. Советская, д.19, офис 7,8 этаж 1</a>				</div>
				<div class="map__phones">
					<b>Телефоны:</b>
					<a href="tel:79175170350">+7 (917) 517-03-50</a>				</div>
				<div class="map__email">
					<b>E-mail:</b>
					<a href="mailto:info@transauto-rent.ru">info@transauto-rent.ru</a>				</div>
				<div class="map__download">
				  <a href="/requisite.pdf">Скачать реквизиты</a>					
				</div>
				<div class="map__actions">
					<div class="yBtn connect24_7 showCallBack" @click="$emit('openModal')">связаться с нами 24/7</div>
					<div class="map__actionsSoc">
						<a href="https://wa.me/+79175170350" target="_blank" rel="nofollow"><img src="../assets/img/whatsapp.svg" alt=""></a><a href="tg://resolve?domain=OOOTransavto" target="_blank" rel="nofollow"><img src="../assets/img/telegram.svg" alt=""></a>					</div>
				</div>
			</div>
		</div>
</template>