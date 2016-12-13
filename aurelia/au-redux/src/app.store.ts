import { autoinject } from "aurelia-framework";
import { Store } from "redux";

import { Action } from "./shared/index";
import { AppState } from "./app.state";
import { AppBootstrap } from "./app.bootstrap";

@autoinject
export class AppStore {

	private store: Store<AppState>;

	constructor(
		private bootstrap: AppBootstrap
	) {
		console.warn("AppStore ctor::init");
		this.store = this.bootstrap.configureStore();
	}

	getState() {
		return this.store.getState();
	}

	dispatch(item: Action) {
		this.store.dispatch(item);
	}

}