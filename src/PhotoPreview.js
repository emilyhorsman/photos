import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
/** @jsx jsx */
import { jsx } from '@emotion/core';

function PhotoPreview({ photo, style }) {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/photos/${photo.filepath}`}
      css={style}
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
