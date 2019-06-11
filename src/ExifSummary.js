import React from 'react';
import styled from '@emotion/styled';

import FlexRow from './common/FlexRow';
import Text from './common/Text';

const Label = styled(Text)({
  marginRight: '0.5rem',
});

function ExifSummary({ exif }) {
  return (
    <div>
      {exif.focalLength !== undefined ? (
        <FlexRow>
          <Label>Focal Length:</Label>
          <Text>{exif.focalLength}</Text>
        </FlexRow>
      ) : null}

      {exif.iso !== undefined ? (
        <FlexRow>
          <Label>ISO:</Label>
          <Text>{exif.iso}</Text>
        </FlexRow>
      ) : null}

      {exif.aperture !== undefined ? (
        <FlexRow>
          <Label>Aperture:</Label>
          <Text>{exif.aperture}</Text>
        </FlexRow>
      ) : null}

      {exif.camera !== undefined ? (
        <FlexRow>
          <Label>Camera:</Label>
          <Text>{exif.camera}</Text>
        </FlexRow>
      ) : null}

      {exif.software !== undefined ? (
        <FlexRow>
          <Label>Software:</Label>
          <Text>{exif.software}</Text>
        </FlexRow>
      ) : null}
    </div>
  );
}

export default ExifSummary;
