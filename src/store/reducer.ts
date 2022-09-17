import { combineReducers } from "redux";
import { blogReducer } from "../views/blog/state/reducers";

const appReducer = combineReducers({
	blog: blogReducer,
});

const rootReducer = (state: any, action: any): any => appReducer(state, action);

export default (state: any, action: any) =>
	rootReducer(action.type === "LOGOUT" ? undefined : state, action);

export type RootState = ReturnType<typeof appReducer>;
