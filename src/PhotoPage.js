import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';

import Environment from './Environment';
import ImageMagick from './ImageMagick';
import PhotoPreview from './PhotoPreview';

const PhotoPageQuery = graphql`
  query PhotoPageQuery($id: Int!) {
    photo(rowId: $id) {
      ...ImageMagick_photo
      ...PhotoPreview_photo
    }
  }
`;

function PhotoPageQueryRenderer({ error, props }) {
  if (error) {
    console.log(error);
    return <div>Error!</div>;
  }
  if (!props) {
    return <div>Loading!</div>;
  }
  const { photo } = props;
  return (
    <ImageMagick photo={photo}>
      {({ width }) => (
        <PhotoPreview
          photo={photo}
          style={{
            width: width / window.devicePixelRatio,
            maxWidth: '100%',
            maxHeight: '100vh',
          }}
        />
      )}
    </ImageMagick>
  );
}

export default function PhotoPage(props) {
  return (
    <QueryRenderer
      environment={Environment}
      query={PhotoPageQuery}
      variables={{ id: parseInt(props.match.params.id, 10) }}
      render={PhotoPageQueryRenderer}
    />
  );
}
