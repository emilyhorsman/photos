/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PhotoPreview_photo$ref: FragmentReference;
declare export opaque type PhotoPreview_photo$fragmentType: PhotoPreview_photo$ref;
export type PhotoPreview_photo = {|
  +id: string,
  +filepath: ?string,
  +$refType: PhotoPreview_photo$ref,
|};
export type PhotoPreview_photo$data = PhotoPreview_photo;
export type PhotoPreview_photo$key = {
  +$data?: PhotoPreview_photo$data,
  +$fragmentRefs: PhotoPreview_photo$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "PhotoPreview_photo",
  "type": "Photo",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
};
// prettier-ignore
(node/*: any*/).hash = 'd073ac36cf4fd16fbe5c797bdae71647';
module.exports = node;
