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
                    <div class="time">{{ props.DepartureTime }}</div>
                    <div class="site">{{ props.Departure }}</div>
                </div>
                <div class="arrival">
                    <div class="time">{{ props.ArrivalTime }}</div>
                    <div class="site">{{ props.Arrival }}</div>
                </div>
                <div class="other">
                    <div class="totalTime">總時數<span>{{ props.flightTime }}</span></div>
                    <div class="type">{{ props.flightType }}</div>
                </div>
            </div>
            <div class="economyClass">
                <PriceCard 
                    :DepartureTime=props.DepartureTime
                    :Departure=props.Departure
                    :ArrivalTime=props.ArrivalTime
                    :Arrival=props.Arrival
                    :flightTime=props.flightTime
                    :price=props.Price.economyClass
                    :Date=props.Date
                    :flightType=props.flightType>
                </PriceCard>
            </div>
            <div class="businessClass">
                <PriceCard 
                    :DepartureTime=props.DepartureTime
                    :Departure=props.Departure
                    :ArrivalTime=props.ArrivalTime
                    :Arrival=props.Arrival
                    :flightTime=props.flightTime
                    :price=props.Price.businessClass
                    :Date=props.Date
                    :flightType=props.flightType>
                </PriceCard>
            </div>
        </div>
        <div class="baggage">
            <div>托運行李</div>
            <Checked :checked=props.Consignment.economyClass></Checked>
            <Checked :checked=props.Consignment.businessClass></Checked>
        </div>
        <div class="change">
            <div>更改機票手續費</div>
            <Checked :checked=props.Change.economyClass></Checked>
            <Checked :checked=props.Change.businessClass></Checked>
        </div>
        <div class="return">
            <div>退票手續費</div>
            <Checked :checked=props.Return.economyClass></Checked>
            <Checked :checked=props.Return.businessClass></Checked>
        </div>
        <div class="select">
            <div>座位選擇</div>
            <Checked :checked=props.SeatSelection.economyClass></Checked>
            <Checked :checked=props.SeatSelection.businessClass></Checked>
        </div>
        <div class="accumulation">
            <div>哩程累積</div>
            <Checked :checked=props.MileageAccumulation.economyClass></Checked>
            <Checked :checked=props.MileageAccumulation.businessClass></Checked>
        </div>
        <div class="upgrade">
            <div>哩程升等</div>
            <Checked :checked=props.MileageUpgrade.economyClass></Checked>
            <Checked :checked=props.MileageUpgrade.businessClass></Checked>
        </div>
    </div>
</template>

<script>
import PriceCard from '@/components/PriceCard.vue'
import Checked from '@/components/Checked.vue'
export default {
    props:["props"],
    components:{
        PriceCard,
        Checked
    },
    methods:{
        
    },
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/resultTable.scss';
</style>
