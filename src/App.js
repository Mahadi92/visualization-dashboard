import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboad from './components/Dashboard/Dashboad';
import Sidebar from './components/Sidebar/Sidebar';
import AllData from './components/AllData/AllData';

function App() {

  return (
    <main>

      <Router>
        <div className="row w-100">
          <div className="col-md-2">
            <Sidebar></Sidebar>
          </div>
          <div className="col-md-10">
            <Switch>

              <Route exact path='/'>
                <Dashboad></Dashboad>
              </Route>

              <Route exact path='/dashboard'>
                <Dashboad></Dashboad>
              </Route>

              <Route path='/allData'>
                <AllData></AllData>
              </Route>

            </Switch>
          </div>
        </div>
      </Router>

    </main>
  );
}

export default App;
