<template>
    <div class="layout">
        <div class="member">
            <div class="profiles">
                <div class="header">
                    <img :src=userInfo.picture alt="">
                    <span>您好！</span>
                    <span>{{userInfo.name}}</span>
                </div>
                <ul class="link">
                    <li>
                        <router-link to="/member/createdata" active-class="active">
                            <aside>
                                <i class="fas fa-passport"></i>
                            </aside>
                            <div class="containerText">
                                <span>新增旅客</span>
                            </div>
                            <aside>
                                <i class="fas fa-angle-right"></i>
                            </aside>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/member/account" active-class="active">
                            <aside><i class="fas fa-user-circle"></i></aside>
                            <div class="containerText"><span>帳號</span></div>
                            <aside><i class="fas fa-angle-right"></i></aside>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="showRouter">
                <router-view></router-view>
            </div>
            <div class="logOutBtn"></div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            userInfo:this.$store.state.userInfo
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/member.scss';
@import '@/assets/styles/layout.scss';
</style>

