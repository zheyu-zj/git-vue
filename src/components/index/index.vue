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
                    <el-table class="table" :data="tableDatas" style="width: 100%" :default-sort="{prop: 'date',order: 'descending'}">
                        <el-table-column label="币名">
                            <template scope="scope">
                                <img :src="scope.row.url" class="tradeList-icon">
                                <span style="margin-left: 10px">{{ scope.row.name }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="newPrice" label="最新价格(CNY)" sortable>
                        </el-table-column>
                        <el-table-column prop="volume24" label="24H成交量" sortable>
                        </el-table-column>
                        <el-table-column prop="turnover24" label="24H成交额(CNY)" sortable>
                        </el-table-column>
                        <el-table-column prop="range24" label="24H涨跌" sortable>
                        </el-table-column>
                        <el-table-column prop="range7" label="7D涨跌" sortable>
                        </el-table-column>
                    </el-table>
                </el-col>
                <el-col :span="6">
                    <a href="javascript:">
                    </a>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import axios from 'axios'
    axios.defaults.baseURL = 'http://localhost:3000';
    Vue.prototype.$http = axios;
    const ERR_OK = 0;
    export default {
        data () {
            return {
                tableDatas: ''
            }
        },
        created: function () {
            this.$http.get('/json/index.json',{withCredentials:true}).then((response) => {
                console.log(response);
                console.log(response.index)
//                response = response.data;
//                if (response.errno === ERR_OK) {
//                    this.tableDatas = response.data;
//                    console.log(this.tableDatas)
//                }
            })
        }
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
