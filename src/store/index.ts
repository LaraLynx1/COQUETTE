import Storage, { PersistanceKeys } from '../utils/storage';
import { Actions, AppState, Observer } from '../types/store';
import { reducer } from './reducer';
import { PANTALLAS } from '../types/enumeraciones';

const emptyState: AppState = {
	screen: PANTALLAS.DASHBOARD,
};

export let appState = Storage.get<AppState>({
	key: PersistanceKeys.STORE,
	defaultValue: emptyState,
});

let observers: Observer[] = [];

const persistStore = (state: AppState) => Storage.set({ key: PersistanceKeys.STORE, value: state });

const notifyObservers = () => observers.forEach((o) => o.render());

export const dispatch = (action: any) => {
	const clone = JSON.parse(JSON.stringify(appState));
	const newState = reducer(action, clone);
	appState = newState;

	persistStore(newState);
	notifyObservers();
};

export const addObserver = (ref: Observer) => {
	observers = [...observers, ref];
};
