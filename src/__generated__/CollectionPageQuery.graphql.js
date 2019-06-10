/**
 * @flow
 * @relayHash 7d34ba3c2e7699710c4c05f28fc1ccc8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PhotoPreview_photo$ref = any;
export type CollectionPageQueryVariables = {|
  id: number
|};
export type CollectionPageQueryResponse = {|
  +collection: ?{|
    +name: string,
    +photoCollections: {|
      +nodes: $ReadOnlyArray<?{|
        +photo: ?{|
          +rowId: number,
          +$fragmentRefs: PhotoPreview_photo$ref,
        |}
      |}>
    |},
  |}
|};
export type CollectionPageQuery = {|
  variables: CollectionPageQueryVariables,
  response: CollectionPageQueryResponse,
|};
*/


/*
query CollectionPageQuery(
  $id: Int!
) {
  collection(rowId: $id) {
    name
    photoCollections {
      nodes {
        photo {
          rowId
          ...PhotoPreview_photo
          id
        }
        id
      }
    }
    id
  }
}

fragment PhotoPreview_photo on Photo {
  id
  filepath
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "rowId",
    "variableName": "id"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "rowId",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CollectionPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "collection",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Collection",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "photoCollections",
            "storageKey": null,
            "args": null,
            "concreteType": "PhotoCollectionsConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "nodes",
                "storageKey": null,
                "args": null,
                "concreteType": "PhotoCollection",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "photo",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Photo",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      {
                        "kind": "FragmentSpread",
                        "name": "PhotoPreview_photo",
                        "args": null
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CollectionPageQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "collection",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Collection",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "photoCollections",
            "storageKey": null,
            "args": null,
            "concreteType": "PhotoCollectionsConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "nodes",
                "storageKey": null,
                "args": null,
                "concreteType": "PhotoCollection",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "photo",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Photo",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "filepath",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  (v4/*: any*/)
                ]
              }
            ]
          },
          (v4/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CollectionPageQuery",
    "id": null,
    "text": "query CollectionPageQuery(\n  $id: Int!\n) {\n  collection(rowId: $id) {\n    name\n    photoCollections {\n      nodes {\n        photo {\n          rowId\n          ...PhotoPreview_photo\n          id\n        }\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment PhotoPreview_photo on Photo {\n  id\n  filepath\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '990f8356ac5c53dbaa5c81f2229fddb2';
module.exports = node;
