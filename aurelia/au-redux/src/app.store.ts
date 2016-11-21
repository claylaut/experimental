import { autoinject } from "aurelia-framework";
import { createStore, applyMiddleware, compose, Store } from "redux";
import thunkMiddleware from "redux-thunk";
import * as createLogger from "redux-logger";
import { combineReducers } from "redux";

import { todoReducer } from "./app/todo/index";
import { Action } from "./shared/index";
// import { appReducer } from "./app.reducer";
import { AppState } from "./app.state";

// const loggerMiddleware = createLogger();

// function configureStore() {
// 	return createStore<AppState>(
// 		appReducer,
// 		compose(
// 			applyMiddleware(
// 				thunkMiddleware,
// 				loggerMiddleware
// 			),
// 			// window.devToolsExtension ? window.devToolsExtension() : undefined
// 		)
// 	);
// }

// export const reduxStore = configureStore();

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