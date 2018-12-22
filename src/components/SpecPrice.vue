<template>
    <div class="specPrice">
        <div class="specPriceHead">
            <h2>為您推薦特惠機票</h2>
            <div>2019年2月 出發地 台北</div>
        </div>
        <div class="content">
            <div v-for="(item, index) in data" :key=index>
                <router-link to="/">
                    <div class="card">
                        <div class="cardImage" :style="{backgroundImage: `url(${item.pic})`}">
                            <div class="scrim"></div>
                        </div>
                        <div class="textContainer">
                            <h2 class="title">
                                <span class="city">富士山,</span>
                                <span class="country">日本</span>
                            </h2>
                            <h4 class="subtitle">獲取價格<i class="fas fa-angle-right"></i></h4>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            data:[
                { pic:'https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'},
                { pic:'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'},
                { pic:'https://images.unsplash.com/photo-1510253687831-0f982d7862fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1494&q=80'},
                { pic:'https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'},
                { pic:'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'},
                { pic:'https://images.unsplash.com/photo-1510253687831-0f982d7862fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1494&q=80'},
            ]
        }
    }
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/specPrice.scss';
</style>
