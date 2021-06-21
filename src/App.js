import * as Yup from 'yup';
import { Field, Formik } from 'formik';
import { FormGroup, Button, Form, Col } from 'reactstrap';

import {
	InputComponent,
	SelectComponent,
	RadioAndCheckBoxComponent,
} from './components';

let schema = Yup.object().shape({
	firstName: Yup.string().required('First name is a required field'),
	lastName: Yup.string().required('Last name is a required field'),
	city: Yup.string().required('City is a required field'),
	states: Yup.string().required('States is a required field'),
	multiple: Yup.array()
		.min(1, 'Please select at least one state')
		.required('States is a required field'),
	message: Yup.string().required('Message is a required field'),
	position: Yup.string().required('Posistion is a required field'),
	file: Yup.mixed().required('A file is a required field'),
	terms: Yup.array()
		.min(1, 'Must Accept Terms and Conditions')
		.required('Terms and Conditions is a required field'),
});

let initialValues = {
	firstName: '',
	lastName: '',
	city: '',
	states: '',
	multiple: [],
	message: '',
	terms: '',
	file: '',
	position: '',
};

const stateOptions = [
	{ value: 'AL', label: 'Alabama' },
	{ value: 'AK', label: 'Alaska' },
	{ value: 'AS', label: 'American Samoa' },
	{ value: 'AZ', label: 'Arizona' },
	{ value: 'AR', label: 'Arkansas' },
];

function App() {
	return (
		<div className='form d-flex flex-column'>
			<Formik
				initialValues={initialValues}
				validationSchema={schema}
				onSubmit={(data, { setSubmitting, resetForm }) => {
					setSubmitting(true);
					console.log(data);
					setSubmitting(false);
					resetForm();
				}}>
				{({ values, errors, handleSubmit, isSubmitting }) => (
					<Form onSubmit={handleSubmit}>
						<FormGroup row>
							<Col xs={12} sm={6}>
								<Field
									required
									id='firstName'
									name='firstName'
									type='input'
									as={InputComponent}
									label='First name'
								/>
							</Col>
							<Col xs={12} sm={6}>
								<Field
									required
									id='lastName'
									name='lastName'
									type='input'
									as={InputComponent}
									label='Last name'
								/>
							</Col>
						</FormGroup>
						<FormGroup row>
							<Col sm={6}>
								<Field
									required
									id='city'
									name='city'
									type='input'
									as={InputComponent}
									label='City'
								/>
							</Col>
							<Col xs={12} sm={6}>
								<Field
									required
									id='states'
									name='states'
									type='select'
									as={SelectComponent}
									label='State'
									defaultoption='Choose...'>
									{stateOptions.map(({ value, label }) => (
										<option key={value} value={value}>
											{label}
										</option>
									))}
								</Field>
							</Col>
						</FormGroup>
						<FormGroup row>
							<Col xs={12} sm={6}>
								<Field
									required
									id='multiple'
									name='multiple'
									type='select'
									as={SelectComponent}
									label='Multiple select'
									multiple>
									{stateOptions.map(({ value, label }) => (
										<option key={value} value={value}>
											{label}
										</option>
									))}
								</Field>
							</Col>
							<Col xs={12} sm={6}>
								<Field
									required
									id='message'
									name='message'
									type='textarea'
									as={InputComponent}
									label='Message'
									rows='3'
								/>
							</Col>
						</FormGroup>
						<FormGroup tag='fieldset'>
							<Field
								required
								inline
								id='radio1'
								name='position'
								type='radio'
								value='Developer'
								as={RadioAndCheckBoxComponent}
								label='Developer'
							/>
							<Field
								required
								inline
								id='radio2'
								name='position'
								type='radio'
								value='QA'
								showError
								as={RadioAndCheckBoxComponent}
								label='QA'
							/>
						</FormGroup>
						<FormGroup row>
							<Col xs={12}>
								<Field
									required
									id='file'
									name='file'
									type='file'
									as={InputComponent}
									label='Upload'
								/>
							</Col>
						</FormGroup>
						<FormGroup row>
							<Col xs={12}>
								<Field
									required
									id='terms'
									name='terms'
									type='checkbox'
									value='agree'
									showError
									as={RadioAndCheckBoxComponent}
									label='Terms and Conditions'
								/>
							</Col>
						</FormGroup>
						<br />
						<Button disabled={isSubmitting} type='submit' color='primary'>
							Submit
						</Button>
						<pre>{JSON.stringify(values, null, 2)}</pre>
						<pre>{JSON.stringify(errors, null, 2)}</pre>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default App;
