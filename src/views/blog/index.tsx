import { useRef } from "react";
import { connect, useDispatch } from "react-redux";
import { blogActions } from "./redux/actions";

const Blog = (props: any): any => {
	const {
		getBlogListRequest,
		getBlogByIDRequest,
		addBlogRequest,
		deleteBlogRequest,
		clearBlogs,
		blogs,
		blogItem,
	} = props;

	const dispatch = useDispatch();

	const handleGetBlog = () => {
		dispatch(getBlogListRequest());
	};

	const handleGetBlogByID = () => {
		dispatch(getBlogByIDRequest("blog-url-781342"));
	};

	const handleAddNewBlog = () => {
		dispatch(addBlogRequest({ title: "blog-top", url: "xwz-20", description: "Its done" }));
	};

	const handleDeleteBlog = () => {
		dispatch(deleteBlogRequest(13));
	};

	const handleClearBlog = () => {
		dispatch(clearBlogs());
	};

	console.log("blogs", blogs);
	console.log("blogItem", blogItem);
	console.log("props", props);

	return (
		<>
			<button type="button" onClick={handleGetBlog}>
				Get Data
			</button>
			&nbsp;
			<button type="button" onClick={handleGetBlogByID}>
				Get By Url
			</button>
			&nbsp;
			<button type="button" onClick={handleClearBlog}>
				Clear Data
			</button>
			&nbsp;
			<button type="button" onClick={handleAddNewBlog}>
				Add New Blog
			</button>
			&nbsp;
			<button type="button" onClick={handleDeleteBlog}>
				Delete Blog
			</button>
			{blogs &&
				blogs.map((a: any) => (
					<div key={a.id}>
						<p>{a.id}</p>
						<p>{a.title}</p>
						<p>{a.url}</p>
						<p>{a.description}</p>
					</div>
				))}
		</>
	);
};
const mapStateToProps = ({ blog }: any) => ({
	blogs: blog.blogs,
	blogItem: blog.blogItem,
	status: blog.status,
});

export default connect(mapStateToProps, {
	...blogActions,
})(Blog);
