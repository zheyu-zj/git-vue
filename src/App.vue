<template>
    <div id="app">
        <header>
            <div class="header-warp">
                <el-row>
                    <el-col :span="6">
                        <a href="/" class="header-logo-a">
                            <img src="https://ofybqrgr4.qnssl.com/images/header_logo.png" class="header_logo">
                        </a>
                        <!--<div class="grid-content bg-purple-dark"></div>-->
                    </el-col>
                    <el-col :span="14">
                        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
                            <el-menu-item index="/">首页</el-menu-item>
                            <el-submenu index="/trade">
                                <template slot="title">交易中心</template>
                                <el-menu-item index="/trade/1">钻石币</el-menu-item>
                                <el-menu-item index="/trade/2">莱特币</el-menu-item>
                                <el-menu-item index="/trade/3">比特币</el-menu-item>
                            </el-submenu>
                            <el-menu-item index="/ico">ICO中心</el-menu-item>
                            <el-menu-item index="/financial">财务中心</el-menu-item>
                            <el-menu-item index="/security">安全中心</el-menu-item>
                            <el-menu-item index="/guide">平台指南</el-menu-item>
                        </el-menu>
                    </el-col>
                    <el-col :span="4">
                        <el-menu theme="dark" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
                            <el-menu-item index="/login" class="">登录</el-menu-item>
                            <el-menu-item index="/registered">注册</el-menu-item>
                        </el-menu>
                    </el-col>
                </el-row>
            </div>
        </header>
        <main>
            <router-view></router-view>
        </main>
        <footer>
            <div class="footer">
                <p>客服QQ：1994683272  / 2308793632  / 2898446310 | 商务合作：business@lianjinbox.com</p>
                <p>Copyright © 2016 - WWW.LIANJINBOX.COM All Rights Reserved</p>
                <p>京ICP备16055739号-1 | 京公网安备 11010802022373号</p>
                <p>风险警告：由于数字货币交易风险较大，易受外界因素影响，价格波动较大，我们强烈建议您在自身能承受的风险范围内参与数字货币交易。</p>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data() {
            return {
                activeIndex: '/',
            };
        },
        methods: {
            load(){
                this.$store.dispatch('get_coin_list');
                this.$store.dispatch('get_project_list');
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        created(){
            this.load();
        },
        watch: {
            '$route': 'load'
        },
    }
</script>

<style lang="scss">
    @import "./assets/sass/main.scss";
</style>
