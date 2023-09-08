import type { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import {
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
} from '@chakra-ui/react';
import type { UserSchema } from '../validation';
import { Field } from './FormFields';

interface FormItemProps {
	name: string;
	helperText?: string;
	label?: string;
	inputType: keyof typeof Field;
}

export const FormItem: FC<FormItemProps> = ({
	name,
	label,
	helperText,
	inputType,
	...rest
}) => {
	const methods = useFormContext();

	const Component = Field[inputType];

	return (
		<FormControl
			isInvalid={Boolean(methods.formState.errors[name])}
			mb={5}
			w='100%'
		>
			{label && <FormLabel>{label}</FormLabel>}

			<Component name={name} {...rest} />

			{methods.formState.errors[name] && (
				<FormErrorMessage>
					{methods.formState.errors[name]?.message as string}
				</FormErrorMessage>
			)}

			{!methods.formState.errors[name] && helperText && (
				<FormHelperText>{helperText}</FormHelperText>
			)}
		</FormControl>
	);
};
