<template>
    <div>
        <el-carousel height="400px">
            <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
        <div class="main-warp">
            <a class="new-announcement" href="javascript:"><i class="el-icon-edit"></i>公告：关于文创币官方申请文创币取消每日10%涨跌幅限制公告</a>
            <el-row>
                <el-col :span="18">
                    <CurrencyList></CurrencyList>
                </el-col>
                <el-col :span="6">
                    <a href="javascript:">
                        adas的撒多阿萨德是啊
                    </a>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    import CurrencyList from './Currency-list/Currency-list.vue'
    export default {
        components: {CurrencyList}
    }
</script>

<style lang="scss">
    @import "index.scss";

    .el-carousel__item h3 {
        color: #475669;
        font-size: 50px;
        line-height: 400px;
        margin: 0;
        text-align: center;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>
