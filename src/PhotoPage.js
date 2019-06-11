import React, { useRef, useState, useEffect } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';
import styled from '@emotion/styled';
/** @jsx jsx */
import { jsx } from '@emotion/core';

import throttle from './common/throttle.js';
import Environment from './Environment';
import ExifSummary from './ExifSummary';
import ImageMagick from './ImageMagick';
import PhotoAssociations from './PhotoAssociations';
import PhotoPreview from './PhotoPreview';

const PhotoPageQuery = graphql`
  query PhotoPageQuery($id: Int!) {
    photo(rowId: $id) {
      ...ImageMagick_photo
      ...PhotoPreview_photo
      ...PhotoAssociations_photo
    }
  }
`;

const Layout = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  height: '100vh',
});

function calculateStyle(viewport, imageWidth, imageHeight) {
  const targetWidth = imageWidth / window.devicePixelRatio;
  const targetHeight = imageHeight / window.devicePixelRatio;
  const targetAspectRatio = targetWidth / targetHeight;
  const viewportAspectRatio = viewport.width / viewport.height;

  const base = {
    maxWidth: Math.min(viewport.width, targetWidth),
    maxHeight: Math.min(viewport.height, targetHeight),
  };
  if (targetAspectRatio <= viewportAspectRatio) {
    return { ...base, height: '100%' };
  } else {
    return { ...base, width: '100%' };
  }
}

function Page({ photo }) {
  const photoContainerEl = useRef(null);
  function getDimensions() {
    if (Boolean(photoContainerEl.current)) {
      return {
        width: photoContainerEl.current.clientWidth,
        height: photoContainerEl.current.clientHeight,
      };
    } else {
      return { width: 0, height: 0 };
    }
  }

  const [dimensions, setDimensions] = useState(getDimensions());
  const handleResize = throttle(function() {
    setDimensions(getDimensions());
  }, 200);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <ImageMagick photo={photo}>
      {exif => (
        <Layout>
          <div
            css={{
              height: '100%',
              flexGrow: 1,
              overflow: 'hidden',
              padding: 24,
            }}
            ref={photoContainerEl}
          >
            <PhotoPreview
              photo={photo}
              style={calculateStyle(dimensions, exif.width, exif.height)}
            />
          </div>

          <div css={{ flexShrink: 0, padding: 24 }}>
            <ExifSummary exif={exif} />
            <PhotoAssociations photo={photo} />
          </div>
        </Layout>
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
