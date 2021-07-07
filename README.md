# reactstrap-formik-yup

Building React Forms with [Reactstrap](https://reactstrap.github.io/), [Formik](https://github.com/jaredpalmer/formik) and [Yup](https://github.com/jquense/yup).
A simple reactstrap components that you can use with formik and yup.

[Demo](https://reactstrap-formik-yup.vercel.app/)

## Getting Started

Create your app. Follow the create-react-app [instructions](https://create-react-app.dev/docs/getting-started).

```sh
npx create-react-app my-app
cd my-app/
npm start
```

## Add reactstrap-formik-yup

```sh
npm i reactstrap-formik-yup
```

## Dependencies

Add reactstrap, formik, yup and classnames and bootstrap from NPM. reactstrap-formik-yup
does not include Bootstrap so this needs to be installed as well

```sh
npm i reactstrap formik yup classnames bootstrap@4.6.0
```

Import Bootstrap CSS in the ```src/index.js``` file:

```js
import 'bootstrap/dist/css/bootstrap.css';
```
or

Add bootstrap to your ```style.scss``` file and include ```style.scss``` in the ```src/index.js```:
```scss
@import "~bootstrap/scss/bootstrap";
```

Import required reactstrap-formik-yup components within your custom component files:

```js
import {InputComponent,	SelectComponent,RadioAndCheckBoxComponent} from 'reactstrap-formik-yup';
```

Once you create your form with a formik you can use them with formik Field

```js
<Field
    required //Optional
    id='firstName'
    name='firstName'
    type='input'
    validation={false}//Optional - show or hide validation
    as={InputComponent}
    label='First name'
/>

<Field
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

<Field
    customInput//Optional
    required //Optional
    inline
    id='radio2'
    name='position'
    type='radio'
    value='Developer'
    showError //Optional
    as={RadioAndCheckBoxComponent}
    label='Developer'
/>
```
## Development
```sh
git clone https://github.com/angarev/reactstrap-formik-yup.git
npm install 
```
