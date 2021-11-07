import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Forgotpassword from './components/Forgotpassword';
import Resetpassword from './components/Resetpassword';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
     <Router>
      <Switch>
         <Route path="/" component={Login} exact={true}/>
         <Route path="/register" component={Register} exact={true}/>
         <Route path="/forgetpassword" component={Forgotpassword} exact={true}/>
         <Route path="/password-reset/:userId/:token" component={Resetpassword} exact={true}/>
     </Switch>
     </Router>
    </>
  );
}

export default App;
