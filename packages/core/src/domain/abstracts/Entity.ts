let count = 0;
export abstract class Entity {
  private _id: number | string;
  constructor(id?: number | string) {
    this._id = id ?? count++;
  }
  public get getID():string{
    return this._id.toString()
  }
}
