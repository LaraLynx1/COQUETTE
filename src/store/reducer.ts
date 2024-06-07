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

		case SomeActions.setuser:
			currentState.user = payload;
			break;

		case SomeActions.unsetuser:
			currentState.user = undefined;
			break;

		case SomeActions.setUserPfp:
			currentState.userpfp = payload;
			break;
	}

	return currentState;
};
