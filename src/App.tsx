import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Products } from './features/products/Products';
import { Cart } from './features/cart/Cart';
import './App.css';
import Form from './pages/Form/Form';
import Navbar from './components/Navigation/Navbar';
import { oc } from './AdvanceTS/OptionalChaining';
import { RangeGen } from './AdvanceTS/AdvanceTypes/Unknown';
import Footer from './components/Footer/Footer';
import TodoApp from './pages/Todo/TodoApp';
function App() {
	const { serializeJSON } = oc;
	const person = {
		name: 'Asim',
		age: 22,
	};
	// const json = serializeJSON(person, {
	// 	formatting: {
	// 		indent: 2,
	// 	},
	// });
	const json = serializeJSON(person, {
		formatting: {
			getIndent: () => 2,
		},
	});
	console.log(json);
	console.log(serializeJSON(person));
	console.log(RangeGen.rangeArr(2, 8));
	return (
		<>
			<Navbar />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/products'
					element={<Products />}
				/>

				<Route
					path='/signin'
					element={<Form />}
				/>
				<Route
					path='/cart'
					element={<Cart />}
				/>
			</Routes>
		</>
	);
}

export default App;

function Home() {
	return (
		<>
		<main className='page'>
			<h1>Welcome to the Store</h1>
			<figure>
				<img
					src='/store.jpg'
					alt='A large old storefront'
					width='800'
				/>
				<figcaption>Gary Houston, CC0, via Wikimedia Commons</figcaption>
			</figure>
		</main>
		<Footer/>
		<TodoApp/>
		</>
	);
}
