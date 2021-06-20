import { useField } from 'formik';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import PropTypes from 'prop-types';
import { getClasses } from './Helpers';

/**
 * You can use this component with input, textarea and file type
 *
 * @param {*} helperText, Set up helper text index the field
 * @param {*} className, //Boostrap classes
 * @returns
 */
const InputComponent = ({ helperText, className, ...props }) => {
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
				className={`${className} ${getClasses(meta.touched, meta.error)}`}
			/>
			{helperText && <small class='form-text text-muted'>{helperText}</small>}
			{meta.touched && meta.error && <FormFeedback>{meta.error}</FormFeedback>}
		</FormGroup>
	);
};

export default InputComponent;

InputComponent.propTypes = {
	user: PropTypes.shape({}),
	onLogin: PropTypes.func.isRequired,
	onLogout: PropTypes.func.isRequired,
	onCreateAccount: PropTypes.func.isRequired,
};

InputComponent.defaultProps = {
	helperText: '',
	className: '',
};