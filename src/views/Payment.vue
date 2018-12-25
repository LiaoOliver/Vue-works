<template>
    <div class="layout">
        <orderProgress progress="step3">
            <h3 class="title" slot="title">
                <span>3.</span>
                <span>付款</span>
            </h3>
            <div slot="progressLine"></div>
        </orderProgress>
        <CheckOrder></CheckOrder>
        <ActionPayment></ActionPayment>
    </div>
</template>

<script>
import orderProgress from  '../components/orderProgress';
import CheckOrder from '../components/CheckOrder';
import ActionPayment from '../components/ActionPayment'
export default {
    components:{
        orderProgress,
        CheckOrder,
        ActionPayment
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/layout.scss';
</style>
