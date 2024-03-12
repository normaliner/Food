import styles from './CartItem.module.css';
import { CartItemProps } from './CartItem.props';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slise';

function CartItem(props: CartItemProps) {
	const dispatch = useDispatch<AppDispatch>();
	const increase = () => {
		dispatch(cartActions.add(props.id));
	};
	const remove = () => {
		dispatch(cartActions.delete(props.id));
	};
	const decrease = () => {
		dispatch(cartActions.remove(props.id));
	};
	return (
		<div className={styles['item']}>
			<div
				className={styles['image']}
				style={{
					backgroundImage: `url('${props.image}')`
				}}
			></div>
			<div className={styles['description']}>
				<div className={styles['name']}>{props.name}</div>
				<div className={styles['price']}>{props.price}&nbsp;₽</div>
			</div>
			<div className={styles['actions']}>
				<button className={styles['minus']} onClick={decrease}>
					<img src='/decrease-icon.svg' alt='Deacrease'></img>
				</button>
				<div className={styles['number']}>{props.count}</div>
				<button className={styles['plus']} onClick={increase}>
					<img src='/increase-icon.svg' alt='Increase'></img>
				</button>
				<button className={styles['remove-button']} onClick={remove}>
					<img src='/remove-icon.svg' alt='Remove'></img>
				</button>
			</div>
		</div>
	);
}

export default CartItem;
