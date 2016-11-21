import { autoinject } from "aurelia-framework";

import { TodoAction, TodoSelector, Todo } from "./app/todo/index";
import { AppStore } from "./app.store";

@autoinject
export class App {

	message = "Aurelia Redux!";
	todos: Todo[] = [];

	constructor(
		private action: TodoAction,
		private selector: TodoSelector,
		private store: AppStore
	) {
	}

	activate() {
		this.store.dispatch(this.action.add("hello"));
		this.todos = this.selector.getAll();
	}
}