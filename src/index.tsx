import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { getOrInitializeStore } from './lib/redux';
import { routes } from './routes'
import Layout from './components/Layout'

const reduxStore = getOrInitializeStore(undefined);
const store = getOrInitializeStore(reduxStore.getState());

const App = () => {
	return (
		<Layout>
			<Router>
				<Switch>
					{routes.map(route => {
						return (
							<Route
								key={route.name}
								path={route.path}
								exact
							>
								<route.component/>
							</Route>
						);
					})}
				</Switch>
			</Router>
		</Layout>
	);
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	,
	document.getElementById('root')
);
