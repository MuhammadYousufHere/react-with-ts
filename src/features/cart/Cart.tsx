import React from 'react';
import className from 'classnames';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

import styles from './Cart.module.css';
import {
	deleteItem,
	getTotalPrice,
	updateItemQuantity,
	checkoutCart,
} from './cartSlice';
import {} from './cartSlice';
export function Cart() {
	const dispatch = useAppDispatch();

	const products = useAppSelector(state => state.products.products);
	const items = useAppSelector(state => state.cart.items);
	const totalPrice = useAppSelector(getTotalPrice);
	const checkOutState = useAppSelector(state => state.cart.checkOut);
	const errorMessage = useAppSelector(state => state.cart.errorMessage);

	//handling onBlur
	const onQuantityUpdate = (
		e: React.FocusEvent<HTMLInputElement>,
		id: string
	) => {
		const quantity = Number(e.target.value) ?? 0;
		dispatch(updateItemQuantity({ id, quantity }));
	};
	const handleCheckOut = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// dispatch(checkoutCart(items));
		dispatch(checkoutCart());
	};
	// gives single class name based on provided onject
	const tabelClassnames = className({
		[styles.table]: true,
		[styles.checkoutLoading]: checkOutState === 'Loading',
		[styles.checkoutError]: checkOutState === 'Error',
	});
	return (
		<main className='page'>
			<h1>Shopping Cart</h1>
			<table className={tabelClassnames}>
				<thead>
					<tr>
						<th>Product</th>
						<th>Quantity</th>
						<th>Total</th>
						<th>Remove</th>
					</tr>
				</thead>
				<tbody>
					{Object.entries(items).map(([id, quantity]) => (
						<tr key={id}>
							<td>{products[id].name}</td>
							<td>
								<input
									type='text'
									className={styles.input}
									defaultValue={quantity}
									onBlur={e => onQuantityUpdate(e, id)}
								/>
							</td>
							<td>{products[id].price}</td>
							<td>
								<button
									className={styles.btn_del}
									aria-label={`Remove ${products[id].name} from Shopping Cart`}
									onClick={() => dispatch(deleteItem(id))}>
									&times;
								</button>
							</td>
						</tr>
					))}
				</tbody>
				<tfoot>
					<tr>
						<td>Total</td>
						<td></td>
						<td className={styles.total}>${totalPrice}</td>
						<td></td>
					</tr>
				</tfoot>
			</table>
			<form onSubmit={handleCheckOut}>
				{checkOutState === 'Error' && errorMessage ? (
					<p className={styles.errorBox}>{errorMessage}</p>
				) : (
					''
				)}
				<button
					className={styles.button}
					type='submit'>
					Checkout
				</button>
			</form>
		</main>
	);
}
