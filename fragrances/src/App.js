
import './App.css';
import Header from './common/Header';
import Main from './Home/Main';
import MainDash from './Dashboard/MainDash'

import { BrowserRouter as Switch, Route } from "react-router-dom";
function App() {
  return (
    <Switch>
    <Route path="/" exact>
    <Header />
      <Main />
    </Route>
    <Route path="/admin" >
    <MainDash />
    </Route>

    <Route path="/products" >
    <MainDash />
    </Route>


  </Switch>

    // <section>
    //   <Header />
    //   <Main />
    // </section>

  
  );
}

export default App;
