/**
 * Created by User on 10/20/2016.
 */
import React from 'react';
import classnames from 'classnames';

const TextFieldGroup = ({ field, value, label, type, error, onChange }) => {
    return (
        <div className={classnames("form-group", { 'has-error': error })}>
            <label className="control-label">{label}</label>
            <input
                value={value}
                onChange={onChange}
                type={type}
                name={field}
                className="form-control"
            />
            { error && <span className="help-block">{ error }</span> }
        </div>
    )
};

TextFieldGroup.prototype = {
    field: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
    error: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired
};

TextFieldGroup.defaultProps = {
    type: 'text;'
};

export default TextFieldGroup;