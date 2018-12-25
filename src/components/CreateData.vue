
<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="稱謂" prop="title">
            <el-select v-model="ruleForm.title" placeholder="請選擇稱謂">
            <el-option label="先生" value="Mr"></el-option>
            <el-option label="小姐" value="Mrs"></el-option>
            </el-select>
        </el-form-item>

        <el-form-item label="名字" prop="name">
            <el-input v-model="ruleForm.name" placeholder="請輸入護照上的英文名字"></el-input>
        </el-form-item>

        <el-form-item label="姓氏" prop="lastName">
            <el-input v-model="ruleForm.lastName" placeholder="請輸入護照上的英文姓氏"></el-input>
        </el-form-item>
        <el-form-item label="性別" prop="gender">
            <el-select v-model="ruleForm.gender" placeholder="請選擇性別">
            <el-option label="男性" value="man"></el-option>
            <el-option label="女性" value="female"></el-option>
            </el-select>
        </el-form-item>

        <el-form-item label="出生日期" prop="brith">
            <el-date-picker type="date" placeholder="請輸入生日" v-model="ruleForm.brith"></el-date-picker>
        </el-form-item>

        <el-form-item label="國籍" prop="country">
            <el-select v-model="ruleForm.country" placeholder="請選擇國籍">
            <el-option label="台灣" value="taiwan">
                <img src="../assets/img/taiwan.svg" alt="" width="20">
                <span>台灣</span>
            </el-option>
            <el-option label="日本" value="japan">
                <img src="../assets/img/japan.svg" alt="" width="20">
                <span>日本</span>
            </el-option>
            <el-option label="韓國" value="korea">
                <img src="../assets/img/south-korea.svg" alt="" width="20">
                <span>韓國</span>
            </el-option>
            <el-option label="新加坡" value="singapore">
                <img src="../assets/img/singapore.svg" alt="" width="20">
                <span>新加坡</span>
            </el-option>
            </el-select>
        </el-form-item>

        <el-form-item label="護照號碼" prop="passport">
            <el-input v-model.number="ruleForm.passport"></el-input>
        </el-form-item>
        
        <el-form-item v-if=closesumbit>
            <el-button type="primary" @click="submitForm('ruleForm')">確認送出</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
  export default {
      props:['closesumbit'],
    data() {
      return {
        ruleForm: {
            title:"",
            name:"",
            brith:"",
            lastName:"",
            gender:"",
            country:"",
            passport:""
        },
        toRouterLink:false,
        rules: {
            title:{ required: true, message: '請輸入稱謂', trigger: 'blur' },
            name:{ required: true, message: '請輸入名字', trigger: 'blur' },
            lastName:{ required: true, message: '請輸入姓氏', trigger: 'blur'},
            gender:{ required: true, message: '請輸入性別', trigger: 'blur'},
            brith:{ required: true, message: '請輸入生日', trigger: 'blur'},
            country:{ required: true, message: '請輸入國籍', trigger: 'blur'},
            passport:[
                { required: true, message: '請輸入護照號碼', trigger: 'blur'},
                { type: 'number', message: '請輸入數字', trigger: 'blur'}
            ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$store.dispatch('addpassengerData', this.ruleForm);
            if(this.toRouterLink) this.$router.push(this.routerName)
            return true;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
        
      }
    },
    mounted(){
        this.$bus.$on('verification', (router)=>{
            this.toRouterLink = true
            this.routerName = router
            this.submitForm('ruleForm');
        })
    }
  }
</script>