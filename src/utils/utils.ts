export function isEmptyObject(obj : object): boolean {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

export function isIdPositive(id: number) : boolean {
  return id > 0;
}
