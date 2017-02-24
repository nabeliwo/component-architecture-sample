import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Button1_0_1 from './button1_0_1';

const wrapperStyle = { padding: '20px' };

storiesOf('Button1_0_1', module)
.add('large', () => (
  <div style={wrapperStyle}>
    <Button1_0_1 modifier="theme-primary size-l">ボタン</Button1_0_1>
  </div>
))
.add('middle', () => (
  <div style={wrapperStyle}>
    <Button1_0_1 modifier="theme-primary size-m">ボタン</Button1_0_1>
  </div>
))
.add('small', () => (
  <div style={wrapperStyle}>
    <Button1_0_1 modifier="theme-primary size-s">ボタン</Button1_0_1>
  </div>
))
.add('wide', () => (
  <div style={wrapperStyle}>
    <Button1_0_1 modifier="theme-primary size-m size-wide">ボタン</Button1_0_1>
  </div>
))
.add('onClick', () => (
  <div style={wrapperStyle}>
    <Button1_0_1 onClick={action('click')} modifier="theme-primary size-m">ボタン</Button1_0_1>
  </div>
))
.add('disabled', () => (
  <div style={wrapperStyle}>
    <Button1_0_1 modifier="theme-primary size-m" disabled={true}>ボタン</Button1_0_1>
  </div>
));
