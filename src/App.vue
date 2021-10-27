<template>
  <div id="app">
    <div class="CreateCard">
      <div>
        name:<input type="text" v-model="name">
      </div>
      <div>
        number:<input type="text" v-model="number">
      </div>
      <button @click="submit">add</button>
    </div>

    <card v-for="card in allCards" 
    :card = card :key = card.Id
    /> <!-- allCards - геттер який знаходиттся в computed  -->
  </div>
      
</template>

<script>
import Card from "@/components/Card"

import {mapGetters} from 'vuex' // імпорт Getters
import {mapMutations} from 'vuex' // імпорт Mutations

export default {
  name: 'App',
  data() {
    return {
      name:'',
      number:'',
      id: 1
    }
  },
  methods:{
    ...mapMutations(['createCard']),// імпорт мутацій які будуть використовуватись
    submit(){
      this.createCard({ //виклик мутації в дужках входящі данні
        name: this.name,
        number: this.number,
        id: this.id,
      })
      this.id++
      this.name = ''
      this.number = ''
    }
  },
  computed:{
     ...mapGetters(['allCards']), //імпорт гетерів які будуть використовуватись 
  },
  components: {
    Card
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.CreateCard {
  width: 100%;
  border-bottom: 1px black solid;
  padding-bottom: 1%;
  margin-bottom: 3%;
}
</style>
