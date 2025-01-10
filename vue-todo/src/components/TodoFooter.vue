<template>
    <div>
        <br>
        <button v-on:click="removeAll" type="button">다 삭제하기</button>
    </div>
</template>

<script>
    export default {
        methods : {
            removeAll() {
                this.$store.commit('removeAll')
            }
        }
    }
</script>

<style>

</style>