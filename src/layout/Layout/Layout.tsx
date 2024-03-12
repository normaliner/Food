import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../components/Button/Button';

import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { getProfile, userActions } from '../../store/user.slice';
import { useEffect } from 'react';

export function Layout() {
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();
	const profile = useSelector((s: RootState) => s.user.profile);
	const items = useSelector((s: RootState) => s.cart.items);

	useEffect(() => {
		dispatch(getProfile());
	}, [dispatch]);
	const logout = () => {
		dispatch(userActions.logout());
		navigate('/auth/login');
	};
	return (
		<div className={styles['layout']}>
			<div className={styles['sidebar']}>
				<div className={styles['user']}>
					<img className={styles['avatar']} src='/avatar.png' alt='Avatar' />
					<div className={styles['name']}>{profile?.name}</div>
					<div className={styles['email']}>{profile?.email}</div>
				</div>
				<div className={styles['menu']}>
					<NavLink
						to='/'
						className={({ isActive }) =>
							cn(styles['link'], {
								[styles['active']]: isActive
							})
						}
					>
						<img src='/menu-icon.svg' alt='Menu' /> Меню
					</NavLink>
					<NavLink
						to='/cart'
						className={({ isActive }) =>
							cn(styles['link'], {
								[styles['active']]: isActive
							})
						}
					>
						<img src='cart-icon.svg' alt='Cart' />
						Корзина{' '}
						<span className={styles['cart-count']}>
							{items.reduce((acc, item) => (acc += item.count), 0)}
						</span>
					</NavLink>
				</div>
				<Button appearence='small' className={styles['exit']} onClick={logout}>
					<img src='/quit.svg' alt='Quit' />
					Выйти
				</Button>
			</div>
			<div className={styles['content']}>
				<Outlet />
			</div>
		</div>
	);
}
