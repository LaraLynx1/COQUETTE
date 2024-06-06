export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	screen: string;
	user: string;
};

export enum SomeActions {
	'X' = 'X',
	'changescreen' = 'changescreen',
}

export interface XAction {
	action: SomeActions.X;
	payload: Pick<AppState, 'screen'>;
}

export type Actions = XAction;

export const navigate = (screen: string) => {
	return {
		action: SomeActions.changescreen,
		payload: screen,
	};
};

export const setUserCredentials = (user: string) => {
	return {
		action: 'SETUSER',
		payload: user,
	};
};

export const connecteduser= (user: string) => {
	return {
		action: 'CONNECTUSER',
		payload: user,
	};
};