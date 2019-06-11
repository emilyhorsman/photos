import React from 'react';
import styled from '@emotion/styled';

const fontSizes = {
  body1: 16,
  h1: 36,
};

const lineHeights = {
  body1: 1.6,
  h1: 1.2,
};

const Text = styled.span(props => ({
  fontFamily: '-apple-system, system-ui, ".SFNSText-Regular", sans-serif',
  fontSize: fontSizes[props.size],
  lineHeight: lineHeights[props.size],
}));

Text.defaultProps = {
  size: 'body1',
};

export default Text;
