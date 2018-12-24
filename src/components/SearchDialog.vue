<template>
    <div class="searchDialig">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item class="tourType">
                <el-radio-group v-model="formInline.type">
                    <el-radio class="typeOption" label="roundTrip">來回</el-radio>
                    <el-radio class="typeOption" label="oneWay">單程</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item>
                <el-select class="depAirport" v-model="formInline.depAirport" placeholder="出發城市,機場">
                    <el-option-group
                    v-for="group in options3"
                    :key="group.label"
                    :label="group.label">
                        <el-option
                            v-for="item in group.options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-option-group>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-select class="arrivedAirport" v-model="formInline.arrivedAirport" placeholder="抵達城市,機場">
                    <el-option-group
                    v-for="group in options3"
                    :key="group.label"
                    :label="group.label">
                        <el-option
                            v-for="item in group.options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-option-group>
                </el-select>
            </el-form-item>
            <el-form-item>
                <div class="block">
                    <span class="demonstration"></span>
                    <el-date-picker
                    v-model="formInline.tourTime"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="去程時間"
                    end-placeholder="回程時間">
                    </el-date-picker>
                </div>
            </el-form-item>
            <el-form-item>
                <router-link to="/searchresults">
                    <el-button type="primary" @click="onSubmit">送出</el-button>
                </router-link>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        formInline: {
          depAirport:'',
          arrivedAirport: '',
          tourTime: '',
          type:''
        },
        options3: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }]
      }
    },
    methods: {
      onSubmit() {
        
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/styles/searchDialog.scss';
</style>
