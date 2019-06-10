/**
 * @flow
 * @relayHash 722b99f087f2d4a589e8ce1d57760449
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PhotoPreview_photo$ref = any;
export type CollectionQueryVariables = {|
  id: number
|};
export type CollectionQueryResponse = {|
  +collection: ?{|
    +name: string,
    +id: string,
    +photoCollections: {|
      +nodes: $ReadOnlyArray<?{|
        +photo: ?{|
          +id: string,
          +$fragmentRefs: PhotoPreview_photo$ref,
        |}
      |}>
    |},
  |}
|};
export type CollectionQuery = {|
  variables: CollectionQueryVariables,
  response: CollectionQueryResponse,
|};
*/


/*
query CollectionQuery(
  $id: Int!
) {
  collection(rowId: $id) {
    name
    id
    photoCollections {
      nodes {
        photo {
          id
          ...PhotoPreview_photo
        }
        id
      }
    }
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
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CollectionQuery",
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
          (v3/*: any*/),
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
    "name": "CollectionQuery",
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
          (v3/*: any*/),
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
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "filepath",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  (v3/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CollectionQuery",
    "id": null,
    "text": "query CollectionQuery(\n  $id: Int!\n) {\n  collection(rowId: $id) {\n    name\n    id\n    photoCollections {\n      nodes {\n        photo {\n          id\n          ...PhotoPreview_photo\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment PhotoPreview_photo on Photo {\n  id\n  filepath\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dc81449cd7e25c9d7b1a1aab7d7df077';
module.exports = node;
