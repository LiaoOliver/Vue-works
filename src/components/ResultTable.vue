<template>
    <div class="resultTable">
        <div class="head">
            <div class="iconDesc"></div>
            <div class="title">經濟艙</div>
            <div class="title">商務艙</div>
        </div>
        <div class="flight-price">
            <div class="flight">
                <div class="depart">
                    <div class="time">07:55</div>
                    <div class="site">桃園國際機場 (TPE)</div>
                </div>
                <div class="arrival">
                    <div class="time">11:55</div>
                    <div class="site">大阪關西機場 (OSK)</div>
                </div>
                <div class="other">
                    <div class="totalTime">總時數04:00</div>
                    <div class="type">直航航班</div>
                </div>
            </div>
            <div class="economyClass">
                <PriceCard @click="addToCart"></PriceCard>
            </div>
            <div class="businessClass">
                <PriceCard @click="addToCart"></PriceCard>
            </div>
        </div>
        <div class="baggage">
            <div>托運行李</div>
            <Checked checked=""></Checked>
            <Checked checked="true"></Checked>
        </div>
        <div class="change">
            <div>更改機票手續費</div>
            <Checked checked=""></Checked>
            <Checked checked="false"></Checked>
        </div>
        <div class="return">
            <div>退票手續費</div>
            <Checked checked=""></Checked>
            <Checked checked="true"></Checked>
        </div>
        <div class="select">
            <div>座位選擇</div>
            <Checked checked=""></Checked>
            <Checked checked="true"></Checked>
        </div>
        <div class="accumulation">
            <div>哩程累積</div>
            <Checked checked=""></Checked>
            <Checked checked="true"></Checked>
        </div>
        <div class="upgrade">
            <div>哩程升等</div>
            <Checked checked="false"></Checked>
            <Checked checked="true"></Checked>
        </div>
    </div>
</template>

<script>
import PriceCard from '@/components/PriceCard.vue'
import Checked from '@/components/Checked.vue'
export default {
    components:{
        PriceCard,
        Checked
    },
    methods:{
        addToCart(){
            console.log('add success')
        }
    }
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/resultTable.scss';
</style>
