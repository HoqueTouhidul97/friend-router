import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './component/Home/Home';
import NoMatch from './component/NoMatch/NoMatch';
import FriendDetail from './component/FriendDetail/FriendDetail';



function App() {
 
  return (
    <Router>
     <Switch>
       <Route path="/home"> 
       <Home/>
       </Route>
       <Route path="/friend/:friendId">
         <FriendDetail></FriendDetail>
       </Route>
       {/* if we don't decalre exact it will match every property */}
       <Route exact path="/"> 
       <Home/>
       </Route>

       <Route path="*"> 
       <NoMatch/>
       </Route>

     </Switch>
    </Router>
  );
}

export default App;
