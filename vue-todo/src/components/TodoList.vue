<template>
    <div>
        <TransitionGroup name="list" tag="ul">
            <li v-for="(item,index) in this.$store.state.todoItems" v-bind:key="item.item">
                <div v-on:click="toggleComplete(item, index)" v-bind:class="{good : item.completed}">췍</div>
                {{ item.item  }}
                <button type="button" v-on:click="remove(item,index)">삭제</button>
            </li>
        </TransitionGroup>
    </div>
</template>

<script>
    export default {
        methods : {
            remove(item,index) {
                //this.$emit('remove', item, index);
                this.$store.commit('remove',{ item, index })
            },
            toggleComplete(item, index) {
                //this.$emit('toggleOneItem', item, index);
                this.$store.commit('toggleOneItem', {item, index});
            }
        }
    }
</script>

<style>
/* 리스트 아이템 트랜지션 효과 */
/* 1. declare transition */
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
  transition: all 1s;
}

.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
opacity: 0;
transform: translateY(30px);
}
</style>