<template>
    
    <div class="priceCard" @click="addToCart">
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
        "GoBack"
        ],
    data(){
        return{
            checked:false,
        }
    },
    methods:{
        addToCart(){
            // 新增資料到 Vuex 
            this.$store.dispatch('addToCart',this.order);
            // console.log(this.$store.state.cart.From)
        }
    },
    created(){
        this.order = {
            "DepartureTime":this.DepartureTime,
            "Departure":this.Departure,
            "ArrivalTime":this.ArrivalTime,
            "Arrival":this.Arrival,
            "flightTime":this.flightTime,
            "price":this.price,
            "Date":this.Date,
            "flightType":this.flightType,
            "GoBack":this.GoBack
        }   
    }
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/priceCard.scss';
</style>