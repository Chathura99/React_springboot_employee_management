import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    //constructor with variable initialize
    constructor(props) {
        super(props);

        this.state = {
            employees: []
        }

        this.addEmployee = this.addEmployee.bind(this);

    }
    //get from EmployeeService by link
    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            // set variable list
            this.setState({ employees: res.data })
        });

    }

    //for add
    addEmployee() {
        this.props.history.push('/add-employee');
    }

    //view in here
    render() {
        return (
            <div>
                <h2 className='text-center'>Employee List </h2> <br></br>
                <div className='row'>
                    <button className='btn btn-primary' onClick={this.addEmployee}>Add Employee</button>
                </div>

                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td>{employee.username}</td>
                                            <td>{employee.email}</td>

                                        </tr>
                                )
                            }
                        </tbody>


                    </table>
                </div>

            </div>
        );
    }
}

export default ListEmployeeComponent;