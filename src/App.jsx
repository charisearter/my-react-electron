import React, { useState } from 'react';

function App() {
	const [title, setTitle] = useState('Change the Title');
	// say Hello test
	const clicked = async () => {
		const result = await myAPI.sayHello('Hello! This is the renderer.');
		console.log(result);
	};

	// set Title

	const changeTitle = e => {
		setTitle(e.target.value);
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
