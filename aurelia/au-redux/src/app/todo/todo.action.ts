import { autoinject } from "aurelia-framework";

import { Todo } from "./todo.model";
import { Action } from "../../shared/index";

export const todoActionType = {
	add: "todo:add",
	addComplete: "todo:add:complete"
};

@autoinject
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

	addComplete(payload: string): Action {
		return {
			type: todoActionType.addComplete,
			payload: {
				name: payload,
				isCompleted: false
			} as Todo
		};
	}

}