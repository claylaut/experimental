import { customElement, bindable } from "aurelia-framework";

import { Todo } from "./todo.model";

@customElement("todo-list")
export class TodoList {
	@bindable todos: Todo[];
	@bindable completeCallback;
}
