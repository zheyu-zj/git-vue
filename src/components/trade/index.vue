<template>
    <el-row class="coinDetails-warp">
        <el-col :span="15" class="coinDetails">
            <div class="coinList">
                <div class="coinName" @click="coinLists()">
                    <img :src="coin">
                    <span>{{ name }} {{ abbreviations }}</span>
                    <i class="el-icon-caret-bottom"></i>
                </div>
                <ul v-if="show === 1">
                    <li v-for="(coin, index) in cion_list" :key="coin.id" @click="fn(index)">
                        <a :href="index">
                            <img :src="coin.coin" alt="">
                            <span>{{ coin.name }} {{ coin.abbreviations }}</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="coinWebsite">
                <a href="">官方网站</a>
                <a href="">货币详情</a>
            </div>
            <ul class="coin">
                <li>
                    <p>
                        当前价格<br>
                        <span>{{ cion_list[$route.path.split('/')[2]].latestPrice }}</span>
                    </p>
                </li>
                <li>
                    <p>
                        涨跌幅<br>
                        <span>{{ cion_list[$route.path.split('/')[2]].Hours24 }}</span>
                    </p>
                </li>
                <li>
                    <p>
                        最高价<br>
                        <span>{{ cion_list[$route.path.split('/')[2]].Turnover24 }}</span>
                    </p>
                </li>
                <li>
                    <p>
                        最低价<br>
                        <span>{{ cion_list[$route.path.split('/')[2]].RiseFall24 }}</span>
                    </p>
                </li>
                <li>
                    <p>
                        成交量<br>
                        <span>{{ cion_list[$route.path.split('/')[2]].RiseFall7D }}</span>
                    </p>
                </li>
            </ul>

        </el-col>
        <el-col :span="6"></el-col>
    </el-row>
</template>

<script type="text/ecmascript-6">
    import {mapState} from 'vuex';
    export default {
        data(){
            return {
                show: 0,
            }
        },
        created(){
        },
        computed: {
            ...mapState({
                cion_list: state => state.coinList.coinList,
                coin: function () {
                    if (this.cion_list[this.$route.path.split('/')[2]]) {
                        return this.cion_list[this.$route.path.split('/')[2]].coin
                    }
                },
                name: function () {
                    if (this.cion_list[this.$route.path.split('/')[2]]) {
                        return this.cion_list[this.$route.path.split('/')[2]].name
                    }
                },
                abbreviations: function () {
                    if (this.cion_list[this.$route.path.split('/')[2]]) {
                        return this.cion_list[this.$route.path.split('/')[2]].abbreviations
                    }
                },
            }),
        },
        methods: {
            fn(index) {
                this.index = index
            },
            coinLists(){
                this.show = 1
            }
        },
        watch: {}
    }
</script>

<style lang="scss">
    @import './index.scss';
</style>
