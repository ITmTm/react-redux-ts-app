export interface UserState {
		users: any[];
		loading: boolean;
		error: null | string;
}

// Создание элегантного варианта с перечислениями с enum
export enum UserActionType {
		FETCH_USERS = 'FETCH_USERS',
		FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
		FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

// Создание интерфейся для каждого actions
interface FetchUsersAction {
		type: UserActionType.FETCH_USERS;
}

interface FetchUsersSuccessAction {
		type: UserActionType.FETCH_USERS_SUCCESS;
		payload: any[];
}


interface FetchUsersErrorAction {
		type: UserActionType.FETCH_USERS_ERROR;
		payload: string;
}


// Объединение 3 actions воедино
export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction
