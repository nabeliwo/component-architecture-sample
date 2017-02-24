import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Error1_0_0 from './error1_0_0';

const wrapperStyle = { padding: '20px' };

storiesOf('Error1_0_0', module)
.add('large', () => (
  <div style={wrapperStyle}>
    <Error1_0_0 modifier="size-l">エラー文言</Error1_0_0>
  </div>
))
.add('middle', () => (
  <div style={wrapperStyle}>
    <Error1_0_0 modifier="size-m">エラー文言</Error1_0_0>
  </div>
))
.add('small', () => (
  <div style={wrapperStyle}>
    <Error1_0_0 modifier="size-s">エラー文言</Error1_0_0>
  </div>
));
