<template>
    <div class="cartDetail" v-if="flightInfo">
        <div class="Head">
            <span>{{flightInfo.Date}}</span>
            <el-button 
            size="mini" 
            type="danger" 
            icon="el-icon-delete" 
            @click="clear(flightInfo.GoBack)"
            circle></el-button>
        </div>
        <div class="content">
            <ul v-if=flightInfo.DepartureTime>
                <li>
                    <span>{{flightInfo.DepartureTime}}</span>
                    <span>{{flightInfo.Departure}}</span>
                </li>
                <li>
                    <span>{{flightInfo.ArrivalTime}}</span>
                    <span>{{flightInfo.Arrival}}</span>
                </li>
                <li>
                    <span>飛行時間: {{flightInfo.flightTime}}</span>
                    <span>{{flightInfo.flightType}}</span>
                </li>
                <li>
                    <span>票價:{{flightInfo.price}}</span>
                </li>
                <li>
                    <span>艙等:經濟艙</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props:["flightInfo"],
    methods:{
        clear(flightInfo){
            this.$store.dispatch('clearCart',flightInfo)
        }
    }
}
</script>


<style lang="scss" scoped>
@import '../assets/styles/cartDetail.scss';
</style>
