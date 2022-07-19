import { blogAxios } from "services";

export const getBlogListApi = (filters: any) =>
	blogAxios.get({
		endpoint: ``,
		params: filters,
	});
