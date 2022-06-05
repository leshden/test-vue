import { createStore } from 'vuex'
import DeclarationInfo from './declaration-info'

export interface Selector {
  id : number
  name: string
}

export default createStore({
  state: {
    //update
    declInfo: new DeclarationInfo(),

    //upload
    regions: [],
    groups: {},
    types: {}
  },
  mutations: {
    //upload
    UPLOAD_REGIONS (state, regions: any) {
      state.regions = regions;
    },
    UPLOAD_GROUPS (state, groups: any) {
      state.groups = groups;
    },
    UPLOAD_TYPES (state, types: object) {
      state.types = types;
    },

    //update
    UPDATE_REGION (state, region: string) {
      state.declInfo.setRegion(region);
    },
    UPDATE_GROUP (state, group: string) {
      state.declInfo.setGroup(group);
    },
    UPDATE_TYPE (state, type: string) {
      state.declInfo.setType(type);
    }
  },
  actions: {
    //upload
    uploadRegions({commit}, regions: any) {
      commit('UPLOAD_REGIONS', regions);
    },
    uploadGroups({commit}, groups: any) {
      commit('UPLOAD_GROUPS', groups);
    },
    uploadTypes({commit}, types: object) {
      commit('UPLOAD_TYPES', types);
    },

    //update
    updateRegion({commit}, region: string) {
      commit('UPDATE_REGION', region);
    },
    updateGroup({commit}, group: string) {
      commit('UPDATE_GROUP', group);
    },
    updateType({commit}, type: string) {
      commit('UPDATE_TYPE', type);
    }
  }
})
