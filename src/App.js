import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Collection from './Collection';

function App() {
  return (
    <Router>
      <Route path="/collection/:id" component={Collection} />
    </Router>
  );
}

export default App;
