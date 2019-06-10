/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ImageMagick_photo$ref: FragmentReference;
declare export opaque type ImageMagick_photo$fragmentType: ImageMagick_photo$ref;
export type ImageMagick_photo = {|
  +identifyVerbose: string,
  +$refType: ImageMagick_photo$ref,
|};
export type ImageMagick_photo$data = ImageMagick_photo;
export type ImageMagick_photo$key = {
  +$data?: ImageMagick_photo$data,
  +$fragmentRefs: ImageMagick_photo$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ImageMagick_photo",
  "type": "Photo",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "identifyVerbose",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '28470ba2f2b97be9550fb81575bf5480';
module.exports = node;
