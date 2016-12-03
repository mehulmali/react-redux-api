/**
 * Created by User on 10/19/2016.
 */

import React from 'react';
import map from 'lodash/map';
import classnames from 'classnames';
import { browserHistory } from 'react-router';

import timezones from '../../data/timezones';
import validateInput from '../../../server/shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            timezone: '',
            errors: {},
            isLoading: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    isValid() {
        const { errors, isValid } = validateInput(this.state);

        if (!isValid) {
            this.setState({errors});
        }

        return isValid;
    }

    onSubmit(e) {
        e.preventDefault();

        if (this.isValid()) {
            this.setState({errors: {}, isLoading: true});
            this.props.userSignupRequest(this.state).then(
                () => { //success block
                    this.props.addFlashMessage({
                        type:'success',
                        text:'You signup successfully. Welcome!'
                    });

                    //browserHistory.push('/');
                    this.context.router.push('/');
                },
                (err) => { //error block
                    this.setState({errors: err.response.data, isLoading: false})
                }
            );
        }
    }

    render() {
        const { errors } = this.state;
        const options = map(timezones, (val, key) =>
            <option key={val} value={val}>{key}</option>
        );

        return (
            <form onSubmit={this.onSubmit}>
                <h1> Register </h1>

                <TextFieldGroup
                    error={errors.username}
                    value={this.state.username}
                    onChange={this.onChange}
                    field="username"
                    label="Username"
                />

                <TextFieldGroup
                    error={errors.email}
                    value={this.state.email}
                    onChange={this.onChange}
                    field="email"
                    label="Email"
                />

                <TextFieldGroup
                    error={errors.password}
                    value={this.state.password}
                    onChange={this.onChange}
                    field="password"
                    type="password"
                    label="Password"
                />

                <TextFieldGroup
                    error={errors.passwordConfirmation}
                    value={this.state.passwordConfirmation}
                    onChange={this.onChange}
                    field="passwordConfirmation"
                    type="password"
                    label="Conform password"
                />

                <div className={classnames("form-group", { 'has-error': errors.timezone })}>
                    <label className="control-label">Timezone</label>
                    <select
                        value={this.state.timezone}
                        onChange={this.onChange}
                        name="timezone"
                        className="form-control">
                        <option value="" disabled> Choose Your Timezone</option>
                        {options}
                    </select>
                    { errors.timezone && <span className="help-block">{ errors.timezone }</span> }
                </div>

                <div className="form-group">
                    <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
                        Sign up
                    </button>
                </div>
            </form>
        )
    }
}

SignupForm.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired,
    addFlashMessage: React.PropTypes.func.isRequired
};

SignupForm.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default SignupForm;