<template>
    <div class="green" @click.stop="greedClick">
        <span>{{ num }}</span>

        <red></red>
    </div>
</template>

<script>
import red from "./red.vue";
export default {
    name: "green",
    inject: ['greenNum', 'handleGreenClick'],
    components: {
        red
    },
    data() {
        return {

        }
    },
    computed: {
        num() {
            return this.greenNum()
        }
    },
    methods: {
        greedClick() {
            this.handleGreenClick()
        }
    }
}
</script>

<style scoped>
</style>
