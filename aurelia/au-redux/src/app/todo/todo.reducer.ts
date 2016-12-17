import * as _ from "lodash";

import { Action } from "../../shared/index";
import { todoActionType } from "./todo.action";
import { Todo, TodoState } from "./todo.model";

const initialState: TodoState = {
	items: [] as Todo[]
};

export function todoReducer(state = initialState, action: Action): TodoState {
	switch (action.type) {
		case todoActionType.add: {
			const item = action.payload as Todo;
			const newState = { ...state };
			newState.items.push(item);
			return newState;
		}
		case todoActionType.addComplete: {
			console.log("todoReducer :: addComplete triggered!");
			return state;
		}
		case todoActionType.remove: {
			const item = action.payload as Todo;
			const newState = { ...state };
			newState.items = _.reject(newState.items, { name: item.name });
			return newState;
		}
		case todoActionType.toggleVisibility: {
			const item = action.payload as Todo;
			const newState = { ...state };
			const result = _.find(newState.items, { name: item.name });
			result.isCompleted = item.isCompleted;
			return newState;
		}
		default:
			return state;
	}
}