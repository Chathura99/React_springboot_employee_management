import axios from 'axios';

const EMP_URL ="http://localhost:8880/api/v1/employees";

class Test{

    getName(){
        return "Hello I am Test";
    }
}

export default new Test()