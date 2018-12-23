<template>
    <div class="layout">
        <div class="showResult">
            <template v-for="item in flight_Information">
                <Result :props=item :key="item.id"></Result>
            </template>
        </div>
        <div class="order">
            <Cart></Cart>
        </div>
    </div>
</template>

<script>
import Result from '../components/ResultTable.vue';
import Cart from '../components/Cart.vue'
export default {
    components:{
        Result,
        Cart
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

