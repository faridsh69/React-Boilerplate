import { createReducer } from "reduxsauce";
import { blogTypes } from "../actions";

const INITIAL_STATE = {
	blogs: [],
	error: "",
	status: "",
	isLoading: false,
};

const getBlogListRequest = (state: any) => ({ ...state, isLoading: true, status: "pending" });

const getBlogListSuccess = (state: any, action: any) => ({
	...state,
	isLoading: false,
	blogs: action.payload,
	status: "success",
});

const getBlogListFailure = (state: any, { error }: any) => ({
	...state,
	error,
	isLoading: false,
});

const HANDLERS = {
	[blogTypes.GET_BLOG_LIST_REQUEST]: getBlogListRequest,
	[blogTypes.GET_BLOG_LIST_SUCCESS]: getBlogListSuccess,
	[blogTypes.GET_BLOG_LIST_FAILURE]: getBlogListFailure,
};

export const blogReducer = createReducer(INITIAL_STATE, HANDLERS);
