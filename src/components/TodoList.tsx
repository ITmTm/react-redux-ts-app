import React, { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const TodoList: React.FC = () => {
		const {page, todos, loading, limit, error} = useTypedSelector(state => state.todo);
		const {fetchTodos, setTodoPage} = useActions();
		const pages = [1, 2, 3, 4, 5];

		useEffect(() => {
				fetchTodos(page, limit)
		}, [page]);

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
						<div style={{display: 'flex', marginTop: 20, columnGap: 5, cursor: "pointer"}}>
								{pages.map(p =>
										<div
												onClick={() => setTodoPage(p)}
												key={p}
												style={{border: p === page ? '2px solid green' : '1px solid gray', padding: 10}}
										>
												{p}
										</div>
								)}
						</div>

				</div>
		);
};

export default TodoList;