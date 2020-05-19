import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import HomePage from './components/pages/homepage/homepage.component'

const HatsPage = (props) => {
  console.log(props)
  return (
  <div>
    <h1>HATS PAGE</h1>
  </div>
  )
}


function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;