<template>
    <div class="news">
        <img v-if="newsImg.length !== 0" :src="newsImg[index]">
        <ul>
            <li v-for="(news, index) in news_list" :key="news.id" v-if="index < 5" @mouseover="newsImages(index)">
                <a :href="news.href">
                    <h6>{{ news.title }}</h6>
                    <span>{{ news.time }}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                index: 0,
            }
        },
        computed: {
            newsImg: function () {
                let array = [];
                this.news_list.forEach((value) => {
                    if (value.src) {
                        array.push(value.src)
                    }
                });
                return array;
            },
        },
        props: {
            news_list: ''
        },
        methods: {
            newsImages(index){
                this.index = index;
            }
        }
    }
</script>

<style lang="scss">
    @import "./index";
</style>
