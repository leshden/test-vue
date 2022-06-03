import { createStore } from 'vuex'

interface Region {
  id : number,
  name: string;
}

export default createStore({
  state: {
    todos: ['String1', 'String2', 'String3'],
    regions: [],
    groups: {},
    types: {}
  },
  mutations: {
    ADD_TODO (state, todo: string) {
      state.todos.push(todo)
    },
    DELETE_TODO (state, todo: string) {
      state.todos = state.todos.filter(t=> t!== todo)
    },
    UPDATE_REGIONS (state, regions: any) {
      state.regions = regions;
    },
    UPDATE_GROUPS (state, groups: any) {
      state.groups = groups;
    },
    UPDATE_TYPES (state, types: object) {
      state.types = types;
    }
  },
  actions: {
    addTodo({commit}, todo: string) {
      commit('ADD_TODO', todo);
    },
    deleteTodo({commit}, todo: string) {
      commit('DELETE_TODO', todo);
    },
    updateRegions({commit}, regions: any) {
      commit('UPDATE_REGIONS', regions);
    },
    updateGroups({commit}, groups: any) {
      commit('UPDATE_GROUPS', groups);
    },
    updateTypes({commit}, types: object) {
      commit('UPDATE_TYPES', types);
    }
  }
})
