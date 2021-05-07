import { Switch, Route } from "react-router-dom";

import Buttons from "./components/Buttons";
import Forms from "./components/Forms";
import Header from "./components/Header";
import Home from "./components/Home";
import Inputs from "./components/Inputs";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/buttons' component={Buttons} />
        <Route path='/inputs' component={Inputs} />
        <Route path='/forms' component={Forms} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
