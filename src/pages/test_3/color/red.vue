<template>
    <div class="red" @click.stop="RedClick">
        <span>{{ num }}</span>
    </div>
</template>

<script>
export default {
    name: "red",
    inject: ['redNum', 'handleRedClick'],
    computed: {
        num() {
            return this.redNum()
        }
    },
    methods: {
        RedClick() {
            this.handleRedClick()
        }
    }
}
</script>

<style scoped>
</style>
