import React from "react";
import { useState } from "react";
import { useActions } from "./hooks/useActions";
import { useTypedSelector } from "./hooks/useTypedSelector";

const Blog: React.FC = () => {
	const [term, setTerm] = useState("");
	const {
		getBlogListRequest,
		getBlogByIDRequest,
		addBlogRequest,
		deleteBlogRequest,
		clearBlogs,
	} = useActions();
	const { blogs, blogItem, error, isLoading } = useTypedSelector(state => state.blog);

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		getBlogListRequest(term);
	};

	const handleGetBlog = () => {
		getBlogListRequest();
	};

	const handleGetBlogByID = () => {
		getBlogByIDRequest("blog-url-906443");
	};

	const handleAddNewBlog = () => {
		addBlogRequest({ title: "blog-top", url: "xwz-2000", description: "Its done" });
	};

	const handleDeleteBlog = () => {
		deleteBlogRequest(15);
	};

	const handleClearBlog = () => {
		clearBlogs();
	};
	console.log("blogItem", blogItem);

	return (
		<>
			<form onSubmit={onSubmit}>
				<input value={term} onChange={e => setTerm(e.target.value)} />
				&nbsp;
				<button>Search</button>
				&nbsp;
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
			</form>

			{error && <h3>{error}</h3>}
			{isLoading && <h3>Loading...</h3>}
			{!error &&
				!isLoading &&
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
export default Blog;

// const mapStateToProps = ({ blog }: any) => ({
// 	blogs: blog.blogs,
// 	blogItem: blog.blogItem,
// 	status: blog.status,
// });

// export default connect(mapStateToProps, {
// 	...blogActions,
// })(Blog);
