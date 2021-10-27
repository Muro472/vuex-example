import Vue from "vue" //підключення vue
import cards from "./modules/cards" // підключення vuex

Vue.use(Vuex) // підключення vuex до проекту

import Vuex from "vuex" // імпортування модулів з інформацією
//...


export default new Vuex.Store({ // створення обєкта vuex
    modules: {
        cards, // передача назв сторонніх модулів
        //..
    }
})