<template lang="html">
  <v-pagination
    v-model="page"
    :pages="10"
    :range-size="1"
    active-color="#DCEDFF"
    @update:modelValue="updatePage"
  />
</template>

<script lang='ts'>
import {Options, Vue} from 'vue-class-component';
//pagination
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

@Options({
  components: {
    VPagination
  }
})

export default class DeclarationRibbon extends Vue {
    public page = 0

    public updatePage() {
      console.log(`Current page: ${this.page}`);
    }
}
</script>

<style lang="css" scoped>
</style>
