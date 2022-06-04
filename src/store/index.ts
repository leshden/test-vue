import { createStore } from 'vuex'

interface Region {
  id : number,
  name: string;
}

export default createStore({
  state: {
    regions: [],
    groups: {},
    types: {}
  },
  mutations: {
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
