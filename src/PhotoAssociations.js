import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';

import Text from './common/Text';
import { CollectionDetailLink } from './App';

function PhotoAssociations({ photo }) {
  const collections = photo.photoCollections.nodes.map(
    ({ collection }) => collection
  );
  if (collections.length === 0) {
    return null;
  }

  return (
    <ul>
      {collections.map(collection => (
        <li key={collection.id}>
          <CollectionDetailLink params={{ id: collection.rowId }}>
            <Text>{collection.name}</Text>
          </CollectionDetailLink>
        </li>
      ))}
    </ul>
  );
}

export default createFragmentContainer(
  PhotoAssociations,
  graphql`
    fragment PhotoAssociations_photo on Photo {
      photoCollections {
        nodes {
          collection {
            rowId
            name
          }
        }
      }
    }
  `
);
