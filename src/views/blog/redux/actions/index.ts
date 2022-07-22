import { createActions } from "reduxsauce";

const blogActionList = {
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

const { Types: blogTypes, Creators: blogActions } = createActions(blogActionList);

console.log("Types, Actions", blogTypes, blogActions);
export { blogTypes, blogActions };
