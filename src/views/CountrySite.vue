<template>
    <div class="site">
        <div class="bgBanner" :style="{backgroundImage:`url(${data.pic})`}">
            <div class="bgMask"></div>
        </div>
        <div class="layout">
            <div class="countryInfo">
                <div class="InfoHead">
                    <img :src="data.flag" width="40">
                    <span>{{ data.country }}</span>
                </div>
                <div class="InfoContent">
                    {{ data.desc }}
                </div>
            </div>
            <div class="toOrder">
                <router-link to="/search">
                    <el-button class="btn" type="danger">立刻前往訂票</el-button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            detailId:"",
            data:{}
        }
    },
    created(){
        const vm = this
        this.detailId = this.$route.params.id;
        console.log(this.detailId);
        this.$http.get(`http://localhost:3000/country?id=${this.detailId}`)
        .then(res => {
            vm.data = res.data[0];
            console.log(res.data)
        })
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/layout.scss';
@import '@/assets/styles/countrysite.scss';
</style>
