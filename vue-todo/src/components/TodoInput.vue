<template>
    <div>
        <input type="text" v-model="newTodoItem">
        <button @click="addTodo"> add</button>
    </div>
</template>

<script>
    export default {
        methods : {
            addTodo() {
                this.$emit("message",this.newTodoItem);
                this.newTodoItem = '';
            }
        }, 
        data() {
            return {
                newTodoItem : ''
            }
        }
    }
</script>

<style>

</style>