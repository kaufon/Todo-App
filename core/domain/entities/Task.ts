import { Entity } from "../abstracts/Entity";
type taskProps = {
  name: string;
  status?: boolean;
};
export class Task extends Entity {

  public name: string;
  public status?: boolean;
  constructor(props: taskProps) {
    super();
    this.name = props.name;
    this.status = props.status || false
  }
}
