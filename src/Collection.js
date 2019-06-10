import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';
import Environment from './Environment';
import Photo from './PhotoPreview';

const CollectionQuery = graphql`
  query CollectionQuery($id: Int!) {
    collection(rowId: $id) {
      name
      id
      photoCollections {
        nodes {
          photo {
            id
            ...PhotoPreview_photo
          }
        }
      }
    }
  }
`;

function CollectionQueryRenderer({ error, props }) {
  if (error) {
    console.log(error);
    return <div>Error!</div>;
  }
  if (!props) {
    return <div>Loading!</div>;
  }
  const { collection } = props;
  return (
    <div>
      <h1>{collection.name}</h1>
      {collection.photoCollections.nodes.map(({ photo }) => (
        <Photo
          key={photo.id}
          photo={photo}
          style={{
            maxWidth: '50vw',
          }}
        />
      ))}
    </div>
  );
}

export default function Collection(props) {
  return (
    <QueryRenderer
      environment={Environment}
      query={CollectionQuery}
      variables={{ id: parseInt(props.match.params.id, 10) }}
      render={CollectionQueryRenderer}
    />
  );
}
