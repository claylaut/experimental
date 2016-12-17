import { autoinject } from "aurelia-framework";
import { Store } from "redux";

import { Action } from "./shared/index";
import { AppState } from "./app.state";
import { AppStoreConfig } from "./app-store.config";

@autoinject
export class AppStore {

	private store: Store<AppState>;

	constructor(
		private storeConfig: AppStoreConfig
	) {
		console.warn("AppStore ctor::init");
		this.store = this.storeConfig.configure();
	}

	getState() {
		return this.store.getState();
	}

	dispatch(item: Action) {
		this.store.dispatch(item);
	}

}