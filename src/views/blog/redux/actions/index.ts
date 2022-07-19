import { createActions } from "reduxsauce";

const blogActionList = {
	getBlogListRequest: ["filters"],
	getBlogListSuccess: ["payload"],
	getBlogListFailure: ["error"],
};

const { Types: blogTypes, Creators: blogActions } = createActions(blogActionList);

console.log("Types, Actions", blogTypes, blogActions);
export { blogTypes, blogActions };
