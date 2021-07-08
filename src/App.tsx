import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import UseStateHook from './components/useStateHook';
import UseEffectHook from './components/useEffectHook';
import UseContextHook from './components/useContextHook';
import UseRefHook from './components/useRefHook'

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/state">useState( ) demo</Link>
          </li>
          <li>
            <Link to="/effect">useEffect( ) demo</Link>
          </li>
          <li>
            <Link to="/context">useContext( ) demo</Link>
          </li>
          <li>
            <Link to="/ref">useRef( ) demo</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/state">
          <UseStateHook />
        </Route>
        <Route path="/effect">
          <UseEffectHook />
        </Route>
        <Route path="/context">
          <UseContextHook />
        </Route>
        <Route path="/ref">
          <UseRefHook />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
