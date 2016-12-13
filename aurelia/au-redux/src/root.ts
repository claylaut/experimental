import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";

import { todoReducer } from "./app/todo/index";
import { AppState } from "./app.state";

// export const rootEpic = combineEpics(
// 	todoEpic
// );

export const rootReducer = combineReducers<AppState>({
	todo: todoReducer
});