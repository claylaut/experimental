import { Todo } from "./todo.model";
import { Action } from "../../shared/index";

export const todoActionType = {
	add: "todo:add",
	remove: "todo:remove",
	toggleVisibility: "todo:toggle-visibility"
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

	remove(payload: Todo): Action {
		return {
			type: todoActionType.remove,
			payload: payload
		};
	}

	toggleVisibility(payload: Todo): Action {
		return {
			type: todoActionType.toggleVisibility,
			payload: payload
		};
	}

}