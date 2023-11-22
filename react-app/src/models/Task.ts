export enum TaskStatus {
    Todo = 'todo',
    InProgress = 'inProgress',
    Done = 'done',
}

export interface Task {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
}
