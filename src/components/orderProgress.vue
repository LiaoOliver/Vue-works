<template>
    <div class="showProgress">
        <div><slot name="title"></slot></div>
        <div class="progressLine">
            <span class="step" :class="{ 'checked': isStep1}">
                <span>1</span>
                <span class="text">選取</span>
            </span>
            <span class="step" :class="{ 'checked': isStep2}">
                <span>2</span>
                <span class="text">訂位</span>
            </span>
            <span class="step" :class="{ 'checked': isStep3}">
                <span>3</span>
                <span class="text">付款</span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props:["progress"],
    data(){
        return{
            isStep1: this.progress==="step1",
            isStep2: this.progress==="step2",
            isStep3: this.progress==="step3",
        }
    }
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/orderProgress.scss';
</style>
