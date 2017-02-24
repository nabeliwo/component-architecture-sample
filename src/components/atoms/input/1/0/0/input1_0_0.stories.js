import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Input1_0_0 from './input1_0_0';

const wrapperStyle = { padding: '20px' };

storiesOf('Input1_0_0', module)
.add('large', () => (
  <div style={wrapperStyle}>
    <Input1_0_0 modifier="theme-primary size-l" name="name" type="text" placeholder="名前を入力してください" />
  </div>
))
.add('middle', () => (
  <div style={wrapperStyle}>
    <Input1_0_0 modifier="theme-primary size-m" name="name" type="text" placeholder="名前を入力してください" />
  </div>
))
.add('small', () => (
  <div style={wrapperStyle}>
    <Input1_0_0 modifier="theme-primary size-s" name="name" type="text" placeholder="名前を入力してください" />
  </div>
))
.add('wide', () => (
  <div style={wrapperStyle}>
    <Input1_0_0 modifier="theme-primary size-m size-wide" name="name" type="text" placeholder="名前を入力してください" />
  </div>
))
.add('onChange', () => (
  <div style={wrapperStyle}>
    <Input1_0_0 onChange={action('change!')} modifier="theme-primary size-m" name="name" type="text" placeholder="名前を入力してください" />
  </div>
))
.add('password', () => (
  <div style={wrapperStyle}>
    <Input1_0_0 modifier="theme-primary size-m" name="password" type="password" placeholder="パスワードを入力してください" />
  </div>
));
