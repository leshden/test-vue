<template lang="html">
  <h1>Регион:</h1>
  <h3>{{$store.state.declInfo.getRegion()}}</h3>
  <h1>Группа:</h1>
  <h3>{{$store.state.declInfo.getGroup()}}</h3>
  <h1>Тип:</h1>
  <h3>{{$store.state.declInfo.getType()}}</h3>
  <h1>Координаты:</h1>
  <h3>Широта: {{$store.state.declInfo.getMapPosition().latitude}}, Долгота: {{$store.state.declInfo.getMapPosition().longitude}}</h3>
  <h1>Текст сообщения</h1>
  <p>{{$store.state.declInfo.getDescription()}}</p>

  <button class='back-button-preview' @click='backToForm'>Назад</button>
  <button @click='declarateForm'>Отправить заявку</button>
</template>

<script lang='ts'>
import {Vue} from 'vue-class-component';
import store from '../store';
import {TYPE_FORM_ENTER} from '../store/const';
import DeclarationInfo from '../store/declaration-info'
import {saveData} from '../storage-data/storage-data';

export default class DeclarationPreview extends Vue{
  public backToForm(): void {
    store.dispatch('changeForm', TYPE_FORM_ENTER);
  }

  public declarateForm(): void {
    store.dispatch('updateStatus', 'Зарегистрирована');

    let declaration = DeclarationInfo.Copy(store.state.declInfo);
    declaration.setId(store.state.declInfoArray.length + 1);
    console.log(declaration);
    store.dispatch('addDeclaration', declaration);
    saveData();

    store.dispatch('clearDeclaration');
    this.backToForm();
  }
}
</script>

<style lang="css" scoped>
</style>
