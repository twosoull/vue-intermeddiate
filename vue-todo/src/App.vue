<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:message="addTodoItem"></TodoInput>
    <TodoList v-bind:propsData="todoItems" v-on:remove="remove"></TodoList>
    <TodoFooter v-on:removeAll="removeAll"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoInput from './components/TodoInput.vue'
import TodoFooter from './components/TodoFooter.vue'



export default {
  data(){
    return{
      todoItems: []
    }
  },
  created: function() {
      if (localStorage.length > 0 ) {
          for(var i = 0; i < localStorage.length; i++){
              if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                  this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                  console.log(localStorage.key(i));
              }
          }
      }
  },
  methods: {
    addTodoItem(newTodoItem) {
      var obj = {completed: false, item: newTodoItem};
      localStorage.setItem(newTodoItem,JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeAll() {
      console.log('dd');
      localStorage.clear();
      this.todoItems = [];
    },
    remove(item, index) {
      localStorage.removeItem(item.item);
      this.todoItems.splice(index,1);
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
