import React from 'react';
import styled from '@emotion/styled';

import FlexRow from './common/FlexRow';
import Text from './common/Text';

function ExifSummary({ exif }) {
  return (
    <div>
      {exif.focalLength !== undefined ? (
        <FlexRow>
          <Text>Focal Length: </Text>
          <Text>{exif.focalLength} mm</Text>
        </FlexRow>
      ) : null}

      {exif.iso !== undefined ? (
        <FlexRow>
          <Text>ISO: </Text>
          <Text>{exif.iso}</Text>
        </FlexRow>
      ) : null}

      {exif.aperture !== undefined ? (
        <FlexRow>
          <Text>Aperture: </Text>
          <Text>f/{exif.aperture}</Text>
        </FlexRow>
      ) : null}

      {exif.camera !== undefined ? (
        <FlexRow>
          <Text>Camera: </Text>
          <Text>{exif.camera}</Text>
        </FlexRow>
      ) : null}

      {exif.software !== undefined ? (
        <FlexRow>
          <Text>Software: </Text>
          <Text>{exif.software}</Text>
        </FlexRow>
      ) : null}
    </div>
  );
}

export default ExifSummary;
