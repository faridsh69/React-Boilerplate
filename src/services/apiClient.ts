import axios from "axios";
import i18next from "i18next";
import { tokenInterceptor, unauthorizedInterceptor } from "./authorization";

interface IApiClientInterface {
	baseURL: any;
	httpClient: any;
}

export default class ApiClient implements IApiClientInterface {
	constructor(baseURL: any, auth = true) {
		this.baseURL = baseURL;
		this.httpClient = axios.create({ baseURL });
		if (auth) {
			this.httpClient.interceptors.request.use(tokenInterceptor);
		}
		this.httpClient.interceptors.response.use(null, unauthorizedInterceptor);
		this.httpClient.defaults.headers.common["Content-Language"] = i18next.language;
	}

	baseURL: any;

	httpClient: any;

	delete({ endpoint, params, options }: any) {
		return this.httpClient.delete(endpoint, {
			params,
			...options,
		});
	}

	get({ endpoint, params, options }: any) {
		return this.httpClient.get(endpoint, {
			params,
			...options,
		});
	}

	// patch({endpoint, data, options}: any) {
	// 	data = {
	// 		...data,
	// 		_method: "patch",
	// 	};

	// 	return this.httpClient.post(endpoint, data, options);
	// }

	post({ endpoint, data, options }: any) {
		return this.httpClient.post(endpoint, data, options);
	}

	put({ endpoint, data, options }: any) {
		return this.httpClient.put(endpoint, data, options);
	}

	// postUrlencoded({endpoint, data, options}: any) {
	// 	options = options || {};

	// 	return this.httpClient.post(endpoint, data, {
	// 		...options,
	// 		headers: {
	// 			...options.headers,
	// 			"Content-Type": "application/x-www-form-urlencoded",
	// 		},
	// 	});
	// }

	// upload({endpoint, data, options}: any) {
	// 	options = options || {};

	// 	return this.httpClient.post(endpoint, data, {
	// 		...options,
	// 		headers: {
	// 			"Content-Type": "multipart/form-data",
	// 			...options.headers,
	// 		},
	// 	});
	// }

	// uploadPut({endpoint, data, options}: any) {
	// 	options = options || {};

	// 	return this.httpClient.put(endpoint, data, {
	// 		...options,
	// 		headers: {
	// 			...options.headers,
	// 			"Content-Type": "multipart/form-data",
	// 		},
	// 	});
	// }

	download({ endpoint }: any) {
		return this.httpClient({
			url: endpoint,
			method: "GET",
			responseType: "blob",
		});
	}
}
