<template>
    <div id="app">
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/trade">交易中心</el-menu-item>
            <el-menu-item index="/ico">ICO中心</el-menu-item>
            <el-menu-item index="/financial">财务中心</el-menu-item>
            <el-menu-item index="/security">安全中心</el-menu-item>
            <el-menu-item index="/guide">平台指南</el-menu-item>
            <el-menu-item index="/login">登录</el-menu-item>
            <el-menu-item index="/registered">注册</el-menu-item>
        </el-menu>
        </el-menu>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style>
</style>
