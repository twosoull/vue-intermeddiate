<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:message="getTodoList"></TodoInput>
    <TodoList props="todoList"></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoInput from './components/TodoInput.vue'
import TodoFooter from './components/TodoFooter.vue'



export default {
  methods: {
    getTodoList() {
      this.todoList = localStorage.getItem;

    }
  },
  data(){
    return{
      todoList : ''
    }
  },
  components: {
    'TodoHeader' : TodoHeader,
    'TodoList' : TodoList,
    'TodoInput' : TodoInput,
    'TodoFooter' : TodoFooter
  }
}
</script>

<style>

</style>
