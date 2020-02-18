import React from 'react';
import s from './App.module.styl';
import logo from './logo.svg';

console.log(s);
function App() {
	return (
		<header className={s.header}>
			<img src={logo} />
		</header>
	);
}

export default App;
