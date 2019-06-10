import React from 'react';

function ExifSummary({ exif }) {
  return (
    <div>
      Focal Length: {exif.focalLength}
      ISO: {exif.iso}
    </div>
  );
}

export default ExifSummary;
