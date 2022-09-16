import { createReducer } from "reduxsauce";
import { Action, blogTypes } from "../actions";

interface BlogState {
	isLoading: boolean;
	blogs: any;
	blogItem: any;
	error: string | null;
	status: string;
}

const initialState: BlogState = {
	isLoading: false,
	blogs: [],
	blogItem: {},
	error: "",
	status: "",
};

//#region GetData

const getBlogListRequest = (state: BlogState = initialState): BlogState => ({
	...state,
	isLoading: true,
	status: "pending",
});

const getBlogListSuccess = (state: BlogState = initialState, action: Action): BlogState => ({
	...state,
	isLoading: false,
	blogs: action.payload,
	status: "success",
});

const getBlogListFailure = (state: BlogState = initialState, { error }: Action): BlogState => ({
	...state,
	error,
	isLoading: false,
});

//#endregion

//#region GetById

const getBlogByIDRequest = (state: BlogState = initialState) => ({
	...state,
	isLoading: true,
	status: "pending",
});

const getBlogByIDSuccess = (state: BlogState = initialState, action: Action) => ({
	...state,
	isLoading: false,
	blogItem: action.payload,
	status: "success",
});

const getBlogByIDFailure = (state: BlogState = initialState, { error }: Action) => ({
	...state,
	error,
	isLoading: false,
});

//#endregion

//#region Add

const addBlogRequest = (state: BlogState = initialState, action: Action) => ({
	...state,
	newData: action.payload,
	isLoading: true,
	status: "pending",
});

const addBlogSuccess = (state: BlogState = initialState, action: Action) => ({
	...state,
	blogs: [...state.blogs, action.payload],
	isLoading: false,
	status: "success",
});

const addBlogFailure = (state: BlogState = initialState, { error }: Action) => ({
	...state,
	error,
	isLoading: false,
});

//#endregion

//#region Delete

const deleteBlogRequest = (state: BlogState = initialState) => ({
	...state,
	isLoading: true,
	status: "pending",
});

const deleteBlogSuccess = (state: BlogState = initialState) => ({
	...state,
	isLoading: false,
	status: "success",
});

const deleteBlogFailure = (state: BlogState = initialState, { error }: Action) => ({
	...state,
	error,
	isLoading: false,
});

const clearBlogs = (state: BlogState = initialState) => ({
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
