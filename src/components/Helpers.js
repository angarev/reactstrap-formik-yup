import classNames from 'classnames';
export const getClasses = (touched, error) => {
	return classNames({
		'is-invalid': touched && error,
		'is-valid': touched && !error,
	});
};
