import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';
import Environment from './Environment';
import PhotoPreview from './PhotoPreview';

const PhotoPageQuery = graphql`
  query PhotoPageQuery($id: Int!) {
    photo(rowId: $id) {
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
  return <PhotoPreview photo={photo} style={{ maxWidth: '100%' }} />;
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
