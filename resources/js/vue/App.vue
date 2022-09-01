<template>
    <div class="todoListContainer">
       <div class="heading">
        <h2 id="title">To Do List Tracker</h2>
        <add-item-form 
        v-on:reloadList="getList()"
        />
       </div>
      <list-view 
      :items="items"
      v-on:reloadList="getList()"
      />
    </div>
</template>

<script>
import AddItemForm from './addItemForm.vue';
import ListView from './listView.vue';

    export default {
        emits: ["reloadList", "itemChanged"],
        components: { 
            AddItemForm,
            ListView
        },
        
        data() {
            return {
                items: []
            }
        },

        methods: {
            getList() {
                axios.get('api/items')
                .then( response => {
                    this.items=response.data
                } )
                .catch( error => {
                    console.log(error);
                } )
            }
        },
        created() {
            this.getList()
        },
    }

</script>

<style scoped>
.todoListContainer {
width: 500px;
margin: auto;
}

.heading {
    background: #e6e6e6;
    padding: 10px;
}

#title {
    text-align: center;
}
</style>