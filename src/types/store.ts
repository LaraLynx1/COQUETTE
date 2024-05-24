export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	screen: string;
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
