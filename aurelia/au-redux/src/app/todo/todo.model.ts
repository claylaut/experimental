
export interface TodoState {
	items: Todo[];
}

export interface Todo {
	name: string;
	isCompleted: boolean;
}