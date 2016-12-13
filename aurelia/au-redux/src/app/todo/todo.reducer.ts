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
			let item = action.payload as Todo;
			let newState = Object.assign({}, state) as TodoState;
			newState.items.push(item);
			return newState;
		}
		case todoActionType.addComplete: {
			console.log("todoReducer :: addComplete triggered!");
			return state;
		}
		case todoActionType.remove: {
			let item = action.payload as Todo;
			let newState = Object.assign({}, state) as TodoState;
			newState.items = _.reject(newState.items, { name: item.name });
			return newState;
		}
		case todoActionType.toggleVisibility: {
			let item = action.payload as Todo;
			let newState = Object.assign({}, state) as TodoState;
			let result = _.find(newState.items, { name: item.name });
			result.isCompleted = item.isCompleted;
			return newState;
		}
		default:
			return state;
	}
}