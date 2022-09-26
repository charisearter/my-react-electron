import React from 'react';

function App() {

  // say Hello test
	const clicked = async () => {
		const result = await myAPI.sayHello('Hello! This is the renderer.');
		console.log(result);
	};

  // Renderer --> Main One-way example from IPC Electron docs
	return (
		<div>
			<h1> Say Hello test</h1>
			<button onClick={clicked}>Click Me</button>
		</div>
	);
}

export default App;
