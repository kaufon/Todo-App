export abstract class Register {
  public abstract register(taskName:string,isActivated?:boolean): {isSucess:boolean,message:string}
}
