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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/state">useState( ) demo</Link></li>
          <li><Link to="/effect">useEffect( ) demo</Link></li>
          <li><Link to="/context">useContext( ) demo</Link></li>
          <li><Link to="/ref">useRef( ) demo</Link></li>
        </ul>
      </nav>

      <Switch>
        <Route path="/state" component={UseStateHook} />
        <Route path="/effect" component={UseEffectHook} />
        <Route path="/context" component={UseContextHook} />
        <Route path="/ref" component={UseRefHook} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
