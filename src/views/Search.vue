<template>
    <div class="search">
        <div class="HeadBanner">
            <h1>訂位購票</h1>
            <div class="bannerMask"></div>
        </div>
        <div class="layout">
            <searchDialog></searchDialog>
            <div class="textArea">
                <div>注意事項</div>                
                <ol>
                    <li>請您於購票前閱讀本公司之運輸條款、機票使用規定、行李規定及相關免責規定。 如您已確認訂位並完成付款手續，即代表為您同意運送條款等前述相關規定。</li>
                    <li>依據台灣消費者保護法第19條第2項但書規定所增訂之通訊交易合理例外情事，網路購買機票不適用七天解除權。如於購買機票後欲辦理退票，應遵照本公司退票規定，按實際已搭乘行程之適用票價計算。 </li>
                    <li>依據民航法規40-3條「民用航空運輸業，應將航空器機齡、飛航時數、最近一次維修紀 錄及航空器駕駛員飛航時數等資料公開，作為乘客選擇之參考」。若需查詢中華航空機隊資訊 請見此。</li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script>
import searchDialog from '@/components/SearchDialog.vue'
export default {
    components:{
        searchDialog
    }
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/search.scss';
@import '@/assets/styles/layout.scss';
</style>
