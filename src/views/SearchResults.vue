<template>
    <div class="layout">
        <div class="showResult">
            <Result></Result>
            <Result></Result>
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
        return{
            flight_Information:[
                {
                    from:{
                        Date:"",
                        Departure:"",
                        Arrival:"",
                        flightTime:"",
                        Cabin:"",
                        flightType:"",
                        Price:{
                            economyClass:"",
                            businessClass:"",
                        },
                        Consignment:{
                            economyClass:"",
                            businessClass:"",
                        },
                        Change:{
                            economyClass:"",
                            businessClass:"",
                        },
                        Return:{
                            economyClass:"",
                            businessClass:"",
                        },
                        SeatSelection:{
                            economyClass:"",
                            businessClass:"",
                        },
                        MileageAccumulation:{
                            economyClass:"",
                            businessClass:"",
                        },
                        MileageUpgrade:{
                            economyClass:"",
                            businessClass:"",
                        }
                    },
                    To:{
                        Date:"",
                        Departure:"",
                        Arrival:"",
                        flightTime:"",
                        Cabin:"",
                        flightType:"",
                        Price:{
                            economyClass:"",
                            businessClass:"",
                        },
                        Consignment:{
                            economyClass:"",
                            businessClass:"",
                        },
                        Change:{
                            economyClass:"",
                            businessClass:"",
                        },
                        Return:{
                            economyClass:"",
                            businessClass:"",
                        },
                        SeatSelection:{
                            economyClass:"",
                            businessClass:"",
                        },
                        MileageAccumulation:{
                            economyClass:"",
                            businessClass:"",
                        },
                        MileageUpgrade:{
                            economyClass:"",
                            businessClass:"",
                        }
                    }
                }
            ]
        }
    }
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/searchResult.scss';
@import '@/assets/styles/layout.scss';
</style>

