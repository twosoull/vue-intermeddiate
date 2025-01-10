<template>
    <div>
        <input type="text" v-model="newTodoItem">
        <button @click="addTodo"> add</button>
        <VModal v-bind:show="showModal" v-on:close="closeModal">
            <h4 slot="header">무언가를 입력하세요</h4>
            <h4 slot="body">경고입니당 
                <button type="button" @click="closeModal">X</button>

            </h4>
            <h4 slot="footer">copy right</h4>
            <!--
                <template #body>
                    <h4>경고!</h4>
                </template>
            -->
        </VModal>
    </div>

</template>

<script>
    import VModal from './common/VModal.vue';
    export default {
        methods : {
            addTodo() {
                if( this.newTodoItem != '') {
                    //this.$emit("message",this.newTodoItem);
                    this.$store.commit('addOneItem', this.newTodoItem);
                    this.clearInput();

                } else {
                    this.showModal = true;
                }
            },
            closeModal() {
                this.showModal = false;
            },
            clearInput(){
                this.newTodoItem = '';
            }
        }, 
        data() {
            return {
                newTodoItem : '',
                showModal : false
            }
        },
        components: {
            VModal
        }
    }
</script>

<style>

</style>