import { useField } from 'formik';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import { getClasses } from './Helpers';

/**
 * You can use this component with single and multiple select
 * @param {*} children
 * @param {*} helperText, Set up helper text index the field
 * @param {*} className, //Boostrap classes
 * @returns
 */
const SelectComponent = ({
	children,
	helperText,
	className = '',
	...props
}) => {
	const [field, meta] = useField(props);
	return (
		<FormGroup>
			<Label
				for={props.id}
				className={'label-color'}
				hidden={!props.label ? true : false}>
				{props.label}
			</Label>
			<Input
				{...props}
				{...field}
				className={`select ${className} ${getClasses(
					meta.touched,
					meta.error
				)}`}>
				{props.defaultoption && <option value=''>{props.defaultoption}</option>}
				{children}
			</Input>
			{helperText && <small class='form-text text-muted'>{helperText}</small>}
			{meta.touched && meta.error && <FormFeedback>{meta.error}</FormFeedback>}
		</FormGroup>
	);
};

export default SelectComponent;
