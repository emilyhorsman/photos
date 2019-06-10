import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';

function ImageMagick({ children, photo }) {
  const data = JSON.parse(photo.identifyVerbose);
  console.log(data);
  return children({
    width: data.geometry.width,
    height: data.geometry.height,
  });
}

export default createFragmentContainer(
  ImageMagick,
  graphql`
    fragment ImageMagick_photo on Photo {
      identifyVerbose
    }
  `
);
