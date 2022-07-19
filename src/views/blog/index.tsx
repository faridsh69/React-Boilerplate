import { connect, useDispatch } from "react-redux";
import { blogActions } from "./redux/actions";

const Blog = (props: any): any => {
	const { getBlogListRequest, blogs } = props;
	const dispatch = useDispatch();
	const handleGetBlog = () => {
		dispatch(getBlogListRequest());
	};
	console.log("blogs", blogs);
	console.log("props", props);

	return (
		<>
			<button type="button" onClick={handleGetBlog}>
				click me
			</button>
		</>
	);
};
const mapStateToProps = ({ blog }: any) => ({ blogs: blog.blogs, status: blog.status });

export default connect(mapStateToProps, {
	...blogActions,
})(Blog);
