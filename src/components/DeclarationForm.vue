<template>
  <DeclarationPreview v-if='isPreviewForm()'/>
  <form @submit.prevent='onSubmit' class='request-form' v-if='isDeclarationForm()'>
    <DeclarationSelectors />
    <DeclarationMap />
    <textarea class='text-form' v-model='textDescription'> </textarea>
    <input type='submit' value='Отправить заявку'>
    <DeclarationRibbon />
  </form>
</template>

<script lang='ts'>
import {Options, Vue} from 'vue-class-component';
import store from '../store';
import {isPreviewForm, isDeclarationForm} from '../store/type-forms';

import DeclarationRibbon from './DeclarationRibbon.vue';
import DeclarationMap from './DeclarationMap.vue';
import DeclarationSelectors from './DeclarationSelectors.vue';
import DeclarationPreview from './DeclarationPreview.vue';

@Options({
  components: {
    DeclarationRibbon,
    DeclarationMap,
    DeclarationSelectors,
    DeclarationPreview
  },
  methods: {
    isPreviewForm,
    isDeclarationForm
  }
})

export default class DeclarationForm extends Vue {
  public textDescription = ''

  public onSubmit(): void {
    store.dispatch('updateStatus', 'Зарегистрирована');
    store.dispatch('updateDescription', this.textDescription);

    let declaration = Object.create(store.state.declInfo);
    declaration.setId(store.state.declInfoArray.length + 1);
    store.dispatch('addDeclaration', declaration);
    store.dispatch('changeForm', 2);

    console.log(declaration);
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
