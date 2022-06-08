<template>
  <div class='app'>
    <h1>{{title}}</h1>
    <DeclarationForm />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import DeclarationForm from './components/DeclarationForm.vue';
import {loadData, saveData} from './storage-data/storage-data';
import {getDataFromServer} from './get-requests/get-requests';

@Options({
  components: {
    DeclarationForm
  },
})
export default class App extends Vue {
  public title = 'Заявка';
  created(): void  {
    loadData();
    getDataFromServer();
 }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
