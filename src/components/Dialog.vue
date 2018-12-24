<template>
    <el-dialog
        title="提示"
        :visible.sync="actionDialog"
        width="30%"
        center>
        
        <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
export default {
    data(){
        return{
            centerDialogVisible: false
        }
    },
    props:['actionDialog'],
}
</script>