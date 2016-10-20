/**
 * Created by User on 10/20/2016.
 */
import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'

export default function validateInput(data) {
    let errors = {};

    if (Validator.isEmpty(data.identifier)) {
        errors.identifier = 'Username / Email is required';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}