<script>
import RemovalsList from '../components/RemovalsList.vue'

export default {
    components: { RemovalsList }
}
</script>

<template>
    <div class="mb-16"></div>
    <div class="sectionTitle tac">Вывоз строительного мусора</div>
    <RemovalsList @open-modal="$emit('isOpened')"/>
</template>