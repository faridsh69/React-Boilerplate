import { blogAxios } from "services";

export const getBlogListApi = (filters: any) =>
	blogAxios.get({
		endpoint: ``,
		params: filters,
	});

export const getBlogByIDApi = (url: string) =>
	blogAxios.get({
		endpoint: `${url}`,
	});

export const addNewBlogApi = (newData: any) =>
	blogAxios.post({
		endpoint: ``,
		data: newData,
	});

export const deleteBlogApi = (id: any) =>
	blogAxios.delete({
		endpoint: `/id/${id}`,
	});
