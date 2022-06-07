<template>

  <div class='handle-declaration-button-container' v-if='isDeclarationForm()'>
    <label class='handle-declaration-margin'>Админ:</label>
    <button class='handle-declaration-button handle-declaration-margin' @click='handleDeclaration'>Обработать заявки</button>
  </div>

  <DeclarationHandle v-if='isHandleForm()'/>
  <DeclarationPreview v-if='isPreviewForm()'/>
  <DeclarationEnter v-if='isDeclarationForm()'/>

</template>

<script lang='ts'>
import {Options, Vue} from 'vue-class-component';
import {isPreviewForm, isDeclarationForm, isHandleForm} from '../store/type-forms';
import {TYPE_FORM_HANDLE} from '../store/const';
import store from '../store';

import DeclarationPreview from './DeclarationPreview.vue';
import DeclarationEnter from './DeclarationEnter.vue';
import DeclarationHandle from './DeclarationHandle.vue';

@Options({
  components: {
    DeclarationPreview,
    DeclarationEnter,
    DeclarationHandle
  },
  methods:{
    isPreviewForm,
    isDeclarationForm,
    isHandleForm
  }
})

export default class DeclarationForm extends Vue {
  public handleDeclaration() {
    store.dispatch('changeForm', TYPE_FORM_HANDLE);
  }
}
</script>

<style lang="css" scoped>
  .handle-declaration-button-container {
    display: flex;
    justify-content:flex-end;
  }

  .handle-declaration-margin {
    margin-right: 10px;
  }
</style>
