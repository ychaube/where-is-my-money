import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Dashboard from "./pages/dashboard/dashboard.component";
import Authentication from "./pages/authentication/authentication.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/authentication" component={Authentication} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
