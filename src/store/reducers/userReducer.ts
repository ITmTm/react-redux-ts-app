interface UserState {
		users: any[];
		loading: boolean;
		error: null | string;
}

	// Создание элегантного варианта с перечислениями с enum
enum UserActionType {
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
type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction

const initialState: UserState = {
		users: [],
		loading: false,
		error: null
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
		switch (action.type) {
				case UserActionType.FETCH_USERS:
						return {loading: true, error: null, users: []};
				case UserActionType.FETCH_USERS_SUCCESS:
						return {loading: false, error: null, users: action.payload};
				case UserActionType.FETCH_USERS_ERROR:
						return {loading: false, error: action.payload, users: []};
				default:
						return state;
		}
}