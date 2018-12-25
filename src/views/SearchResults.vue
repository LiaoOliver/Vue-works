<template>
    <div class="layout">
        <orderProgress progress="step1">
            <h3 class="title" slot="title">
                <span>1.</span>
                <span>選取</span>
            </h3>
            <div slot="progressLine">progressLine</div>
        </orderProgress>
        <div class="content">
            <div class="showResult">
                <template v-for="item in flight_Information">
                    <Result :props=item :key="item.id"></Result>
                </template>
            </div>
            <div class="order">
                <Cart next='/passengerForm'></Cart>
            </div>
        </div>
    </div>
</template>

<script>
import Result from '../components/ResultTable.vue';
import Cart from '../components/Cart.vue';
import orderProgress from '../components/orderProgress'
export default {
    components:{
        Result,
        Cart,
        orderProgress
    },
    data(){
        // Vuex 取資料的方法 => 到 Vue 實體上找到 store ，在尋找 state 獲取資料
        return{
            flight_Information:this.$store.state.flight_Information   
        }
    },
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/searchResult.scss';
@import '@/assets/styles/layout.scss';
</style>

