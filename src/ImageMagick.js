import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';

function getQuotient(value) {
  if (value == null) {
    return null;
  }
  // e.g., 'exif:FNumber': '18/10'
  const parts = value.split('/').map(value => parseInt(value, 10));
  if (parts.length !== 2) {
    return null;
  }
  return parts[0] / parts[1];
}

function ImageMagick({ children, photo }) {
  const data = JSON.parse(photo.identifyVerbose);
  console.log(data);
  return children({
    width: data.geometry.width,
    height: data.geometry.height,
    dateTime: data.properties['exif:DateTime'],
    aperture: getQuotient(data.properties['exif:FNumber']),
    focalLength: getQuotient(data.properties['exif:FocalLength']),
    iso: data.properties['exif:ISOSpeedRatings'],
    camera: data.properties['exif:Model'],
    software: data.properties['exif:Software'],
  });
}

export default createFragmentContainer(
  ImageMagick,
  graphql`
    fragment ImageMagick_photo on Photo {
      identifyVerbose
    }
  `
);
