export enum TaskStatus {
    Todo = 'ToDo',
    InProgress = 'inProgress',
    Done = 'Done',
    Blocked = "Blocked",
    InQA = "inQA",
    Deployed = "Deployed"
}

export interface Task {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
}
