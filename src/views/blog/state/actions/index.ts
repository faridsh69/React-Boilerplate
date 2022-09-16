import { createActions } from "reduxsauce";

interface BlogListActionType {
	payload: any;
	error: string;
}

const BlogListAction = {
	getBlogListRequest: ["filters"],
	getBlogListSuccess: ["payload"],
	getBlogListFailure: ["error"],

	getBlogByIDRequest: ["url"],
	getBlogByIDSuccess: ["payload"],
	getBlogByIDFailure: ["error"],

	addBlogRequest: ["newData"],
	addBlogSuccess: ["payload"],
	addBlogFailure: ["error"],

	deleteBlogRequest: ["id"],
	deleteBlogSuccess: ["payload"],
	deleteBlogFailure: ["error"],

	clearBlogs: ["clear"],
};

const { Types: blogTypes, Creators: blogActions } = createActions(BlogListAction);
console.log("Types, Actions", blogTypes, blogActions);

export { blogTypes, blogActions };
export type Action = BlogListActionType;
