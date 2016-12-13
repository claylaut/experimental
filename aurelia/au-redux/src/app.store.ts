import { autoinject } from "aurelia-framework";
import { createStore, applyMiddleware, compose, Store } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
// import { composeWithDevTools } from "redux-devtools-extension";
import * as createLogger from "redux-logger";
import { combineReducers } from "redux";

import { todoReducer } from "./app/todo/todo.reducer";
import { TodoEpic } from "./app/todo/todo.epic";
import { Action } from "./shared/index";
import { AppState } from "./app.state";

@autoinject
export class AppStore {

	private store: Store<AppState>;
	private loggerMiddleware = createLogger();

	constructor(
		private todoEpic: TodoEpic
	) {
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
		const rootEpic = combineEpics(
			...this.todoEpic.epics
		);

		// const composeEnhancers = composeWithDevTools({
		// 	// Specify here name, actionsBlacklist, actionsCreators and other options
		// });

		return createStore<AppState>(
			combineReducers<AppState>({
				todo: todoReducer
			}),
			// composeEnhancers(
			applyMiddleware(
				createEpicMiddleware(rootEpic),
				this.loggerMiddleware
			)
			// ),
		);

		// return createStore<AppState>(
		// 	combineReducers<AppState>({
		// 		todo: todoReducer
		// 	}),
		// 	compose(
		// 		applyMiddleware(
		// 			createEpicMiddleware(rootEpic),
		// 			this.loggerMiddleware
		// 		),
		// 		// window.devToolsExtension ? window.devToolsExtension() : undefined
		// 	)
		// );
	}

}