import { createReducer } from "reduxsauce";
import { IActionTypeFailor, IActionTypeSuccess } from "../action-types/actionType";
import { blogTypes } from "../actions";

interface IBlogState {
	isLoading: boolean;
	blogs: any;
	blogItem: any;
	error: string | null;
	status: string;
}

const initialState: IBlogState = {
	isLoading: false,
	blogs: [],
	blogItem: {},
	error: "",
	status: "",
};

//#region GetData

const getBlogListRequest = (state: IBlogState = initialState): IBlogState => ({
	...state,
	isLoading: true,
	status: "pending",
});

const getBlogListSuccess = (
	state: IBlogState = initialState,
	action: IActionTypeSuccess,
): IBlogState => ({
	...state,
	isLoading: false,
	blogs: action.payload,
	status: "success",
});

const getBlogListFailure = (
	state: IBlogState = initialState,
	{ error }: IActionTypeFailor,
): IBlogState => ({
	...state,
	error,
	isLoading: false,
});

//#endregion

//#region GetById

const getBlogByIDRequest = (state: IBlogState = initialState) => ({
	...state,
	isLoading: true,
	status: "pending",
});

const getBlogByIDSuccess = (state: IBlogState = initialState, action: any) => ({
	...state,
	isLoading: false,
	blogItem: action.payload,
	status: "success",
});

const getBlogByIDFailure = (state: IBlogState = initialState, { error }: any) => ({
	...state,
	error,
	isLoading: false,
});

//#endregion

//#region Add

const addBlogRequest = (state: IBlogState = initialState, action: any) => ({
	...state,
	newData: action.payload,
	isLoading: true,
	status: "pending",
});

const addBlogSuccess = (state: IBlogState = initialState, action: any) => ({
	...state,
	blogs: [...state.blogs, action.payload],
	isLoading: false,
	status: "success",
});

const addBlogFailure = (state: IBlogState = initialState, { error }: any) => ({
	...state,
	error,
	isLoading: false,
});

//#endregion

//#region Delete

const deleteBlogRequest = (state: IBlogState = initialState) => ({
	...state,
	isLoading: true,
	status: "pending",
});

const deleteBlogSuccess = (state: IBlogState = initialState) => ({
	...state,
	isLoading: false,
	status: "success",
});

const deleteBlogFailure = (state: IBlogState = initialState, { error }: any) => ({
	...state,
	error,
	isLoading: false,
});

const clearBlogs = (state: IBlogState = initialState) => ({
	...state,
	isLoading: false,
	blogs: [],
});

//#endregion

const HANDLERS = {
	[blogTypes.GET_BLOG_LIST_REQUEST]: getBlogListRequest,
	[blogTypes.GET_BLOG_LIST_SUCCESS]: getBlogListSuccess,
	[blogTypes.GET_BLOG_LIST_FAILURE]: getBlogListFailure,

	[blogTypes.GET_BLOG_BY_ID_REQUEST]: getBlogByIDRequest,
	[blogTypes.GET_BLOG_BY_ID_SUCCESS]: getBlogByIDSuccess,
	[blogTypes.GET_BLOG_BY_ID_FAILURE]: getBlogByIDFailure,

	[blogTypes.ADD_BLOG_REQUEST]: addBlogRequest,
	[blogTypes.ADD_BLOG_SUCCESS]: addBlogSuccess,
	[blogTypes.ADD_BLOG_FAILURE]: addBlogFailure,

	[blogTypes.DELETE_BLOG_REQUEST]: deleteBlogRequest,
	[blogTypes.DELETE_BLOG_SUCCESS]: deleteBlogSuccess,
	[blogTypes.DELETE_BLOG_FAILURE]: deleteBlogFailure,

	[blogTypes.CLEAR_BLOGS]: clearBlogs,
};

export const blogReducer = createReducer(initialState, HANDLERS);
