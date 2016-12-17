import { autoinject } from "aurelia-framework";
import { createStore, applyMiddleware, compose } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { composeWithDevTools } from "redux-devtools-extension";
import * as createLogger from "redux-logger";
import { combineReducers } from "redux";

import { todoReducer } from "./app/todo/todo.reducer";
import { TodoEpic } from "./app/todo/todo.epic";
import { AppState } from "./app.state";

@autoinject
export class AppStoreConfig {

	private loggerMiddleware = createLogger();

	constructor(
		private todoEpic: TodoEpic
	) {
	}

	configure() {
		const rootEpic = combineEpics(
			...this.todoEpic.epics
		);

		const rootReducer = combineReducers<AppState>({
			todo: todoReducer
		});

		const composeEnhancers = composeWithDevTools({
			// Specify here name, actionsBlacklist, actionsCreators and other options
		});

		return createStore<AppState>(
			rootReducer,
			composeEnhancers(
				applyMiddleware(
					createEpicMiddleware(rootEpic),
					this.loggerMiddleware
				)
			),
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