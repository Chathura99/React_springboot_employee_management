//connect with springboot
import axios from 'axios';

const EMP_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {

    getEmployees() {
        return axios.get(EMP_URL);
    }

    createEmployee(employee) {
        return axios.post(EMP_URL, employee);
    }

    getEmployeeById(employeeId) {
        return axios.get(EMP_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId) {
        return axios.put(EMP_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId) {
        return axios.delete(EMP_URL + '/' + employeeId);
    }

}

export default new EmployeeService()