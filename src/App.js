import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CollectionPage from './CollectionPage';
import PhotoPage from './PhotoPage';

function App() {
  return (
    <Router>
      <Route path="/collection/:id" component={CollectionPage} />
      <Route path="/photo/:id" component={PhotoPage} />
    </Router>
  );
}

export default App;
