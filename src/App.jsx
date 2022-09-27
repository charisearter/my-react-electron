import React, { useState } from 'react';

function App() {
	const [msg, setMsg] = useState('This is a message.');
  const [count, setCount] = useState(0);
  
	// say Hello test
	const clicked = async () => {
		const result = await api.sayHello('Hello!');
		console.log(result);
	};

	// Send Message Renderer --> Main
	const sendMessage = () => {
		window.api.sendMsg(msg);
		setMsg('');
	};

	const onChange = e => {
		e.preventDefault();
		setMsg(e.target.value);
	};

	// Auto Counter - Main --> Renderer
	window.api.onCount(data => {
		setCount(data);
	});

	return (
		<div>
			<h1> Say Hello test</h1>
			<button onClick={clicked}>Click Me</button>

			<hr />
			<h2> Message Example </h2>
			<input type='text' value={msg} onChange={onChange} />
			<button onClick={sendMessage}>Send a message</button>

			<hr />
			<h2> Auto Counter</h2>

			<h1>Count: {count}</h1>
		</div>
	);
}

export default App;
