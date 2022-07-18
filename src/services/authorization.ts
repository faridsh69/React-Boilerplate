const getToken = () => {
	const user = localStorage.getItem("userToken");
	if (user) {
		const {access_token: accessToken} = JSON.parse(user || ({} as string));
		if (accessToken) {
			return accessToken;
		}
	}
	return null;
};

const getCommonHeaders = (config: any) => {
	const newConfig = {...config};
	newConfig.headers.Accept = "application/json";

	return newConfig;
};

export const unauthorizedInterceptor = async (error: any) => {
	if (error.response && error.response.status === 401) {
		localStorage.setItem("user", JSON.stringify({}));
		window.location.href = "/login";

		return Promise.reject(error);
	}

	if (error.response && error.response.data) {
		return Promise.reject(error.response.data);
	}

	return Promise.reject(error.message);
};

export const tokenInterceptor = (config: any) => {
	const newConfig = {...config};
	getCommonHeaders(config);
	const token = getToken() || process.env.REACT_APP_API_TOKEN;
	if (token) {
		newConfig.headers.Authorization = `Bearer ${token}`;
	}

	return newConfig;
};
