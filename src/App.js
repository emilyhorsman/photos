import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CollectionPage from './CollectionPage';
import PhotoPage from './PhotoPage';

const Routes = {
  CollectionDetail: {
    path: '/collection/:id',
    component: CollectionPage,
  },

  PhotoDetail: {
    path: '/photo/:id',
    component: PhotoPage,
  },
};

function makeLink(path) {
  return function(props) {
    const url = Object.keys(props.params).reduce((url, param) => {
      return url.replace(`:${param}`, props.params[param]);
    }, path);

    return (
      <Link to={url} {...props.link}>
        {props.children}
      </Link>
    );
  };
}

export const CollectionDetailLink = makeLink(Routes.CollectionDetail.path);
export const PhotoDetailLink = makeLink(Routes.PhotoDetail.path);

function App() {
  return (
    <Router>
      {Object.keys(Routes).map(key => (
        <Route key={key} {...Routes[key]} />
      ))}
    </Router>
  );
}

export default App;
