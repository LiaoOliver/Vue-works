<template>
    
    <div :class="['priceCard', checked? 'check' : '']" @click="addToCart">
        <div class="currency">TWD</div> 
        <div class="price">{{price}}</div>
        <div class="decoration"><i class="fas fa-tag"></i></div> 
    </div>
</template>

<script>
export default {
    props:[
        "DepartureTime",
        "Departure",
        "ArrivalTime",
        "Arrival",
        "flightTime",
        "price",
        "Date",
        "flightType",
        ],
    data(){
        return{
            checked:false,
            order:[]
        }
    },
    methods:{
        addToCart(){
            // 新增資料到 Vuex 
            this.checked = !this.checked
            console.log(this.order)
        }
    },
    created(){
        this.order.push(
            this.DepartureTime,
            this.Departure,
            this.ArrivalTime,
            this.Arrival,
            this.flightTime,
            this.price,
            this.Date,
            this.flightType,
        )
    }
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/priceCard.scss';
</style>