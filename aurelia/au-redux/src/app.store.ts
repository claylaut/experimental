import { autoinject } from "aurelia-framework";
import { createStore, applyMiddleware, compose, Store } from "redux";
import thunkMiddleware from "redux-thunk";
import * as createLogger from "redux-logger";
import { combineReducers } from "redux";

import { todoReducer } from "./app/todo/index";
import { Action } from "./shared/index";
import { AppState } from "./app.state";

@autoinject
export class AppStore {

	private store: Store<AppState>;
	private loggerMiddleware = createLogger();

	constructor() {
		console.warn("AppStore ctor::init");
		this.store = this.configureStore();
	}

	getState() {
		return this.store.getState();
	}

	dispatch(item: Action) {
		this.store.dispatch(item);
	}

	private configureStore() {
		return createStore<AppState>(
			combineReducers<AppState>({
				todo: todoReducer
			}),
			compose(
				applyMiddleware(
					thunkMiddleware,
					this.loggerMiddleware
				),
				// window.devToolsExtension ? window.devToolsExtension() : undefined
			)
		);
	}

}