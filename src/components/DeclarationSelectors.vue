<template>
  <label>Регион:</label>
  <select class='regions-form' @change='onSelectRegion'>
    <option disabled value="" selected>Выбрать регион...</option>
    <option v-for="region in $store.state.regions" :value='JSON.stringify({id: region.id,  name: region.name})' :key='region.id'>{{region.name}}</option>
  </select>

  <label>Группа:</label>
  <select class='groups-form' @change='onSelectGroup'>
    <option disabled value="" selected>Выбрать группу...</option>
    <option v-for="group in $store.state.groups.content" :value='JSON.stringify({id: group.id,  name: group.name})' :key='group.id'>{{group.name}}</option>
  </select>

  <label>Типы:</label>
  <select class='types-form' @change='onSelectType' v-if="isRegionsAndGroupsCompleted()">
    <option disabled value="" selected>Выбрать тип...</option>
    <option v-for="type in $store.state.types.content" :value='JSON.stringify({id: type.id,  name: type.name})' :key='type.id'>{{type.name}}</option>
  </select>
</template>

<script lang='ts'>
import {Vue} from 'vue-class-component';
import {isIdPositive} from '../utils/utils';
import {getTypes} from '../get-requests/get-requests';

import store, {Selector} from '../store';

export default class DeclarationSelectors extends Vue {

  public selectedRegion: Selector = {id: -1, name: ''}
  public selectedGroup: Selector = {id: -1, name: ''}
  public selectedType: Selector = {id: -1, name: ''}

  public onSelectGroup(e: any): void {
    if(e.target.options.selectedIndex > -1) {
      this.selectedGroup = JSON.parse(e.target.options[e.target.options.selectedIndex].value);
      this.checkRequestType();
      store.dispatch('updateGroup', this.selectedGroup.name);
    }
  }

  public onSelectRegion(e: any): void {
    if(e.target.options.selectedIndex > -1) {
      this.selectedRegion = JSON.parse(e.target.options[e.target.options.selectedIndex].value);
      this.checkRequestType();
      store.dispatch('updateRegion', this.selectedRegion.name);
    }
  }

  public onSelectType(e: any): void {
    if(e.target.options.selectedIndex > -1) {
      this.selectedType = JSON.parse(e.target.options[e.target.options.selectedIndex].value);
      store.dispatch('updateType', this.selectedType.name);
    }
  }

  public checkRequestType(): void {
    console.log(`Get value ${this.selectedRegion.id} and ${this.selectedGroup.id}`);
    if (!this.isRegionsAndGroupsCompleted()) {
      return;
    }

    getTypes(this.selectedRegion['id'], this.selectedGroup['id']);

    console.log('Get request Types');
  }

  public isRegionsAndGroupsCompleted() : boolean {
    return isIdPositive(this.selectedRegion.id) && isIdPositive(this.selectedGroup.id);
  }
}
</script>

<style lang="css" scoped>
.regions-form {
  margin: 20px;
}

.groups-form {
  margin: 20px;
}

</style>
