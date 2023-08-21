import { Routes, Route } from 'react-router-dom';
import {
	Layout,
	ProductLayout,
	ProductItem,
	ProductCreate,
	ProductList,
} from './components';

const App = () => {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<h1>Home</h1>} />
				<Route path='about' element={<h1>about</h1>} />
				<Route path='contact' element={<h1>contact</h1>} />
				<Route path='product' element={<ProductLayout />}>
					<Route index element={<ProductList />} />
					<Route path=':id' element={<ProductItem />} />
					<Route path='new' element={<ProductCreate />} />
					<Route path='edit/:id' element={<ProductItem />} />
				</Route>
			</Routes>
		</Layout>
	);
};

export default App;
