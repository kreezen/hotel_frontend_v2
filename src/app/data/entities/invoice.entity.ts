import { Task } from "./task.entity";

export interface Invoice {
    id: number,
    name: string,
    date: Date,
    isPaid: boolean,
    sum: number,
    tasks: Array<Task>
}