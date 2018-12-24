<template>
    <div class="specPrice">
        <div class="specPriceHead">
            <h2>為您推薦特惠機票</h2>
            <div>2019年2月 出發地 台北</div>
        </div>
        <div class="content">
            <div v-for="(item, index) in data" :key=index>
                <div class="card" @click="toCountrySite(item)">
                    <div class="cardImage" :style="{backgroundImage: `url(${item.pic})`}">
                        <div class="scrim"></div>
                    </div>
                    <div class="textContainer">
                        <h2 class="title">
                            <span class="country">{{item.country}}</span>
                        </h2>
                        <h4 class="subtitle">最低價格:{{item.price}}<i class="fas fa-angle-right"></i></h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            data:[
                {
                    id:"jpjrigvy27yr",
                    country:"日本",
                    price:"8,000",
                    pic:'https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
                },
                {
                    id:"NWjrigvy27yr",
                    country:"挪威",
                    price:"26,000",
                    pic:'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
                },
                {
                    id:"TKjrigvy27yr",
                    country:"土耳其",
                    price:"18,000",
                    pic:'https://images.unsplash.com/photo-1510253687831-0f982d7862fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1494&q=80'
                },
                {
                    id:"SWjrigvy27yr",
                    country:"瑞士",
                    price:"23,000",
                    pic:'https://images.unsplash.com/photo-1530841186512-95c4e728f99e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80'
                },
                {
                    id:"EPjrigvy27yr",
                    country:"埃及",
                    price:"20,000",
                    pic:'https://images.unsplash.com/photo-1523478482487-1eed2b3d9939?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
                },
                {
                    id:"CDjrigvy27yr",
                    country:"加拿大",
                    price:"23,000",
                    pic:'https://images.unsplash.com/photo-1539667547529-84c607280d20?ixlib=rb-1.2.1&auto=format&fit=crop&w=1486&q=80'
                }
            ]
        }
    },
    methods:{
        toCountrySite(item){
            this.$router.push(`/countrySite/${item.id}`)
        }
    }
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/specPrice.scss';
</style>
