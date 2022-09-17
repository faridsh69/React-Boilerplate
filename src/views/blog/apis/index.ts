import { blogAxios } from "services";

export const getBlogListApi = (filters: any) =>
	blogAxios.get({
		endpoint: ``,
		params: filters,
	});

export const getBlogByIDApi = (url: string) =>
	blogAxios.get({
		endpoint: `${url}`, // Todo: just url
	});

export const addNewBlogApi = (data: any) =>
	blogAxios.post({
		endpoint: ``,
		data,
	});

export const deleteBlogApi = (id: number) =>
	blogAxios.delete({
		endpoint: `/id/${id}`,
	});
