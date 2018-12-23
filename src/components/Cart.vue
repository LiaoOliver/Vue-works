<template>
    <div class="cartForm">
        <div class="cart">
            <div class="cartHead">
                1位旅客
                1位成人
            </div>
            <detail></detail>
            <detail></detail>
            <div class="totalFee">
                <div class="total">
                    <span>機票費用總計:</span>
                    <span>TWD:10,356</span>
                </div>
            </div>
        </div>
        <el-button class="submitBtn" type="danger" plain>下一步</el-button>
    </div>
</template>

<script>
import detail from './CartDetail';
export default {
    components:{
        detail
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/cart.scss';
</style>
