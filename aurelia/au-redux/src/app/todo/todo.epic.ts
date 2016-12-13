import "rxjs";
import { Observable } from "rxjs";
import { ActionsObservable, Epic } from "redux-observable";
import { autoinject } from "aurelia-framework";

import { Action } from "../../shared/index";
import { todoActionType } from "./todo.action";

@autoinject
export class TodoEpic {

	epics: Epic<any>[] = null;

	constructor() {
		this.epics = [this.todoEpic];
	}

	todoEpic: Epic<Action> = (action$: ActionsObservable<Action>, store): Observable<Action> =>
		action$.ofType(todoActionType.add)
			.do(x => console.log("todoEpic :: triggered!"))
			.mapTo({
				type: todoActionType.addComplete
			});

}
