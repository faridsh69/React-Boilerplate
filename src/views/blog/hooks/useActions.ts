import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { blogActions } from "../state/actions";

export const useActions = () => {
	const dispatch = useDispatch();

	return bindActionCreators(blogActions, dispatch);
};
