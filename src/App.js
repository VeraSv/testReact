import React from 'react';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import './App.css';
import Todos from './todos/Todos';
import Form1 from './form1/Form1';
import Form2 from './form2/Form2';
import PagesLinks from './PagesLinks';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <PagesLinks />
        <Route path='/' exact component={() => <Todos />} />
        <Route path='/form1' component={() => <Form1 />} />
        <Route path='/form2' component={() => <Form2 />} />
      </BrowserRouter>

    </div>
  );
}

export default App;
