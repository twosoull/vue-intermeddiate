<template>
    <div>
        <br>
        <button v-on:click="removeAll" type="button">다 삭제하기</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        methods : {
            ...mapMutations(['removeAll'])
        }
    }
</script>

<style>

</style>