<template>
  <DeclarationPreview v-if='isPreviewForm()'/>
  <DeclarationEnter v-if='isDeclarationForm()'/>
</template>

<script lang='ts'>
import {Options, Vue} from 'vue-class-component';
import {isPreviewForm, isDeclarationForm} from '../store/type-forms';

import DeclarationPreview from './DeclarationPreview.vue';
import DeclarationEnter from './DeclarationEnter.vue';

@Options({
  components: {
    DeclarationPreview,
    DeclarationEnter
  },
  methods:{
    isPreviewForm,
    isDeclarationForm
  }
})

export default class DeclarationForm extends Vue {

}
</script>

<style lang="css" scoped>
</style>
