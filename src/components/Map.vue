<script>
    export default {
        data() {
            return {
				a: 1
            }
        },
		methods: {
			
		},
		created: function () {
			ymaps.ready(init);
			function init() {
					var myMap = new ymaps.Map("map", {
					center: [55.565346, 37.442599],
					zoom: 15,
					controls: []
				});

			myMap.geoObjects
				.add(new ymaps.Placemark([55.565346, 37.442599], {
					balloonContent: 'Россия, Москва, поселение Сосенское, деревня Сосенки, 10',
					iconCaption: 'Юго-Запад сервис'
				}, {
				preset: 'islands#yellowAutoIcon'
			}
		));
		}
    }
}
</script>

<template>
    <div class="map">
			<!-- <div id="map_canvas"></div> -->
			<div id="map" class="w-full lg:w-3/4 h-96"></div>
			<div class="map__data h-96 p-6">
				<div class="map__name">
					Юго-запад Сервис
				</div>
				<div class="map__address">
					<b>Наш адрес:</b>
					Юго-Западный округ			</div>
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