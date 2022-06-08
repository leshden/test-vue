import store from '../store';
import DeclarationInfo from '../store/declaration-info'

abstract class StorageData {
  abstract save(): void;
  abstract load(): void;
}

class LocalStorageData extends StorageData {
  save(): void {
    localStorage.setItem('local_storage', JSON.stringify(store.state.declInfoArray));
  }

  load(): void {
    const storage = localStorage.getItem('local_storage');
    if (storage === null) {
      return;
    }
    const arr = JSON.parse( storage || "");
    for(const item of arr) {
      const declaration = DeclarationInfo.Copy(item);
      store.dispatch('addDeclaration', declaration);
    }
  }
}

function instance(sd: new () => StorageData) : StorageData {
  return new sd();
}

export function saveData() {
  const sd = instance(LocalStorageData);
  sd.save();
}

export function loadData() {
  const sd = instance(LocalStorageData);
  sd.load();
}
