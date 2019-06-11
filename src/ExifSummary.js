import React from 'react';
import styled from '@emotion/styled';

import FlexRow from './common/FlexRow';
import Text from './common/Text';

function ExifSummary({ exif }) {
  return (
    <div>
      {Boolean(exif.focalLength) ? (
        <FlexRow>
          <Text>Focal Length: </Text>
          <Text>{exif.focalLength} mm</Text>
        </FlexRow>
      ) : null}

      {Boolean(exif.iso) ? (
        <FlexRow>
          <Text>ISO: </Text>
          <Text>{exif.iso}</Text>
        </FlexRow>
      ) : null}

      {Boolean(exif.aperture) ? (
        <FlexRow>
          <Text>Aperture: </Text>
          <Text>f/{exif.aperture}</Text>
        </FlexRow>
      ) : null}

      {Boolean(exif.camera) ? (
        <FlexRow>
          <Text>Camera: </Text>
          <Text>{exif.camera}</Text>
        </FlexRow>
      ) : null}

      {Boolean(exif.software) ? (
        <FlexRow>
          <Text>Software: </Text>
          <Text>{exif.software}</Text>
        </FlexRow>
      ) : null}
    </div>
  );
}

export default ExifSummary;
