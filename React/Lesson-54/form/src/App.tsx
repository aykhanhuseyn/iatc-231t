import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { Button, Heading, VStack } from '@chakra-ui/react';
import { Form, FormItem } from './components';
import { UserSchema, resolver } from './validation';
import { ChildrenForm } from './modules';

function App() {
	const methods = useForm<UserSchema>({
		context: {
			year: 2020,
		},
		defaultValues: {
			firstName: 'John',
			age: 18,
			children: [
				{
					name: 'child 1',
					age: 2,
				},
			],
		},
		resolver,
		criteriaMode: 'all',
		mode: 'onSubmit',
		reValidateMode: 'onChange',
	});

	const onSubmit = (data: UserSchema) => {
		console.log(data);
	};

	const { lastName, gender } = methods.watch();

	useEffect(() => {
		methods.trigger('lastName');
	}, [methods, lastName, gender]);

	return (
		<VStack spacing={3}>
			<Heading as='h1' size='4xl'>
				forms
			</Heading>

			<Form w='100%' px='20' methods={methods} onSubmit={onSubmit}>
				<FormItem
					name='firstName'
					label='First name'
					helperText='Enter your first name'
					inputType='INPUT'
				/>

				<FormItem name='lastName' label='Last name' inputType='INPUT' />

				<FormItem name='age' label='Age' inputType='NUMBER' />

				{/* <FormItem name='gender' label='Gender' inputType='INPUT' /> */}
				<FormItem
					name='gender'
					label='Gender'
					inputType='SELECT'
					options={[
						{
							label: 'male',
							value: 'male',
						},
						{
							label: 'female',
							value: 'female',
						},
					]}
				/>

				<ChildrenForm />

				<Button type='submit' w='100%' colorScheme='teal' size='lg'>
					Submit
				</Button>
			</Form>

			<DevTool control={methods.control} />
		</VStack>
	);
}

export default App;
