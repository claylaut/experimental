import { autoinject } from "aurelia-framework";

import { TodoAction, TodoSelector, Todo } from "./app/todo/index";
import { AppStore } from "./app.store";

@autoinject
export class App {

	message = "Aurelia Redux!";
	todos: Todo[] = [];

	private counter = 0;

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

	addItem() {
		this.counter++;
		this.store.dispatch(this.action.add(`hello ${this.counter}`));
	}

	completeTodo() {
		console.log("completeTodo triggered");
	}

}