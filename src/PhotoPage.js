import React, { useContext } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';

import Environment from './Environment';
import ExifSummary from './ExifSummary';
import ImageMagick from './ImageMagick';
import PhotoAssociations from './PhotoAssociations';
import PhotoPreview from './PhotoPreview';
import { Context as ViewportDimensionsContext } from './common/ViewportDimensions';

const PhotoPageQuery = graphql`
  query PhotoPageQuery($id: Int!) {
    photo(rowId: $id) {
      ...ImageMagick_photo
      ...PhotoPreview_photo
      ...PhotoAssociations_photo
    }
  }
`;

function calculateStyle(viewport, imageWidth, imageHeight) {
  return {
    width: imageWidth / window.devicePixelRatio,
    maxWidth: '100%',
    maxHeight: '100vh',
  };
}

function Page({ photo }) {
  const viewport = useContext(ViewportDimensionsContext);
  return (
    <ImageMagick photo={photo}>
      {exif => (
        <>
          <PhotoPreview
            photo={photo}
            style={calculateStyle(viewport, exif.width, exif.height)}
          />

          <ExifSummary exif={exif} />

          <PhotoAssociations photo={photo} />
        </>
      )}
    </ImageMagick>
  );
}

function PhotoPageQueryRenderer({ error, props }) {
  if (error) {
    console.log(error);
    return <div>Error!</div>;
  }
  if (!props) {
    return <div>Loading!</div>;
  }
  const { photo } = props;
  return Boolean(photo) ? <Page photo={photo} /> : null;
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
