import React, { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const TodoList: React.FC = () => {
		const {page, todos, loading, limit, error} = useTypedSelector(state => state.todo);
		const {fetchTodos} = useActions();

		useEffect(() => {
				fetchTodos(page, limit)
		}, []);

		if (loading) {
				return <h1>Идет загрузка...</h1>
		}

		if (error) {
				return <h1>{error}</h1>
		}

		return (
				<div style={{fontSize: "1.5rem"}}>
						{todos.map(todo =>
								<div key={todo.id}>{todo.id} - {todo.title}</div>

						)}
				</div>
		);
};

export default TodoList;