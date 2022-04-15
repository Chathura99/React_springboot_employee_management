import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // id:this.props.match.params.id,
            userName: '',
            email: ''
        }
        // bind in here
        this.changerUserNameHandler = this.changerUserNameHandler.bind(this);
        this.changerEmailHandler = this.changerEmailHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    //reuse add + update
    // componentDidMount() {
    //     if (this.state.id == -1) {
    //         return
    //     } else {
    //         EmployeeService.getEmployeeById(this.state.id).then((res) => {
    //             // set variable list
    //             let employee = res.data;
    //             this.setState({
    //                 userName: employee.username,
    //                 email: employee.email
    //             })
    //         });
    //     }

    // }

    //save employee
    saveEmployee = (e) => {
        e.preventDefault();
        //use key value pair correctly as springboot employee class username,email
        let employee = { username: this.state.userName, email: this.state.email };
        console.log("employee =>" + JSON.stringify(employee));

        EmployeeService.createEmployee(employee).then(res => {
            this.props.history.push('/employees');
        })

        // reuse
        // if (this.state.id == -1) {
        //     EmployeeService.createEmployee(employee).then(res => {
        //         this.props.history.push('/employees');
        //     })
        // } else { 
        //     EmployeeService.updateEmployee(employee, this.state.id).then(res=>{
        //         this.props.history.push('/employees');
        //     })
        // }
    }
    //cancel method
    cancel() {
        //redirect to employee list
        this.props.history.push('/employees');

    }
    // get reuse
    // -1 => add
    getTitle() {
        if (this.state.id == -1) {
            return <h3 className='text-center'>Add Employee</h3>
        } else {
            return <h3 className='text-center'>Update Employee</h3>
        }
    }

    //event handler for set the userName with target value
    changerUserNameHandler = (event) => {
        //set variable
        this.setState({ userName: event.target.value });
    }

    changerEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }

    render() {
        return (
            <div>
                <h1>
                    <div className="container">
                        <div className="row">
                            <br></br>
                            <div className="card col-md-6 offset-md-3 offset-md-3">
                                <h3 className='text-center'>Add Employee</h3>
                                {/* reuse */}
                                {/* {
                                    this.getTitle()
                                } */}
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label>User Name  </label>
                                            <input type="text" name="userName" id="" placeholder='User Name' className='form-control'
                                                value={this.state.userName} onChange={this.changerUserNameHandler} />

                                            <label>Email  </label>
                                            <input type="email" name="email" id="" placeholder='Email' className='form-control'
                                                value={this.state.email} onChange={this.changerEmailHandler} />
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                                        {/* directly bind in here or... */}
                                        <button className="btn btn-danger" style={{ marginLeft: "10px" }} onClick={this.cancel.bind(this)}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </h1>
            </div>
        );
    }
}

export default CreateEmployeeComponent;