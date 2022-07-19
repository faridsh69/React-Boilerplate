import { call, put, takeLatest } from "redux-saga/effects";
import { getBlogListApi } from "views/blog/apis";

import { blogTypes } from "../actions";

const getBlogList = function* (action: any) {
	try {
		const { data } = yield call(getBlogListApi, {});
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
	console.log("action", action);
};

export const blogSaga = function* () {
	yield takeLatest([blogTypes.GET_BLOG_LIST_REQUEST], getBlogList);
};
