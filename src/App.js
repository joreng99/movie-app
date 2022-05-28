import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";



function App() {
  return <Router> {/*url에 따라 render*/}
    <Switch>
      <Route path = "/movie/:id"> {/*주소가 /movie/id(parameter) 일 때*/}
        <Detail />
      </Route>
      <Route path = "/"> {/*주소가 home 일때*/} 
        <Home />
      </Route>
    </Switch>
  </Router>;
}

export default App;
