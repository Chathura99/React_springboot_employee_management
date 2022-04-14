import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Test from '../services/Test';

class TestViewComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: []
        }

    }

    render() {
        return (
            <div>
                <h2 className='text-center'>Test</h2><br></br>
            </div>
        );
    }
}

export default TestViewComponent;