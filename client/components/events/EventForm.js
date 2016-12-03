/**
 * Created by User on 10/20/2016.
 */
import React from 'react';
import { connect } from 'react-redux';

import TextFieldGroup from '../common/TextFieldGroup';
import { createEvent } from '../../actions/eventActions';

class EventForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            errors: {},
            isLoading: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

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
        this.props.createEvent(this.state);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        const { title, errors, isLoading } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <h1>Create New Event</h1>
                { errors.form && <div className="alert alert-danger">{errors.form}</div> }

                <TextFieldGroup
                    error={errors.title}
                    field="title"
                    name="title"
                    value={title}
                    onChange={this.onChange}
                    label="Event Title"
                />

                <div className="form-group">
                    <button disabled={isLoading} className="btn btn-primary btn-lg">
                        Create
                    </button>
                </div>
            </form>
        )
    }
}

EventForm.propTypes = {
    createEvent: React.PropTypes.func.isRequired
};

export default connect(null, {createEvent})(EventForm);