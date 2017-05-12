<template>
    <div>
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
    </div>
</template>

<script>
    const ERR_OK = 200;
    export default {
        data () {
            return {
                tableDatas: ''
            }
        },
        created: function () {
            this.$http.get('/json/index.json').then((response) => {
                if (response.status === ERR_OK) {
                    this.tableDatas = response.data.index;
                }
            })
        }
    }
</script>

<style>
    .cell {
        cursor: pointer;
    }
</style>
