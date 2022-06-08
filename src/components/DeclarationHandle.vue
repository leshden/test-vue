<template>
  <h1>Обработка заявок</h1>

  <div class='handle-items' v-for='declInfo in $store.state.declInfoArray'
       :key='declInfo.id'>
       <h1>Заявление№{{declInfo.id}}</h1>
       <h1>Регион:</h1>
       <h3>{{declInfo.getRegion()}}</h3>
       <h1>Группа:</h1>
       <h3>{{declInfo.getGroup()}}</h3>
       <h1>Тип:</h1>
       <h3>{{declInfo.getType()}}</h3>
       <h1>Координаты:</h1>
       <h3>Широта: {{declInfo.getMapPosition().latitude}}, Долгота: {{declInfo.getMapPosition().longitude}}</h3>
       <h1>Текст сообщения</h1>
       <p>{{declInfo.getDescription()}}</p>
       <h1>Статус: {{declInfo.status}}</h1>
       <div class='handle-button-container'>
         <button @click='updateStatus(declInfo.id, "Принято")'>Принять</button>
         <button @click='updateStatus(declInfo.id, "Отклонено")'>Отклонить</button>
         <button @click='updateStatus(declInfo.id, "Завершено")'>Завершить</button>
       </div>
  </div>

  <button class='handle-back-button' @click='exitToMainForm'>Выйти</button>
</template>

<script lang='ts'>
import {Vue} from 'vue-class-component';
import store from '../store';
import {TYPE_FORM_ENTER} from '../store/const';
import {saveData} from '../storage-data/storage-data';

export default class DeclarationHandle extends Vue {
  public exitToMainForm() {
    store.dispatch('changeForm', TYPE_FORM_ENTER);
  }

  public updateStatus(id: number, status: string) {
    const length = store.state.declInfoArray.length;
    for (let i = 0; i < length; ++i) {
      if (store.state.declInfoArray[i].getId() === id) {
        store.state.declInfoArray[i].setStatus(status);
        saveData();
        break;
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
