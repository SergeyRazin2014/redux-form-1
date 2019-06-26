import React from 'react';
import { Field, reduxForm } from 'redux-form';

const renderComponent = ({ input, placeholder, type, meta: { touched, error } }) => {

    if (error) {
        alert(JSON.stringify(error));
    }

    return <input {...input} placeholder={placeholder} type={type} />
}


class LoginForm extends React.Component {
    render() {

        const { handleSubmit, pristine, reset, submitting } = this.props;

        //МОЖНО ДАЖЕ ТАК ДЕЛАТЬ
        //this.props.dispatch({type:"TEST2"})




        return (
            <form onSubmit={handleSubmit}>
                <Field
                    name='firstName'
                    component={renderComponent}
                    type="text"
                    placeholder="First Name"
                />

                <Field
                    name='lastName'
                    component='input'
                    type="text"
                    placeholder="LastName Name"
                />

                <button type="submit" >Submit</button>


            </form>
        )
    }

}

export default reduxForm({ form: 'simpleForm' })(LoginForm);