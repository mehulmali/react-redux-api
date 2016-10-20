/**
 * Created by User on 10/20/2016.
 */
import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'

export default function validateInput(data) {
    let errors = {};

    if (Validator.isEmpty(data.username)) {
        errors.username = 'Username is required';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email is required';
    }else if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }
    if (Validator.isEmpty(data.passwordConfirmation)) {
        errors.passwordConfirmation = 'Confirmation password is required';
    }
    if (!Validator.equals(data.password, data.passwordConfirmation)) {
        errors.passwordConfirmation = 'Passwords must match';
    }

    if (Validator.isEmpty(data.timezone)) {
        errors.timezone = 'Timezone is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}