import React, { useState } from 'react';
import styled from '@emotion/styled';
import Text from './common/Text';
import * as ZIndexHierarchy from './ZIndexHierarchy';
import ExifSummary from './ExifSummary';

const Toolbar = styled.div({
  position: 'fixed',
  top: 0,
  left: -4,
  right: -4,
  boxSizing: 'border-box',
  paddingLeft: 36,
  paddingRight: 36,
  height: 50,
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  boxShadow: '0 0 6px rgba(0, 0, 0, 0.25)',
  backgroundColor: 'white',
  zIndex: ZIndexHierarchy.TOOLBAR,
});

const Menu = styled.div({
  display: 'flex',
  alignItems: 'center',
  height: 50,
});

const Panel = styled.div(props => ({
  position: 'fixed',
  top: 45,
  left: -4,
  right: -4,
  boxSizing: 'border-box',
  paddingLeft: 36,
  paddingRight: 36,
  paddingTop: 21,
  paddingBottom: 16,
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  boxShadow: '0 0 6px rgba(0, 0, 0, 0.25)',
  zIndex: ZIndexHierarchy.PANEL,
}));

function Option({ label, setActive }) {
  return (
    <Text
      style={{
        display: 'inline-flex',
        height: '100%',
        alignItems: 'center',
        cursor: 'pointer',
        paddingLeft: 16,
        paddingRight: 16,
        marginLeft: -16,
        marginRight: -16,
      }}
      onMouseEnter={setActive}
    >
      {label}
    </Text>
  );
}

function PhotoToolbar({ exif }) {
  const [active, setActive] = useState(null);
  return (
    <>
      <Toolbar>
        <Menu>
          <Option label="Info" setActive={() => setActive('Info')} />
        </Menu>
      </Toolbar>
      {active === null ? null : (
        <Panel onMouseLeave={() => setActive(null)}>
          {active === 'Info' ? <ExifSummary exif={exif} /> : null}
        </Panel>
      )}
    </>
  );
}

export default PhotoToolbar;
