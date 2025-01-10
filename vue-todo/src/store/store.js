import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex); //vue의 플러그인을 전역으로 특정 기능을 추가하고 싶을 때 사용한다.

const storage = {
    fetch() {
        const arr= [];
        if (localStorage.length > 0 ) {
            for(let i = 0; i < localStorage.length; i++){
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    },
}

export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch()
    },
    mutations: {
        addOneItem(state, newTodoItem) {
            const obj = {completed: false, item: newTodoItem};
            localStorage.setItem(newTodoItem,JSON.stringify(obj));
            state.todoItems.push(obj);      
        },
        toggleOneItem(state,payload) {
            //item.completed = !item.completed; //안티패턴
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed; //직접 값에 접근한다
            localStorage.removeItem(payload.item.item);
            localStorage.setItem(payload.item.item,JSON.stringify(payload.item));
        },
        removeAll(state) {
            localStorage.clear();
            state.todoItems = [];
        },
        remove(state, payload) {
            localStorage.removeItem(payload.item.item);
            state.todoItems.splice(payload.index,1);
        }
    }
});