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
        <div class="backPrev"><el-button @click="backPrev" type="danger">返回上一頁</el-button></div>
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
    },
    methods:{
        backPrev(){
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/payment.scss';
@import '../assets/styles/layout.scss';
</style>
