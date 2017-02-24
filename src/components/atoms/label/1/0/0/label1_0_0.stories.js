import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Label1_0_0 from './label1_0_0';

const wrapperStyle = { padding: '20px' };

storiesOf('Label1_0_0', module)
.add('default', () => (
  <div style={wrapperStyle}>
    <Label1_0_0 modifier="size-m" name="name">ラベル</Label1_0_0>
  </div>
))
.add('primary', () => (
  <div style={wrapperStyle}>
    <Label1_0_0 modifier="theme-primary size-m" name="name">ラベル</Label1_0_0>
  </div>
))
.add('large', () => (
  <div style={wrapperStyle}>
    <Label1_0_0 modifier="size-l" name="name">ラベル</Label1_0_0>
  </div>
))
.add('middle', () => (
  <div style={wrapperStyle}>
    <Label1_0_0 modifier="size-m" name="name">ラベル</Label1_0_0>
  </div>
))
.add('small', () => (
  <div style={wrapperStyle}>
    <Label1_0_0 modifier="size-s" name="name">ラベル</Label1_0_0>
  </div>
));
