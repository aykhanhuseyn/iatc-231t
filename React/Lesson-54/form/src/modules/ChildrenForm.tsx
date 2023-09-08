import { useFieldArray, useFormContext } from 'react-hook-form';
import {
	Button,
	IconButton,
	Divider,
	HStack,
	Stack,
	VStack,
	Text,
} from '@chakra-ui/react';
import { LiaPlusSolid, LiaTrashAlt } from 'react-icons/lia';
import { UserSchema } from '../validation';
import { FormItem } from '../components';

export const ChildrenForm = () => {
	const methods = useFormContext<UserSchema>();

	const { fields, append, remove } = useFieldArray({
		name: 'children',
		control: methods.control,
	});

	const addChild = () => {
		append({
			name: '',
			age: 0,
		});
	};

	return (
		<Stack>
			{methods.formState.errors.children?.map?.((error) => {
				return (
					<>
						<Text color='red.400'>{error?.age?.message}</Text>
						<Text color='red.400'>{error?.name?.message}</Text>
					</>
				);
			})}
			<VStack>
				{fields.map((field, index) => {
					return (
						<HStack key={field.id}>
							<FormItem
								name={`children.${index}.name`}
								inputType='INPUT'
								label={`child ${index + 1} name`}
							/>
							<FormItem
								name={`children.${index}.age`}
								inputType='NUMBER'
								label={`child ${index + 1} age`}
							/>

							<IconButton
								colorScheme='red'
								variant='outline'
								aria-label='delete child'
								icon={<LiaTrashAlt />}
								onClick={() => {
									remove(index);
								}}
							/>
						</HStack>
					);
				})}
			</VStack>
			<Divider />
			<Button
				mb={4}
				onClick={addChild}
				leftIcon={<LiaPlusSolid />}
				colorScheme='teal'
				variant='outline'
				disabled={Boolean(methods.formState.errors.children)}
			>
				Add child
			</Button>
		</Stack>
	);
};
