import { createStore } from 'vuex'
import DeclarationInfo, {MapPosition} from './declaration-info'

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
    },
    UPDATE_MAP_POSITION (state, pos: MapPosition) {
      state.declInfo.setMapPosition(pos);
    },
    UPDATE_STATUS (state, status: string) {
      state.declInfo.setStatus(status);
    },
    UPDATE_DESCRIPTION (state, desc: string) {
      state.declInfo.setDescription(desc);
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
    },
    updateMapPosition({commit}, pos: MapPosition) {
      commit('UPDATE_MAP_POSITION', pos);
    },
    updateStatus({commit}, status: string) {
      commit('UPDATE_STATUS', status);
    },
    updateDescription({commit}, desc: string) {
      commit('UPDATE_DESCRIPTION', desc);
    }
  }
})
