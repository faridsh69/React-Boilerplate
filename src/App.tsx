import React, { useEffect } from "react";
import Blog from "views/blog";

function App() {
	useEffect(() => {
		// getBlogs().then((res: any) => {
		// 	// console.log(res.data);
		// });
		// getBlog(1).then((res: any) => {
		// 	// console.log(res.data);
		// });
	}, []);

	return (
		<div className="App">
			<Blog />
		</div>
	);
}

export default App;
