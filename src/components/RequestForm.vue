<template>
  <form @submit.prevent='' class='request-form'>
    <select class='regions-form' @change='onSelectRegion'>
      <option disabled value="" selected>Выбрать регион...</option>
      <option v-for="region in $store.state.regions" :value='JSON.stringify({id: region.id,  name: region.name})' :key='region.id'>{{region.name}}</option>
    </select>
    <select class='groups-form' @change='onSelectGroup'>
      <option disabled value="" selected>Выбрать группу...</option>
      <option v-for="group in $store.state.groups.content" :value='JSON.stringify({id: group.id,  name: group.name})' :key='group.id'>{{group.name}}</option>
    </select>
    <input type='submit' value='Отправить заявку'>
  </form>
</template>

<script lang='ts'>
import {Vue} from 'vue-class-component';
import {isEmptyObject} from '../utils/utils';

export default class RequestForm extends Vue {
  public selectedRegion = {}
  public selectedGroup = {}

  public onSelectGroup(e: any): void {
    if(e.target.options.selectedIndex > -1) {
      this.selectedGroup = JSON.parse(e.target.options[e.target.options.selectedIndex].value);
      this.checkRequestType();
    }
  }

  public onSelectRegion(e: any): void {
    if(e.target.options.selectedIndex > -1) {
      this.selectedRegion = JSON.parse(e.target.options[e.target.options.selectedIndex].value);
      this.checkRequestType();
    }
  }

  public checkRequestType(): void {
    if (isEmptyObject(this.selectedRegion) || isEmptyObject(this.selectedGroup)) {
      return;
    }

    console.log('Get request Types');
  }
}
</script>

<style lang="css" scoped>
  .request-form {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>
