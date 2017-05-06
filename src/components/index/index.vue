<template>
    <div>
        <div class="block">
            <el-carousel height="400px">
                <el-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>
<script>
    export default {}
</script>

<style>
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
