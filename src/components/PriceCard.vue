<template>
    
    <div :class="['priceCard', checked? 'check' : '']" @click="addToCart">
        <div class="currency">TWD</div> 
        <div class="price">8000</div>
        <div class="decoration"><i class="fas fa-tag"></i></div> 
    </div>
</template>

<script>
export default {
    data(){
        return{
            checked:false,
        }
    },
    methods:{
        addToCart(){
            this.checked = !this.checked
        }
    }
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/priceCard.scss';
</style>