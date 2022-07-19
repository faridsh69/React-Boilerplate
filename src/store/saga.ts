import { all } from "redux-saga/effects";
import { blogSaga } from "../views/blog/redux/sagas";

export default function* rootSaga() {
	yield all([blogSaga()]);
}
