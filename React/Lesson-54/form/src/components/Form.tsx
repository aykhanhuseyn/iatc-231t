import type { ReactNode, FC } from 'react';
import { type UseFormReturn, FormProvider } from 'react-hook-form';
import { chakra, ChakraProps } from '@chakra-ui/react';
import type { UserSchema } from '../validation';

interface FormProps extends ChakraProps {
	onSubmit: (data: UserSchema) => void;
	children: ReactNode;
	methods: UseFormReturn<UserSchema>;
}

export const Form: FC<FormProps> = ({
	children,
	methods,
	onSubmit,
	...rest
}) => {
	return (
		<FormProvider {...methods}>
			<chakra.form {...rest} onSubmit={methods.handleSubmit(onSubmit)}>
				{children}
			</chakra.form>
		</FormProvider>
	);
};
