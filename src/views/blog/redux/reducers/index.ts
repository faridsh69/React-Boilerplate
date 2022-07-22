import { createReducer } from "reduxsauce";
import { blogTypes } from "../actions";

const INITIAL_STATE = {
	blogs: [],
	blogItem: null,
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

const getBlogByIDRequest = (state: any) => ({ ...state, isLoading: true, status: "pending" });

const getBlogByIDSuccess = (state: any, action: any) => ({
	...state,
	isLoading: false,
	blogItem: action.payload,
	status: "success",
});

const getBlogByIDFailure = (state: any, { error }: any) => ({
	...state,
	error,
	isLoading: false,
});

const addBlogRequest = (state: any, action: any) => ({
	...state,
	newData: action.payload,
	isLoading: true,
	status: "pending",
});

const addBlogSuccess = (state: any, action: any) => ({
	...state,
	blogs: [...state.blogs, action.payload],
	isLoading: false,
	status: "success",
});

const addBlogFailure = (state: any, { error }: any) => ({
	...state,
	error,
	isLoading: false,
});

const deleteBlogRequest = (state: any) => ({ ...state, isLoading: true, status: "pending" });

const deleteBlogSuccess = (state: any) => ({
	...state,
	isLoading: false,
	status: "success",
});

const deleteBlogFailure = (state: any, { error }: any) => ({
	...state,
	error,
	isLoading: false,
});

const clearBlogs = () => ({
	state: [],
});

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

export const blogReducer = createReducer(INITIAL_STATE, HANDLERS);
