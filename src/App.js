import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserApp from "./components/UserApp";
import Error404 from "./pages/Error404";
import Login from "./pages/Login";
import UserPage from "./pages/UserPage";

// import FormBase64 from "./components/FormBase64";

function App() {
  // const [state, setstate] = useState(""); //Estado donde guardaré la imagen

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/user" component={UserPage} />
          <Route exact path="/registro" component={UserApp} />
          <Route component={Error404} />
        </Switch>
      </Router>
      ;
    </div>
  );
}

export default App;
