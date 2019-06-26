import React from 'react';
import LoginForm from '../login-form';
import LoginForm2 from '../login-form2';
import store from '../../store';
import { SubmissionError } from 'redux-form';

//@
const test = (values) => {

    debugger;

    if (!values.firstName) {
        throw new SubmissionError({
            firstName: 'first name error',
            _error: 'login failed'
        })
    }

    alert(JSON.stringify(values));
    store.dispatch({ type: 'HELLO_TEST' });

}

//@
class App extends React.Component {
    render() {
        return <LoginForm onSubmit={test} />
        //return <LoginForm2 />
    }
}

export default App;