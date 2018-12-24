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
                <el-button size="mini" round @click="login" v-if="!accessToken">
                    <div class="lang-btn">
                        <img src="@/assets/img/login.svg" alt="flag" width="20">
                        <span>登入</span>
                    </div>
                </el-button>
                
                <el-button size="mini" round v-else>
                    <router-link to="/member">
                        <div class="lang-btn">
                            <img src="@/assets/img/login.svg" alt="flag" width="20">
                            <span>會員管理</span>
                        </div>
                    </router-link>
                </el-button>

                <el-button size="mini" round @click="logout">
                    <router-link to="/">
                        <div class="lang-btn">
                        <img src="@/assets/img/login.svg" alt="flag" width="20">
                        <span>登出</span>
                    </div>
                    </router-link>
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
            actionDialog:false,
            accessToken:this.$store.state.accessToken,
        }
    },
    methods: {
        toggleDialog(){
            this.actionDialog = true;
        },
        login () {
            let vm = this
            FB.login(function (response) {
                vm.$store.dispatch('saveAccessToken',response.authResponse.accessToken);
                vm.getProfile();
                vm.accessToken = (vm.$store.state.accessToken);
                console.log('res', response)
            }, {
                scope: 'email, public_profile',
                return_scopes: true
            })
        },
        logout () {
            let vm = this
            FB.logout(function (response) {
                vm.$store.dispatch('saveAccessToken',response.authResponse.accessToken);
            })
        },
        getProfile () {
            let vm = this
            FB.api('/me?fields=name,id,email,picture', function (response) {
                vm.$store.dispatch('getUserInfo',response);
            })
        },
    },
    mounted(){
        const vm = this
        // facebook 初始化
        window.fbAsyncInit = function() {
        FB.init({
            appId      : '153216555532092',
            cookie     : true,
            xfbml      : true,
            version    : 'v2.9'
        });
        FB.AppEvents.logPageView();
        
        // Get FB Login Status
        FB.getLoginStatus( response => {
                vm.getProfile();
                if(response.status === 'unknown') vm.$store.dispatch('saveAccessToken',response.status);
                vm.$store.dispatch('saveAccessToken',response.authResponse.accessToken);// 這裡可以得到 fb 回傳的結果
                vm.accessToken = (vm.$store.state.accessToken);
            })
        };
    },
}
</script>


<style lang="sass" scoped>
@import '@/assets/styles/layout.scss'
@import '@/assets/styles/page_head.scss'
</style>
