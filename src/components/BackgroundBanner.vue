<template>
    <div class="bgImage">
        <div class="bgMask"></div>
        <SearchDialog class="inputform"></SearchDialog>
    </div>
</template>

<script>
import SearchDialog from '@/components/SearchDialog.vue';
export default {
    components:{
        SearchDialog
    }
}
</script>


<style lang="sass" scoped>
@import '@/assets/styles/backgroundBanner.scss';
</style>
