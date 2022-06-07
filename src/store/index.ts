import { createStore } from 'vuex'
import DeclarationInfo, {MapPosition} from './declaration-info'
import {TYPE_FORM_ENTER} from './const';

export interface Selector {
  id : number
  name: string
}

export default createStore({
  state: {
    //update
    declInfo: new DeclarationInfo(),
    //add
    declInfoArray: new Array<DeclarationInfo>(),
    //upload
    regions: [],
    groups: [],
    types: [],
    //enum
    typeForm: TYPE_FORM_ENTER
  },

  mutations: {
    //upload
    UPLOAD_REGIONS (state, regions: any) {
      state.regions = regions;
    },
    UPLOAD_GROUPS (state, groups: any) {
      state.groups = groups.content;
    },
    UPLOAD_TYPES (state, types: any) {
      state.types = types.content;
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
    },

    //add
    ADD_DECLARATION(state, decl: DeclarationInfo) {
      state.declInfoArray.push(decl);
    },
    //enum
    CHANGE_FORM(state, type: number) {
      state.typeForm = type;
    },
    //clear
    CLEAR_DECLARATION(state) {
      state.declInfo.clear();
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
    uploadTypes({commit}, types: any) {
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
    },

    //add
    addDeclaration({commit}, decl: DeclarationInfo) {
      commit('ADD_DECLARATION', decl);
    },

    //enum
    changeForm({commit}, type: number) {
      commit('CHANGE_FORM', type);
    },

    //clear
    clearDeclaration({commit}) {
      commit('CLEAR_DECLARATION')
    }

  }
})
