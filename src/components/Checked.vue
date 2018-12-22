<template>
    <div><i :class="['fas',checked? 'fa-check':'fa-times']"></i></div>
</template>

<script>
export default {
    props:['checked'],
}
</script>

<style lang="sass" scoped>

</style>
