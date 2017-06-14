<template>
    <div class="project">
        <a href="">
            <img src="" alt="">
            <p class="achieve">{{ state }}</p>
            <h6>{{ title }}</h6>
            <div>
                <p>
                    <span>{{ copies }}</span><br>
                    ICO目标
                <p>
                    <span>{{ plan }}</span><br>
                    已募集
                </p>
            </div>
        </a>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                state:'已完成',
                title:'钻石币ICO',
                copies:'200份',
                plan:'100.00%',
            }
        }
    }
</script>

<style lang="scss">
    @import "index.scss";

</style>
