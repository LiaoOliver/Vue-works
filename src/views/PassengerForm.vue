<template>
    <div class="layout">
        <orderProgress progress="step2">
            <h3 class="title" slot="title">
                <span>2.</span>
                <span>訂位</span>
            </h3>
        </orderProgress>
        <div class="content">
            <passengerData :closesumbit=closesumbit></passengerData>
            <div class="cart">
                <cart next='/payment'></cart>
            </div>

        </div>
    </div>
</template>

<script>
import orderProgress from  '../components/orderProgress';
import cart from '../components/Cart';
import passengerData from '../components/CreateData'

export default {
    data(){
        return{
            closesumbit:false
        }
    },
    components:{
        orderProgress,
        cart,
        passengerData
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/passengerForm.scss';
@import '../assets/styles/layout.scss';
</style>
