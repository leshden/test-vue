
export interface MapPosition {
  latitude: number
  longitude: number
}

export function mapPositionToArray(map: MapPosition): [number, number] {
  return [map.latitude, map.longitude];
}

export default class DeclarationInfo {
  protected id = 0
  protected region = ''
  protected group = ''
  protected type = ''
  protected status = ''
  protected position: MapPosition = {latitude: 0.0, longitude: 0.0}
  protected description = ''

  static Copy(di: DeclarationInfo) : DeclarationInfo {
    const newDeclarationInfo = new DeclarationInfo();
    newDeclarationInfo.id = di.id;
    newDeclarationInfo.region = di.region;
    newDeclarationInfo.group = di.group;
    newDeclarationInfo.type = di.type;
    newDeclarationInfo.status = di.status;
    newDeclarationInfo.position = di.position;
    newDeclarationInfo.description = di.description;

    return newDeclarationInfo;
  }

  //get
  getId() {
    return this.id;
  }

  getRegion() {
    return this.region;
  }

  getGroup() {
    return this.group;
  }

  getType() {
    return this.type;
  }

  getMapPosition(): MapPosition {
    return this.position;
  }

  getDescription() {
    return this.description;
  }

  //set
  setId(value: number): void {
    this.id = value;
  }

  setRegion(value: string): void {
    this.region = value;
  }

  setGroup(value: string): void {
    this.group = value;
  }

  setType(value: string): void {
    this.type = value;
  }

  setMapPosition(value: MapPosition) {
    this.position = value;
  }

  setStatus(value: string) {
    this.status = value;
  }

  setDescription(value: string) {
    this.description = value;
  }

  toString(): string {
    return JSON.stringify(this);
  }

  clear() {
    this.id = 0;
    this.region = '';
    this.group = '';
    this.type = '';
    this.description = '';
    this.status = '';
  }

}
