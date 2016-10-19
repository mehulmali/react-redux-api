/**
 * Created by User on 10/19/2016.
 */

import React from 'react';

import NavigationBar from './NavigationBar';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <NavigationBar />
                {this.props.children}
            </div>
        )
    }
}

export default App;