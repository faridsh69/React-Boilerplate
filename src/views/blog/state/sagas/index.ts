import { call, put, takeLatest } from "redux-saga/effects";
import { getBlogListApi, getBlogByIDApi, addNewBlogApi, deleteBlogApi } from "views/blog/apis";

import { blogTypes } from "../actions";

const getBlogList = function* (action: any) {
	try {
		// const { data } = yield call(getBlogListApi, {});
		const { data } = yield call(getBlogListApi, action.filter);
		console.log("data", data);

		yield put({
			type: blogTypes.GET_BLOG_LIST_SUCCESS,
			payload: data.data,
		});
	} catch (e) {
		yield put({
			type: blogTypes.GET_BLOG_LIST_FAILURE,
			error: e,
		});
	}
};

const getBlogByID = function* (action: any) {
	try {
		const { data } = yield call(getBlogByIDApi, action.url);
		yield put({
			type: blogTypes.GET_BLOG_BY_ID_SUCCESS,
			payload: data.data,
		});
	} catch (e) {
		yield put({
			type: blogTypes.GET_BLOG_BY_ID_FAILURE,
			error: e,
		});
	}
};

const addNewBlog = function* (action: any) {
	console.log("1- add action", action);

	try {
		const { data } = yield call(addNewBlogApi, action.newData);
		console.log("2- add", data);

		yield put({
			type: blogTypes.ADD_BLOG_SUCCESS,
			payload: data.data,
		});
	} catch (e) {
		yield put({
			type: blogTypes.ADD_BLOG_FAILURE,
			error: e,
		});
	}
};

const deleteBlog = function* (action: any) {
	console.log("1- delete action", action);

	try {
		const { data } = yield call(deleteBlogApi, action.id);
		console.log("2- delete", data);

		yield put({
			type: blogTypes.DELETE_BLOG_SUCCESS,
			// payload: data.data,
		});
	} catch (e) {
		yield put({
			type: blogTypes.DELETE_BLOG_FAILURE,
			error: e,
		});
	}
};

export const blogSaga = function* () {
	yield takeLatest([blogTypes.GET_BLOG_LIST_REQUEST], getBlogList);
	yield takeLatest(blogTypes.GET_BLOG_BY_ID_REQUEST, getBlogByID);
	yield takeLatest(blogTypes.ADD_BLOG_REQUEST, addNewBlog);
	yield takeLatest(blogTypes.DELETE_BLOG_REQUEST, deleteBlog);
};
