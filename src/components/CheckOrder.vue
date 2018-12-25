<template>
    <div>
        <h2>確認訂單</h2>
        <div class="checkorder">
            <div class="flight">
                <div class="GO">
                    <p class="go">去程</p>
                    <p>起飛:{{From.Departure}}</p>
                    <p>抵達:{{From.Arrival}}</p>
                    <p>起飛時間:{{From.DepartureTime}}</p>
                    <p>抵達時間:{{From.ArrivalTime}}</p>
                </div>
                <div class="BACK">
                    <p class="back">回程</p>
                    <p>起飛:{{To.Departure}}</p>
                    <p>抵達:{{To.Arrival}}</p>
                    <p>起飛時間:{{To.DepartureTime}}</p>
                    <p>抵達時間:{{To.ArrivalTime}}</p>
                </div>
            </div>
            <div class="passenger">
                <div class="title">旅客資料</div>
                <div class="firstRow">
                    <span>稱謂:{{ passenger.title | title() }}</span>
                </div>
                <div class="secondRow">
                    <span>姓氏:{{passenger.lastName}}</span>
                    <span>名字:{{passenger.name}}</span>
                </div>

                <div class="threeRow">
                    <span>生日:{{passenger.brith | brith() }}</span>
                </div>

                <div class="fourRow">
                    <span>國籍:{{passenger.country | country() }}</span>
                </div>

                <div class="fourRow">
                    <span>護照號碼:{{passenger.passport}}</span>
                </div>
            </div>
            <div class="total">
                機票價格總計 : {{totalPrice}}
            </div>
        </div>
    </div>
</template>

<script>

function zero(date){
    return date < 10 ? "0"+date : date; 
}

export default {
    data(){
        return{
            From:{},
            To:{},
            passenger:{},
            totalPrice:""
        }
    },
    mounted(){
        this.From = this.$store.state.cart.From;
        this.To = this.$store.state.cart.To;
        this.passenger = this.$store.state.passengerData;
        this.totalPrice = this.$store.state.cart.totalPrice;
    },
    filters:{
        title(title){
            if(title === "Mr"){
                return "先生"
            }else{
                return "小姐"
            }
        },
        brith(brith){
            let date = new Date(brith)
            let Y = date.getFullYear();
            let M = date.getMonth()+1;
            let D = date.getDate();
            return ` ${Y} 年 ${zero(M)} 月 ${zero(D)} 日`
        },
        country(country){
            switch(country){
                case 'taiwan':
                    return '台灣'
                break
                case 'japan':
                    return '日本'
                break
                case 'korea':
                    return '韓國'
                break
                case 'singapore':
                    return '新加坡'
                break
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/checkorder.scss';
</style>

