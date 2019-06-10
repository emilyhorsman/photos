import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';
import Environment from './Environment';

const CollectionQuery = graphql`
  query CollectionQuery {
    collections {
      nodes {
        rowId
        name
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
  return (
    <div>
      {props.collections.nodes.map(collection => (
        <div key={collection.rowId}>
          {collection.rowId} {collection.name}
        </div>
      ))}
    </div>
  );
}

export default function Collection() {
  return (
    <QueryRenderer
      environment={Environment}
      query={CollectionQuery}
      variables={{}}
      render={CollectionQueryRenderer}
    />
  );
}
