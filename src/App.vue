<template>
  <div class='app'>
    <h1>{{title}}</h1>
    <TodoInput />
    <TodoList />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';

@Options({
  components: {
    TodoInput,
    TodoList
  },
})
export default class App extends Vue {
  public title = 'Vue and TS';
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
