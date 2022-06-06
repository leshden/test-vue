<template lang="html">

  <div class='declaration-items' v-for='declInfo in filtersDeclarations()'
       :key='declInfo.id'>
       Заявление№{{declInfo.id}}
  </div>

  <v-pagination
    v-model="page"
    :pages="getCountPages()"
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
import store from '../store';
import DeclarationInfo from '../store/declaration-info'

@Options({
  components: {
    VPagination
  }
})

export default class DeclarationRibbon extends Vue {
    public page = 1

    public updatePage() {
      console.log(`Current page: ${this.page}`);
    }

    public filtersDeclarations(): Array<DeclarationInfo> {
      const max = this.page * 2;
      return store.state.declInfoArray.filter(item => item.getId() >= max-1 && item.getId() <= max);
    }

    public getCountPages(): number {
      const pages = Math.round(store.state.declInfoArray.length / 2)
      return pages ? pages : 1;
    }
}
</script>

<style lang="css" scoped>
</style>
