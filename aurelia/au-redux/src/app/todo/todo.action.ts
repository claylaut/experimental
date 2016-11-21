import { Todo } from "./todo.model";
import { Action } from "../../shared/index";

export const todoActionType = {
	add: "todo:add",
	complete: "todo:complete",
	setVisibilityFilter: "todo:set-visibility-filter"
};

export class TodoAction {

	add(payload: string): Action {
		return {
			type: todoActionType.add,
			payload: {
				name: payload,
				isCompleted: false
			} as Todo
		};
	}

	completeTodo(index: number): Action {
		return {
			type: todoActionType.complete,
			payload: index
		};
	}

	setVisibilityFilter(filter: any): Action{
		return {
			type: todoActionType.setVisibilityFilter,
			payload: filter
		};
	}

}
