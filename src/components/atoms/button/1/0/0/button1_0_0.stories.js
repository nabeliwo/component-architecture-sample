import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Button1_0_0 from './button1_0_0';

const wrapperStyle = { padding: '20px' };

storiesOf('Button1_0_0', module)
.add('large', () => (
  <div style={wrapperStyle}>
    <Button1_0_0 modifier="theme-primary size-l">ボタン</Button1_0_0>
  </div>
))
.add('middle', () => (
  <div style={wrapperStyle}>
    <Button1_0_0 modifier="theme-primary size-m">ボタン</Button1_0_0>
  </div>
))
.add('small', () => (
  <div style={wrapperStyle}>
    <Button1_0_0 modifier="theme-primary size-s">ボタン</Button1_0_0>
  </div>
))
.add('wide', () => (
  <div style={wrapperStyle}>
    <Button1_0_0 modifier="theme-primary size-m size-wide">ボタン</Button1_0_0>
  </div>
))
.add('border', () => (
  <div style={wrapperStyle}>
    <Button1_0_0 modifier="theme-primary theme-border size-m">ボタン</Button1_0_0>
  </div>
))
.add('onClick', () => (
  <div style={wrapperStyle}>
    <Button1_0_0 onClick={action('click')} modifier="theme-primary size-m">ボタン</Button1_0_0>
  </div>
))
.add('link', () => (
  <div style={wrapperStyle}>
    <Button1_0_0 href="https://www.google.co.jp/" modifier="theme-primary size-m">ボタン</Button1_0_0>
  </div>
))
.add('disabled', () => (
  <div style={wrapperStyle}>
    <Button1_0_0 modifier="theme-primary size-m" disabled={true}>ボタン</Button1_0_0>
  </div>
));
