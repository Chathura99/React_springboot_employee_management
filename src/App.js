import logo from './logo.svg';
import './App.css';
//routing 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>

          <HeaderComponent />

          <div className="container">
            {/* switch between */}
            <Switch>
              <Route path='/' exact component = {ListEmployeeComponent}></Route>
              <Route path='/employees' component = {ListEmployeeComponent}></Route>
              {/* path mentioned in ListEmployeeComponent - this.props.history.push('/add-employee') */}
              <Route path='/add-employee' component = {CreateEmployeeComponent}></Route>
              {/* <Route path='/add-employee/:id' component = {CreateEmployeeComponent}></Route> */}
              {/* parameter passed with colon : */}
              <Route path={'/update-employee/:id'} component = {UpdateEmployeeComponent}></Route>
              <Route path={'/view-employee/:id'} component = {ViewEmployeeComponent}></Route>

            </Switch>
          </div>

          <FooterComponent />

      </Router>
    </div>

  );
}

// function Test(){
//   return (
//     <div className="container">
//      <TestViewComponent/>
//     </div>
//   );
// }

export default App;
