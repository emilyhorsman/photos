import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';
import { Link } from 'react-router-dom';
import { PhotoDetailLink } from './App';
import Environment from './Environment';
import PhotoPreview from './PhotoPreview';
import Text from './common/Text';

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

const Header = Text.withComponent('h1');

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
      <Header size="h1">{collection.name}</Header>
      {collection.photoCollections.nodes.map(({ photo }) => (
        <PhotoDetailLink params={{ id: photo.rowId }} key={photo.rowId}>
          <PhotoPreview
            photo={photo}
            style={{
              maxWidth: '50vw',
            }}
          />
        </PhotoDetailLink>
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
