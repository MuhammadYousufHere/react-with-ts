import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import styles from './CartLink.module.css';
import { getNumItems, getMemoizedNumItems } from './cartSlice';
export function CartLink() {
	// const numItems = useAppSelector(getNumItems);
	const numItemsMemo = useAppSelector(getMemoizedNumItems);
	return (
		<Link
			to='/cart'
			className={styles.link}>
			<span className={styles.text}>
				🛒&nbsp;&nbsp;{numItemsMemo ? numItemsMemo : 'Cart'}
			</span>
		</Link>
	);
}
