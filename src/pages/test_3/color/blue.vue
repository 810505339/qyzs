<template>
    <div class="blue" @click.stop="handleBlueClick">
        <span>{{ num }}</span>
        <green></green>
    </div>
</template>

<script>
import green from "./green.vue";
export default {
    name: "blue",
    provide() {
        return {
            greenNum: () => this.greenNum,
            redNum: () => this.redNum,
            handleRedClick: this.handleRedClick,
            handleGreenClick: this.handleGreenClick
        }
    },
    components: {
        green
    },
    data() {
        return {
            num: 0,
            greenNum: 0,
            redNum: 0,
            greenClick: 0, //记录点击绿色次数
            redClick: 0,//记录红色点击次数
        }
    },
    methods: {
        handleBlueClick() {
            this.num += 1
            this.greenNum += 2
            this.redNum += 4
        },
        handleGreenClick() {
            this.greenNum += 1
            this.redNum += 2
            this.greenClick += 1
            if (this.greenClick === 2) {
                this.greenClick = 0
                this.num += 1
            }
        },
        handleRedClick() {
            this.redNum += 1
            this.redClick += 1
            if (this.redClick === 2) {
                this.greenNum += 1
            }
            if (this.redClick === 4) {
                this.redClick = 0
                this.greenNum += 1
                this.num += 1
            }
        }
    },

}
</script>

<style scoped>
</style>
