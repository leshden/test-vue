<template>
  <h1>Обработка заявок</h1>

  <div class='handle-items' v-for='declInfo in $store.state.declInfoArray'
       :key='declInfo.id'>
       Заявление№{{declInfo.id}} Статус: {{declInfo.status}}
  </div>

  <button class='handle-back-button' @click='exitToMainForm'>Выйти</button>
</template>

<script lang='ts'>
import {Vue} from 'vue-class-component';
import store from '../store';
import {TYPE_FORM_ENTER} from '../store/const';

export default class DeclarationHandle extends Vue {
  public exitToMainForm() {
    store.dispatch('changeForm', TYPE_FORM_ENTER);
  }
}
</script>

<style lang="css" scoped>
</style>
