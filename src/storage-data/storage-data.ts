abstract class StorageData {
  abstract save(): void;
  abstract load(): void;
}

class LocalStorageData extends StorageData {
  save(): void {
    localStorage.setItem('test', JSON.stringify({name: "Test"}));
  }

  load(): void {
    const test = JSON.parse( localStorage.getItem('test') || "");
    console.log(test);
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
