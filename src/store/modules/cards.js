export default{
    state: {//місце для зберігання інформації
        cards:[
            {
              name:'Miroslav',
              number:'92345', 
              id: 0
            }
          ]
    },

    getters: {// елемент для зберігання функцій які будуть повертати інформацію 
        allCards(state){//
            return state.cards
        }
    },

    actions: {//елемент для зберігання функцій які будуть викликати функції 
        //з mutations щоб змінювати інформацію в state(вони можуть бути асинхронними) 
    },

    mutations: {// елемент для зберігання функцій які будуть змінювати інформацію в state
        createCard(state, newCard){// приймають 2 занчення (елемет зі state та вхідне значення)
            state.cards.unshift(newCard)
        },

        deleteCard(state, id){
            alert(id)
            let arr = []
            state.cards.forEach(function(element) {
                if(element.id != id){
                    arr.push(element)
            }})
            state.cards = arr
        }
    }
}