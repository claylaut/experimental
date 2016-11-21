import { autoinject } from "aurelia-framework";

import { AppStore } from "../../app.store";

@autoinject
export class TodoSelector {

	constructor(
		private store: AppStore
	) { }

	getAll() {
		const state = this.store.getState();
		return state.todo.items;
	}
}