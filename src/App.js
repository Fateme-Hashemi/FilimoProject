import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//components
import Landing from './components/Landing';
import Home from './components/Home';
import Cards from './components/Cards';


const App = () => {


  return (

    <BrowserRouter>
 
      <>
        <Switch>
          <Route path="/home" component={()=> <Home />} />
          <Route path="/" component={Landing} />
        </Switch>
      </>
      
    </BrowserRouter>

  );
};

export default App;
