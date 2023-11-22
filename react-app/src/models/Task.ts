export enum TaskStatus {
    Todo = 'ToDo',
    InProgress = 'inProgress',
    Done = 'Done',
}

export interface Task {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
}
