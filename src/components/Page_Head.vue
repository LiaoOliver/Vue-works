<template>
    <div class="layout">
        <div class="headerFirstRow">
            <router-link to="/">
                <img src="@/assets/img/webLogo.png" alt="" width="170">
            </router-link>
            <div class="controller">
                <router-link to="/">
                    <el-button size="mini" round>
                        <div class="lang-btn">
                            <img src="@/assets/img/taiwan.svg" alt="flag" width="20">
                            <span>繁體中文</span>
                        </div>
                    </el-button>
                </router-link>
                <!-- <el-button type="text" @click="toggleDialog">点击打开 Dialog</el-button> -->
                
                <el-button size="mini" round @click="toggleDialog">
                    <div class="lang-btn">
                        <img src="@/assets/img/login.svg" alt="flag" width="20">
                        <span>登入</span>
                    </div>
                </el-button>
                <Dialog :actionDialog=actionDialog></Dialog>
            </div>
            
        </div>
        <div class="functionTag">
            <router-link to="/search">
                <div class="ticket tag">
                    <img src="@/assets/img/airplane.svg" alt="ticket" width="20">
                    <span>機票</span>
                </div>
            </router-link>
            <router-link to="/">
                <div class="bookingCars tag">
                    <img src="@/assets/img/car.svg" alt="cars" width="20">
                    <span>租車</span>
                </div>
            </router-link>
            <router-link to="/">
                <div class="bookingHotels tag">
                    <img src="@/assets/img/bed.svg" alt="hotels" width="20">
                    <span>酒店</span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import Dialog from './Dialog'
export default {
    components:{
        Dialog
    },
    data(){
        return{
            actionDialog:false
        }
    },
    methods: {
        toggleDialog(){
            this.actionDialog = true;
        }
    },
}
</script>


<style lang="sass" scoped>
@import '@/assets/styles/layout.scss'
@import '@/assets/styles/page_head.scss'
</style>
