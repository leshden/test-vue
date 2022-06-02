<template>
  <div class='app'>
    <h1>{{title}}</h1>
    <RequestForm />
    <TodoInput />
    <TodoList />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import RequestForm from './components/RequestForm.vue';
import {loadData, saveData} from './storage-data/storage-data';
import {getRegions} from './get-requests/get-requests';

@Options({
  components: {
    TodoInput,
    TodoList,
    RequestForm
  },
})
export default class App extends Vue {
  public title = 'Заявка';
  mounted(): void  {
    loadData();
    getRegions();
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
