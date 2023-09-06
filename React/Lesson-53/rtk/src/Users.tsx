import {
	useLazyGetUsersQuery,
	useLazyGetUserByIdQuery,
	useCreateUserMutation,
} from './redux';

export const Users = () => {
	const [getUsers, { data, isLoading }] = useLazyGetUsersQuery();
	const [getUserById, { data: userData, isLoading: userIsLoading }] =
		useLazyGetUserByIdQuery();

	const [createUser, { data: createdUser, isLoading: creatingUser }] =
		useCreateUserMutation();

	return (
		<div>
			<h3>Users</h3>

			<button onClick={() => getUsers()}>Get All Users</button>
			{isLoading && <h3>Loading users...</h3>}
			{data && data.users.map((user) => <p key={user.id}>{user.firstName}</p>)}

			<button onClick={() => getUserById('1')}>Get User Id 1</button>
			{userIsLoading && <h3>Loading user...</h3>}
			{userData && <p>{userData.id}</p>}

			<button
				onClick={() => {
					createUser({
						firstName: 'Jirtdan',
						lastName: 'Divson',
						address: {
							address: 'asdsad',
							city: 'Baku',
							coordinates: {
								lat: 1,
								lng: 1,
							},
							postalCode: 'AZ1000',
							state: '',
						},
						age: 22,
						bank: {
							cardExpire: '',
							cardNumber: '',
							cardType: '',
							currency: '',
							iban: '',
						},
					});
				}}
			>
				create user
			</button>

			{creatingUser && <h3>Creating a user...</h3>}
			{createdUser && <p>{createdUser.firstName}</p>}
		</div>
	);
};
