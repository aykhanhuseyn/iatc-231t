import { object, string, number, array, InferType } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const validationSchema = object().shape({
	firstName: string()
		// .min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.when('$year', {
			is: 2021,
			then: (y) => y.required('First name is required'),
			otherwise: (y) => y.notRequired(),
		}),
	lastName: string()
		.when('gender', {
			is: 'male',
			then: (y) => y.matches(/ov$/, 'Lastname must end with "ov"'),
			otherwise: (y) => y.matches(/ova$/, 'Last name must end with "ova"'),
		})
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Last name is required'),
	gender: string().oneOf(['male', 'female']),
	age: number()
		.typeError('Age must be a number')
		.min(18, 'You must be at least 18 years old')
		.max(99, 'You must be at most 99 years old')
		.required('Age is required'),
	children: array()
		.of(
			object().shape({
				name: string().required('Name is required'),
				age: number()
					.min(1, 'You must be at least 1 years old')
					.max(99, 'You must be at most 99 years old')
					.test({
						name: 'notOlderThanParent',
						message: 'Child must be younger than parent',
						test(value = 0) {
							const parentAge = (this.from?.[1].value.age as number) || 0;
							return value < parentAge;
						},
					})
					.required('Age is required'),
			}),
		)
		.min(1, 'You must have at least 1 child')
		.max(5, 'You can have at most 5 children'),
});

export const resolver = yupResolver(validationSchema);

export type UserSchema = InferType<typeof validationSchema>;
