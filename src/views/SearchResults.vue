<template>
    <div class="layout">
        <div class="showResult">
            <Result></Result>
        </div>
        <div class="order"></div>
    </div>
</template>

<script>
import Result from '../components/ResultTable';

export default {
    components:{
        Result
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/searchResult.scss';
@import '@/assets/styles/layout.scss';
</style>

