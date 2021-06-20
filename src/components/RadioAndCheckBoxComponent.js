import { useField } from 'formik';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import { getClasses } from './Helpers';

/**
 * You can use this component with radio and checkbox type
 *
 * @param helperText, Set up helper text index the field
 * @param className, //Boostrap classes
 * @param showError, //Show error undex each radio or checkbox
 * @returns
 */

const RadioAndCheckBoxComponent = ({
	helperText,
	inline = false,
	className = '',
	showError = false,
	...props
}) => {
	const [field, meta] = useField(props);
	return (
		<>
			<FormGroup check inline={inline}>
				<Input
					{...props}
					{...field}
					className={` ${className} ${getClasses(meta.touched, meta.error)}`}
				/>{' '}
				<Label
					check
					for={props.id}
					className={'label-color'}
					hidden={!props.label ? true : false}>
					{props.label}
				</Label>
				{helperText && <small class='form-text text-muted'>{helperText}</small>}
			</FormGroup>
			{meta.touched && meta.error && showError && (
				<FormFeedback style={{ display: 'block' }}>{meta.error}</FormFeedback>
			)}
		</>
	);
};

export default RadioAndCheckBoxComponent;
