import { blogTypes } from "../actions";

export type IGetBlogListRequestAction = {
	type: typeof blogTypes.GET_BLOG_LIST_REQUEST;
	filter: string;
};

export type IGetBlogListSuccessAction = {
	type: typeof blogTypes.GET_BLOG_LIST_SUCCESS;
	payload: any;
};

export type IGetBlogListErrorAction = {
	type: typeof blogTypes.GET_BLOG_LIST_FAILURE;
	error: string;
};

// export type IActionTypeRequest = IGetBlogListRequestAction;
// export type IActionTypeSuccess = IGetBlogListSuccessAction;
// export type IActionTypeFailor = IGetBlogListErrorAction;

// export type Action =
// 	| IGetBlogListRequestAction
// 	| IGetBlogListSuccessAction
// 	| IGetBlogListErrorAction;
