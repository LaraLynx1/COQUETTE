import { AppState, SomeActions } from '../types/store';

/* export const reducer = (currentAction: any, currentState: any): AppState => {
	return { screen: '' };
};  */

export const reducer = (currentAction: any, currentState: any) => {
	const { action, payload } = currentAction;

	switch (action) {
		case SomeActions.changescreen:
			currentState.screen = payload;

			break;
	}

	return currentState;
};
