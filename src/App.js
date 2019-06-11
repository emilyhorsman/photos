import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CollectionPage from './CollectionPage';
import PhotoPage from './PhotoPage';
import Shell from './Shell';

function App() {
  return (
    <Shell>
      <Router>
        <Route path="/collection/:id" component={CollectionPage} />
        <Route path="/photo/:id" component={PhotoPage} />
      </Router>
    </Shell>
  );
}

export default App;
