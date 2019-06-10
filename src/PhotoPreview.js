import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';

function PhotoPreview({ photo }) {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/photos/${photo.filepath}`}
      width="100%"
    />
  );
}

export default createFragmentContainer(
  PhotoPreview,
  graphql`
    fragment PhotoPreview_photo on Photo {
      id
      filepath
    }
  `
);
