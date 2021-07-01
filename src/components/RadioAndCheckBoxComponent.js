import React from 'react';
import { useField } from 'formik';
import { FormFeedback, FormGroup, CustomInput, Input, Label } from 'reactstrap';
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
	required,
	inline,
	className = '',
	customInput = false,
	showError = false,
	...props
}) => {
	const [field, meta] = useField(props);

	const requiredLabel = (label) => {
		return (
			<>
				{label} <span className='text-danger'> *</span>
			</>
		);
	};

	return (
		<>
			{customInput ? (
				<>
					<CustomInput
						inline={inline}
						{...props}
						{...field}
						invalid={Boolean(meta.touched && meta.error)}
						label={required ? requiredLabel(props.label) : props.label}
						className={`${className}`}
					/>
					{helperText && (
						<small class='form-text text-muted'>{helperText}</small>
					)}
				</>
			) : (
				<FormGroup check inline={inline}>
					<>
						<Input
							{...props}
							{...field}
							className={` ${className} ${getClasses(
								meta.touched,
								meta.error
							)}`}
						/>
						<Label
							check
							for={props.id}
							className={'label-color'}
							hidden={!props.label ? true : false}>
							{props.label}
							{required && <span className='text-danger'> *</span>}
						</Label>
					</>

					{helperText && (
						<small class='form-text text-muted'>{helperText}</small>
					)}
				</FormGroup>
			)}
			{meta.touched && meta.error && showError && (
				<FormFeedback style={{ display: 'block' }}>{meta.error}</FormFeedback>
			)}
		</>
	);
};

export default RadioAndCheckBoxComponent;
