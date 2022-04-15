import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            //get id from url
            id: this.props.match.params.id,
            employee: {}
        }

    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then((res) => {
            // set variable list
            this.setState({ employee: res.data })
        });

    }

    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3">
                    <h3 className='text-center'>View Employee</h3>
                    <div className="card-body">
                    <div className="row">
                            <label>ID : </label>
                            <div>{this.state.employee.id}</div>
                        </div>
                        <div className="row">
                            <label>User Name : </label>
                            <div>{this.state.employee.username}</div>
                        </div>
                        <div className="row">
                            <label>Email : </label>
                            <div>{this.state.employee.email}</div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default ViewEmployeeComponent;