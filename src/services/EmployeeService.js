import axios from 'axios';

const EMP_URL ="http://localhost:8880/api/v1/employees";

class EmployeeService{

    getEmployees(){
        return axios.get(EMP_URL);
    }
}

export default new EmployeeService()