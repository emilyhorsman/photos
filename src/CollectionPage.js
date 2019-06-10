import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';
import { Link } from 'react-router-dom';
import Environment from './Environment';
import PhotoPreview from './PhotoPreview';

const CollectionPageQuery = graphql`
  query CollectionPageQuery($id: Int!) {
    collection(rowId: $id) {
      name
      photoCollections {
        nodes {
          photo {
            rowId
            ...PhotoPreview_photo
          }
        }
      }
    }
  }
`;

function CollectionPageQueryRenderer({ error, props }) {
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
        <Link to={`/photo/${photo.rowId}`} key={photo.rowId}>
          <PhotoPreview
            photo={photo}
            style={{
              maxWidth: '50vw',
            }}
          />
        </Link>
      ))}
    </div>
  );
}

export default function CollectionPage(props) {
  return (
    <QueryRenderer
      environment={Environment}
      query={CollectionPageQuery}
      variables={{ id: parseInt(props.match.params.id, 10) }}
      render={CollectionPageQueryRenderer}
    />
  );
}
