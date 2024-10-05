let count = 0;
export abstract class Entity {
  private _id: number;
  constructor(id?: number) {
    this._id = id ?? count++;
  }
  public get getID():string{
    return this._id.toString()
  }
}
