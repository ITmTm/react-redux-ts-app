import { TodoAction, TodoActionTypes, TodoState } from "../../types/todo";


const initialState: TodoState = {
		todos: [],
		page: 1,
		loading: false,
		error: null,
		limit: 10
}

export const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
		switch (action.type) {
				case TodoActionTypes.FETCH_TODOS:
						return {}
				case TodoActionTypes.FETCH_TODOS_SUCCESS:
						return {}
				case TodoActionTypes.FETCH_TODOS_ERROR:
						return {}
				case TodoActionTypes.SET_TODO_PAGE:
						return {}
				default:
						return state
		}
}