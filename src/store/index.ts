import { createStore } from 'vuex'

interface Region {
  id : number,
  name: string;
}

export default createStore({
  state: {
    todos: ['String1', 'String2', 'String3'],
    regions: []
  },
  mutations: {
    ADD_TODO (state, todo: string) {
      state.todos.push(todo)
    },
    DELETE_TODO (state, todo: string) {
      state.todos = state.todos.filter(t=> t!== todo)
    }
  },
  actions: {
    addTodo({commit}, todo: string) {
      commit('ADD_TODO', todo);
    },
    deleteTodo({commit}, todo: string) {
      commit('DELETE_TODO', todo);
    }
  }
})
