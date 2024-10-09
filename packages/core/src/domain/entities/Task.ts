import { TaskDto } from "../../dto/task-dto";
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
    this.status = props.status || false;
  }
  static create(dto: TaskDto) {
    return new Task(
      {
        name: dto.name,
        status: dto.status,
      },
    );
  }
  get dto():TaskDto{
    return {
      id: this.getID,
      name: this.name,
      status: this.status
    }
  }
}
