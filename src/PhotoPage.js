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
import PhotoToolbar from './PhotoToolbar';

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
  justifyContent: 'center',
  alignItems: 'center',
  padding: 36,
  paddingTop: 96,
  boxSizing: 'border-box',
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
    <>
      <PhotoToolbar />
      <ImageMagick photo={photo}>
        {exif => (
          <Layout>
            <PhotoPreview photo={photo} style={{ maxWidth: '100%' }} />
          </Layout>
        )}
      </ImageMagick>
    </>
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
