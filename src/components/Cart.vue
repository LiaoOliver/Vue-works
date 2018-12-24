<template>
    <div class="cartForm">
        <div class="cart">
            <div class="cartHead">
                1位旅客
                1位成人
            </div>
            <detail :flightInfo=cartInfo.From></detail>
            <detail :flightInfo=cartInfo.To></detail>
            <div class="totalFee">
                <div class="total">
                    <span>機票費用總計:</span>
                    <span>TWD{{totalPrice}}</span>
                </div>
            </div>
        </div>
        <el-button class="submitBtn" type="danger" plain>下一步</el-button>
    </div>
</template>

<script>
import detail from './CartDetail';
export default {
    data(){
        return{
            cartInfo:this.$store.state.cart,
        }
    },
    components:{
        detail
    },
    computed:{
        totalPrice: function(){
            console.log(parseInt(this.$store.state.cart.From.price))
            return parseInt(this.$store.state.cart.From.price) + parseInt(this.$store.state.cart.To.price) ?
             parseInt(this.$store.state.cart.From.price) + parseInt(this.$store.state.cart.To.price) 
             : "";
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/cart.scss';
</style>
