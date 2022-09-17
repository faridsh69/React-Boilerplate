import { blogTypes } from "../actions";

interface IGetBlogListRequestAction {
	type: typeof blogTypes.GET_BLOG_LIST_REQUEST;
	filter: string;
}

interface IGetBlogListSuccessAction {
	type: typeof blogTypes.GET_BLOG_LIST_SUCCESS;
	payload: any;
}

interface IGetBlogListErrorAction {
	type: typeof blogTypes.GET_BLOG_LIST_FAILURE;
	error: string;
}

export type IActionTypeRequest = IGetBlogListRequestAction;
export type IActionTypeSuccess = IGetBlogListSuccessAction;
export type IActionTypeFailor = IGetBlogListErrorAction;

// export type Action = GetBlogListRequestAction | GetBlogListSuccessAction | GetBlogListErrorAction;
