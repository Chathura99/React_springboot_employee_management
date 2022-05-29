import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import EmployeeService from '../services/EmployeeService';
import "../App.css";

class ListEmployeeComponent extends Component {

    //constructor with variable initialize
    constructor(props) {
        super(props);

        this.state = {
            employees: [],
        }
        //bind methods to componets
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);

    }

    //edit employee
    editEmployee(id) {
        //pass parameter with $ mark
        this.props.history.push('/update-employee/' + id);
        // reuse
        // this.props.history.push('/add-employee/' + id);

    }

    //delete employee
    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then((res) => {
            // delete from variable list
            this.setState({ employees: this.state.employees.filter(employee => employee.id !== id) });
        });
    }

    //view particular employee
    viewEmployee(id){
        // this.props.history.push('/view-employee/' + id);
        this.props.history.push(`/view-employee/${id}`);
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
        // reuse
        // this.props.history.push('/add-employee/-1');
        this.props.history.push('/add-employee');
    }

    //view in here
    render() {
        return (
            <div>
        
                <h2 className='text-center'>Employee List </h2> <br></br>
                {/* <div className='row'>
                    <button className='btn btn-primary' onClick={this.addEmployee}>Add Employee</button>
                </div> */}

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
                                            <td>
                                                <button className='btn btn-info' onClick={() => this.editEmployee(employee.id)}>Update</button>
                                                <button style={{marginLeft:"5px"}} className='btn btn-danger' onClick={() => this.deleteEmployee(employee.id)}>Delete</button>
                                                <button style={{marginLeft:"5px"}} className='btn btn-success' onClick={() => this.viewEmployee(employee.id)}>View</button>
                                            </td>

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