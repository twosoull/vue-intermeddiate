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
                console.log(this.newTodoItem);
                localStorage.setItem(this.newTodoItem,this.newTodoItem);
                this.newTodoItem = '';

                this.$emit("message");
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