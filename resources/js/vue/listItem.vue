<template>
    <div class="item">
        <input 
        type="checkbox"
        @change="updateCheck()"
        v-model="item.completed"

        />
        <span :class="[item.completed ? 'completed' : 'uncompleted', 'itemText']"> 
            {{item.name}} 
        </span>
        <button  class="trashCan">
                <font-awesome-icon icon="trash" @click="removeItem()"/>
        </button>
    </div>
</template>

<script>

    export default {
        emits: ["itemChanged"],
        props:['item'],
        methods: {
            updateCheck(){
                axios.put('api/item/'+ this.item.id, {
                    item: this.item
                })
                .then(response => {
                    if(response.status==200){
                        this.$emit('itemChanged')
                    }
                })
                .catch(error => {
                    console.log(error);
                })
            },
            removeItem() {
            axios.delete('api/item/' + this.item.id)
            .then( response=>
                {
                    if(response.status==200){
                        this.$emit('itemChanged')
                }
                }
            )
            .catch(error => {
                    console.log(error);
                })
        }
        }

        
    }

</script>

<style>
    .completed {
        text-decoration: line-through;
        color: #999999;
            }
    .itemText {
        width: 100%;
        margin-left: 20px;
        margin-right: 20px;
    }
    .item {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .trashCan {
        background: #e6e6e6;
        border: none;
        outline: none;
        color: #FF0000;
    }

    .uncompleted {
        text-decoration: none;
        color: #ae256a;
    }
</style>