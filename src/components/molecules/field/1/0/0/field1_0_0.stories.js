import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Field1_0_0 from './field1_0_0';

const wrapperStyle = { padding: '20px' };
const input = {
  type: 'text',
  placeholder: 'ユーザー名を入力してください。',
  required: true
};

storiesOf('Field1_0_0', module)
.add('ラベル付き', () => (
  <div style={wrapperStyle}>
    <Field1_0_0 name="name" label="ユーザー名" input={input} modifier="size-m" />
  </div>
))
.add('ラベル無し', () => (
  <div style={wrapperStyle}>
    <Field1_0_0 name="name" input={input} modifier="size-m" />
  </div>
))
.add('エラー', () => (
  <div style={wrapperStyle}>
    <Field1_0_0 name="name" label="ユーザー名" error="そのユーザー名は既に使われています。" input={input} modifier="size-m" />
  </div>
))
.add('large', () => (
  <div style={wrapperStyle}>
    <Field1_0_0 name="name" label="ユーザー名" input={input} modifier="size-l" />
  </div>
))
.add('small', () => (
  <div style={wrapperStyle}>
    <Field1_0_0 name="name" label="ユーザー名" input={input} modifier="size-s" />
  </div>
))
.add('primary', () => (
  <div style={wrapperStyle}>
    <Field1_0_0 name="name" label="ユーザー名" input={input} modifier="size-m theme-primary" />
  </div>
));
