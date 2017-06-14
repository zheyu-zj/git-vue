<template>
    <div>
        <el-carousel height="400px">
            <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
        <div class="main-warp">
            <a class="new-announcement" href="javascript:"><i class="el-icon-edit"></i>公告：关于文创币官方申请文创币取消每日10%涨跌幅限制公告</a>
            <el-row :gutter="20" style="margin: 0px 0 30px">
                <el-col :span="18">
                    <el-table class="table" :data="coinList" style="width: 100%" :default-sort="{prop: 'Hours24', order: 'descending'}">
                        <el-table-column label="币名" width="180">
                            <template scope="scope">
                                <img :src="scope.row.coin" class="icon">
                                <span style="margin-left: 10px">{{ scope.row.name }}</span>
                                <span style="margin-left: 10px">{{ scope.row.abbreviations }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="latestPrice" label="最新价格(CNY)" sortable>
                        </el-table-column>
                        <el-table-column prop="Hours24" label="24H成交量" sortable>
                        </el-table-column>
                        <el-table-column prop="Turnover24" label="24H成交额(CNY)" sortable width="149">
                        </el-table-column>
                        <el-table-column prop="RiseFall24" label="24H涨跌" sortable>
                        </el-table-column>
                        <el-table-column prop="RiseFall7D" label="7D涨跌" sortable>
                        </el-table-column>
                    </el-table>
                </el-col>
                <el-col :span="6">
                    <div class="sorting_warp">
                        <div class="sorting">
                            <h3>排序</h3>
                            <div>
                                <p @click="options()">{{ option }}<i class="el-icon-caret-bottom"></i></p>
                                <ul v-if="ul">
                                    <li @click="RiseFall()">涨跌幅</li>
                                    <li @click="Hours()">成交量</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <ol class="ol_list">
                                <li v-for="data in brief">
                                    <p>
                                        <img :src="data.coin" class="icon">
                                        {{ data.name }}
                                    <span v-if="ok" class="red">{{ data.RiseFall24 }}</span>
                                        <span v-else class="green">{{ data.Hours24 }}</span>
                                    </p>
                                </li>
                            </ol>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="project-warp">
            <h2>ICO项目</h2>
            <el-row :gutter="20" style="margin: 0 auto;" class="project-main">
                <el-col :span="6">
                    <Icopriject></Icopriject>
                </el-col>
                <el-col :span="6">
                    <Icopriject></Icopriject>
                </el-col>
                <el-col :span="6">
                    <Icopriject></Icopriject>
                </el-col>
                <el-col :span="6">
                    <Icopriject></Icopriject>
                </el-col>
            </el-row>
            <a class="project-more">查看更多项目</a>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    import Icopriject from './Icopriject/index.vue';

    export default {
        components: {
            Icopriject,
            prop:['allProject']
        },
        data () {
            return {
                option: '涨跌幅',
                ul: false,
                ok: true,
            }
        },
        computed: {
            ...mapState({
                coinList: state => state.coinList.coinList,
                allProject: state => state.allProject.allProject,
            }),
            brief: function () {
                if (this.ok === true) {
                    let array = this.coinList;
                    let i = 0,
                        len = array.length,
                        j, d;
                    for (; i < len; i++) {
                        for (j = 0; j < len; j++) {
                            if (array[i].RiseFall24 > array[j].RiseFall24) {
                                d = array[j].RiseFall24;
                                array[j].RiseFall24 = array[i].RiseFall24;
                                array[i].RiseFall24 = d;
                            }
                        }
                    }
                    return array;
                } else {
                    let array = this.coinList;
                    let i = 0,
                        len = array.length,
                        j, d;
                    for (; i < len; i++) {
                        for (j = 0; j < len; j++) {
                            if (array[i].Hours24 > array[j].Hours24) {
                                d = array[j].Hours24;
                                array[j].Hours24 = array[i].Hours24;
                                array[i].Hours24 = d;
                            }
                        }
                    }
                    return array;
                }
            },
        },
        methods: {
            options(){
                if (this.ul === true) {
                    this.ul = false;
                } else {
                    this.ul = true;
                }
            },
            RiseFall(){
                this.ok = true;
                this.option = '涨跌幅';
                this.ul = false;
            },
            Hours(){
                this.ok = false;
                this.option = '成交量';
                this.ul = false;
            },
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
