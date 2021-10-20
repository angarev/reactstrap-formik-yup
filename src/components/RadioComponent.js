import React from "react";
import { useField } from "formik";
import { FormFeedback, FormGroup, CustomInput, Input, Label } from "reactstrap";
import { getClasses } from "./Helpers";

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
	className = "",
	showError = true,
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
			<CustomInput
				inline={inline}
				{...props}
				{...field}
				invalid={Boolean(meta.touched && meta.error)}
				label={required ? requiredLabel(props.label) : props.label}
				className={` ${className} ${getClasses(meta.touched, meta.error)}`}
			/>
			{helperText && (
				<small className='form-text text-muted'>{helperText}</small>
			)}
			{meta.touched && meta.error && showError && (
				<FormFeedback style={{ display: "block" }}>{meta.error}</FormFeedback>
			)}
		</>
	);
};

export default RadioAndCheckBoxComponent;
