/**
 * Created by User on 10/20/2016.
 */
import React from 'react';

import EventForm from './EventForm';

class NewEventPage extends React.Component {
    render() {
        return (
            <div className="row">
                <EventForm />
            </div>
        )
    }
}

export default NewEventPage;