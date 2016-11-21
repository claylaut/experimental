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
			console.log("todo.reducer::add", item);
			let newState = Object.assign({}, state) as TodoState;
			newState.items.push(item);
			return newState;
		}
		default:
			return state;
	}
}