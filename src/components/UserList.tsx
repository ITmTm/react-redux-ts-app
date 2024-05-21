import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";

const UserList: React.FC = () => {
		const {users, loading, error} = useTypedSelector(state => state.user);
		return (
				<div>

				</div>
		)
}

export default UserList;