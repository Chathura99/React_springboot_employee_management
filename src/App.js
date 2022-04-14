import logo from './logo.svg';
import './App.css';
//routing 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';

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
