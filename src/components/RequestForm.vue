<template>
  <form @submit.prevent='' class='request-form'>
    <select class='regions-form'>
      <option disabled value="">Выбрать регион...</option>
      <option v-for="region in $store.state.regions" :value='region.name' :key='region.id'>{{region.name}}</option>
    </select>
    <input type='submit' value='Отправить заявку'>
  </form>
</template>

<script lang='ts'>
import {Vue} from 'vue-class-component';

export default class RequestForm extends Vue {
}
</script>

<style lang="css" scoped>
  .request-form {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>
