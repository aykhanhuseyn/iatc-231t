import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User, UsersResponse } from '../models';

const api = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://dummyjson.com/users',
	}),
	reducerPath: 'users',
	endpoints: (build) => ({
		getUsers: build.query<UsersResponse, void>({
			query: () => '',
		}),
		getUserById: build.query<User, string>({
			query: (id: string) => id,
		}),
		createUser: build.mutation<Partial<User>, Partial<User>>({
			query(arg) {
				return {
					url: 'add',
					method: 'POST',
					body: arg,
				};
			},
		}),
	}),
});

// const { data, isLoading, isError } = useGetUsersQuery();
// const [getUser, { data, isLoading }] = useLazyGetUsersQuery();
// useGetUserByIdQuery(id)

// useEffect(() => {}, [data, isLoading])

export const {
	useLazyGetUsersQuery,
	useLazyGetUserByIdQuery,
	useCreateUserMutation,
} = api;

export default api;
