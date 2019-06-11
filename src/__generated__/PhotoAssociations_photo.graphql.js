/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PhotoAssociations_photo$ref: FragmentReference;
declare export opaque type PhotoAssociations_photo$fragmentType: PhotoAssociations_photo$ref;
export type PhotoAssociations_photo = {|
  +photoCollections: {|
    +nodes: $ReadOnlyArray<?{|
      +collection: ?{|
        +rowId: number,
        +name: string,
      |}
    |}>
  |},
  +$refType: PhotoAssociations_photo$ref,
|};
export type PhotoAssociations_photo$data = PhotoAssociations_photo;
export type PhotoAssociations_photo$key = {
  +$data?: PhotoAssociations_photo$data,
  +$fragmentRefs: PhotoAssociations_photo$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "PhotoAssociations_photo",
  "type": "Photo",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '08c3c2bb640f8d87dfa84faf788c839e';
module.exports = node;
