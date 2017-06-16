<template>
    <div class="project">
        <a :href="allProject.href">
            <img :src="allProject.img">
            <p v-if="allProject.state === 1" class="underway">进行中</p>
            <p v-if="allProject.state === 2" class="achieve">已完成</p>
            <p v-if="allProject.state === 3" class="preheat">暂停中</p>
            <p v-if="allProject.state === 4" class="suspend">预热中</p>
            <p v-if="allProject.state === 5" class="achieve">申请中</p>
            <h6>{{ allProject.title }}</h6>
            <div>
                <p>
                    <span>{{ allProject.target }}</span><br>
                    ICO目标
                <p>
                    <span>{{ allProject.plat }}%</span><br>
                    已募集
                </p>
            </div>
        </a>
    </div>
</template>

<script>
    export default {
        data(){
            return {}
        },
        props: {
            allProject: [Object]
        }
    }
</script>

<style lang="scss">
    @import "index.scss";

</style>
