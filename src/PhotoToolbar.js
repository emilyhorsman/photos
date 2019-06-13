import React from 'react';
import styled from '@emotion/styled';

const Toolbar = styled.div({
  position: 'fixed',
  top: 0,
  left: -4,
  right: -4,
  height: 40,
  borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
  boxShadow: '0 0 4px rgba(0, 0, 0, 0.5)',
});

function PhotoToolbar() {
  return <Toolbar>Hello</Toolbar>;
}

export default PhotoToolbar;
