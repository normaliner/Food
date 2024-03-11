import { configureStore } from '@reduxjs/toolkit';
import userSlice, { JWT_PRESISTENT_STATE } from './user.slice';
import { saveState } from './storage';
import cartSlise from './cart.slise';

export const store = configureStore({
	reducer: {
		user: userSlice,
		cart: cartSlise
	}
});

store.subscribe(() => {
	saveState({ jwt: store.getState().user.jwt }, JWT_PRESISTENT_STATE);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
