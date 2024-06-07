export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	screen: string;
	user: string | undefined;
	userpfp: string | undefined;
};

export enum SomeActions {
	'X' = 'X',
	'changescreen' = 'changescreen',
	'setuser' = 'SETUSER',
	'unsetuser' = 'UNSETUSER',
	'setUserPfp' = 'SETUSERPFP',
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

export const loginUser = (user: string) => {
	return {
		action: SomeActions.setuser,
		payload: user,
	};
};

export const logoutUser = (user: string) => {
	return {
		action: SomeActions.unsetuser,
		payload: user,
	};
};

export const setUserPfp = (userpfp: string) => {
	return {
		action: SomeActions.setUserPfp,
		payload: userpfp,
	};
};
