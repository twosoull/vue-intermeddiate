<template>
    <div>
        <ul>
            <li v-for="(item,index) in propsData" v-bind:key="item.item">
                <div v-on:click="toggleComplete(item, index)" v-bind:class="{good : item.completed}">췍</div>
                {{ item.item }}
            <button type="button" v-on:click="remove(item,index)">삭제</button></li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['propsData'],
        methods : {
            remove(item,index) {
                console.log("삭제");
                this.$emit('remove', item, index);
            },
            toggleComplete(item, index) {
                console.log(item);
                item.completed = !item.completed;
                localStorage.removeItem(item);
                localStorage.setItem(item.item,JSON.stringify(item));
            }
        }
    }
</script>

<style>

</style>