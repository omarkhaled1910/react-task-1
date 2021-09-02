import Sectionone from "./Sectionone";
import Sectiontwo from "./Sectiontwo";
import {
  BrowserRouter as Router,
  Route

} from "react-router-dom";
import Home from "./Home";



function App() {
  return (

    <Router>

      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/sectionone">
        <Sectionone></Sectionone>

      </Route>
      <Route path="/sectiontwo">
        <Sectiontwo></Sectiontwo>
      </Route>


    </Router>
  );
}

export default App;
