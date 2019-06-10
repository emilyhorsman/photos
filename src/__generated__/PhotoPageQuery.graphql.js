/**
 * @flow
 * @relayHash 38de68ac7276c067f7020055f591887c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ImageMagick_photo$ref = any;
type PhotoPreview_photo$ref = any;
export type PhotoPageQueryVariables = {|
  id: number
|};
export type PhotoPageQueryResponse = {|
  +photo: ?{|
    +$fragmentRefs: ImageMagick_photo$ref & PhotoPreview_photo$ref
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
];
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
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "filepath",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "PhotoPageQuery",
    "id": null,
    "text": "query PhotoPageQuery(\n  $id: Int!\n) {\n  photo(rowId: $id) {\n    ...ImageMagick_photo\n    ...PhotoPreview_photo\n    id\n  }\n}\n\nfragment ImageMagick_photo on Photo {\n  identifyVerbose\n}\n\nfragment PhotoPreview_photo on Photo {\n  id\n  filepath\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8eb3c7a721b4d8c231a5612afcd18842';
module.exports = node;
