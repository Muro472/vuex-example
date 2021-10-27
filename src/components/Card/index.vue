<template>
    <div class="Card">
      <div>
        name:{{card.name}}
      </div>
      <div>
        number:{{card.number}}
      </div>
      <div>
        id:{{card.id}}
      </div>
      <div>
          <button @click="del(card.id)">add</button>
      </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
    export default {
        name:'Card',
        props:{
            card:{
                type:Object,
                default: () => ({})
            }
        },
        methods: {
            ...mapMutations(['deleteCard']),
            del(id){
                this.deleteCard(id)
            }
        },
    }
</script>

<style lang="css" scoped>
.Card {
  border: 2px solid green;
  border-radius: 3px;
  margin: 1%;
  padding: 2%;
}
</style>