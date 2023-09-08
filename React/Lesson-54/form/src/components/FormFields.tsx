import {
	HTMLChakraProps,
	Input,
	InputProps,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	Select,
	SelectProps,
} from '@chakra-ui/react';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

interface FieldProps {
	name: string;
}

interface NumberFieldProps
	extends FieldProps,
		Omit<HTMLChakraProps<'input'>, 'name'> {}

const NumberField: FC<NumberFieldProps> = ({ name, ...rest }) => {
	const methods = useFormContext();
	return (
		<NumberInput>
			<NumberInputField {...rest} {...methods.register(name)} />
			<NumberInputStepper>
				<NumberIncrementStepper />
				<NumberDecrementStepper />
			</NumberInputStepper>
		</NumberInput>
	);
};

interface InputFieldProps extends FieldProps, Omit<InputProps, 'name'> {}

const InputField: FC<InputFieldProps> = ({ name, ...rest }) => {
	const methods = useFormContext();
	return <Input {...rest} {...methods.register(name)} />;
};

interface SelectFieldProps extends FieldProps, Omit<SelectProps, 'name'> {
	options: { label: string; value: string }[];
}

const SelectField: FC<SelectFieldProps> = ({ name, options }) => {
	const methods = useFormContext();
	return (
		<Select {...methods.register(name)}>
			{options.map(({ label, value }) => (
				<option key={value} value={value}>
					{label}
				</option>
			))}
		</Select>
	);
};

export const Field = {
	NUMBER: NumberField,
	INPUT: InputField,
	SELECT: SelectField,
};
