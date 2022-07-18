import React, {useEffect} from "react";
import {blogApi} from "./services";

export const getBlogs = () =>
	blogApi.get({
		endpoint: "",
	});

export const getBlog = (id: number) =>
	blogApi.get({
		endpoint: `/id/${id}`,
	});

function App() {
	useEffect(() => {
		// getBlogs().then((res: any) => {
		// 	// console.log(res.data);
		// });
		// getBlog(1).then((res: any) => {
		// 	// console.log(res.data);
		// });
	}, []);

	return <div className="App">123</div>;
}

export default App;
