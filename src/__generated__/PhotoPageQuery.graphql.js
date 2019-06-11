/**
 * @flow
 * @relayHash 883f6f0aeffccd3234018fcc7468626e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ImageMagick_photo$ref = any;
type PhotoAssociations_photo$ref = any;
type PhotoPreview_photo$ref = any;
export type PhotoPageQueryVariables = {|
  id: number
|};
export type PhotoPageQueryResponse = {|
  +photo: ?{|
    +$fragmentRefs: ImageMagick_photo$ref & PhotoPreview_photo$ref & PhotoAssociations_photo$ref
  |}
|};
export type PhotoPageQuery = {|
  variables: PhotoPageQueryVariables,
  response: PhotoPageQueryResponse,
|};
*/


/*
query PhotoPageQuery(
  $id: Int!
) {
  photo(rowId: $id) {
    ...ImageMagick_photo
    ...PhotoPreview_photo
    ...PhotoAssociations_photo
    id
  }
}

fragment ImageMagick_photo on Photo {
  identifyVerbose
}

fragment PhotoPreview_photo on Photo {
  id
  filepath
}

fragment PhotoAssociations_photo on Photo {
  photoCollections {
    nodes {
      collection {
        rowId
        name
        id
      }
      id
    }
  }
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
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "PhotoPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "photo",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Photo",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ImageMagick_photo",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "PhotoPreview_photo",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "PhotoAssociations_photo",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PhotoPageQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "photo",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Photo",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "identifyVerbose",
            "args": null,
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "filepath",
            "args": null,
            "storageKey": null
          },
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
                    "name": "collection",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Collection",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "rowId",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "name",
                        "args": null,
                        "storageKey": null
                      },
                      (v2/*: any*/)
                    ]
                  },
                  (v2/*: any*/)
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
    "name": "PhotoPageQuery",
    "id": null,
    "text": "query PhotoPageQuery(\n  $id: Int!\n) {\n  photo(rowId: $id) {\n    ...ImageMagick_photo\n    ...PhotoPreview_photo\n    ...PhotoAssociations_photo\n    id\n  }\n}\n\nfragment ImageMagick_photo on Photo {\n  identifyVerbose\n}\n\nfragment PhotoPreview_photo on Photo {\n  id\n  filepath\n}\n\nfragment PhotoAssociations_photo on Photo {\n  photoCollections {\n    nodes {\n      collection {\n        rowId\n        name\n        id\n      }\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b01b261c3c28f90113137f3615262932';
module.exports = node;
