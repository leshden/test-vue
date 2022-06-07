<template>
  <form @submit.prevent='onSubmit' class='request-form'>
    <DeclarationSelectors />
    <DeclarationMap />
    <textarea class='text-form' v-model='textDescription'> </textarea>
    <input type='submit' value='Предварительный просмотр'>
    <DeclarationRibbon />
  </form>
</template>

<script lang='ts'>
import {Options, Vue} from 'vue-class-component';
import store from '../store';
import {TYPE_FORM_PREVIEW} from '../store/const';

import DeclarationRibbon from './DeclarationRibbon.vue';
import DeclarationMap from './DeclarationMap.vue';
import DeclarationSelectors from './DeclarationSelectors.vue';

@Options({
  components: {
    DeclarationRibbon,
    DeclarationMap,
    DeclarationSelectors
  }
})

export default class DeclarationEnter extends Vue {
  public textDescription = ''

  public onSubmit(): void {
    store.dispatch('updateDescription', this.textDescription);

    if (!this.isFillField()) {
      return;
    }

    store.dispatch('changeForm', TYPE_FORM_PREVIEW);
  }

  public isFillField(): boolean {
    if(this.isNotFillComponent(store.state.declInfo.getRegion(), 'Регион не выбран') ||
       this.isNotFillComponent(store.state.declInfo.getGroup(), 'Группа не выбрана') ||
       this.isNotFillComponent(store.state.declInfo.getType(), 'Тип не выбран') ||
       this.isNotFillComponent(store.state.declInfo.getDescription(), 'Не заполнено описание')) {
         return false;
    }

    return true;
  }

  public isNotFillComponent(value: string, alertStr: string) {
    if (value.trim() === '') {
      alert(alertStr);
      return true;
    }

    return false;
  }

}
</script>

<style lang="css" scoped>
  .request-form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .text-form {
    resize: none;
  }
</style>
