interface MapPoint {
  latitude: number
  longitude: number
}

export default class DeclarationInfo {
  protected id = 0
  protected region = ''
  protected group = ''
  protected type = ''
  protected status = ''
  protected point: MapPoint = {latitude: 0.0, longitude: 0.0}

  setRegion(value: string): void {
    this.region = value;
  }

  setGroup(value: string): void {
    this.group = value;
  }

  setType(value: string): void {
    this.type = value;
  }

  toString(): string {
    return JSON.stringify(this);
  }

}
