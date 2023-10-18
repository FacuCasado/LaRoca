import { Route, Routes } from 'react-router-dom';
import Login from './views/app-views/Login';

function App() {
	return (
		<div>
			<Routes>
				<Route
					path="/"
					element={<Login />}
				/>
			</Routes>
		</div>
	);
}

export default App;
