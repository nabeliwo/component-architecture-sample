import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Field from './field1_0_0';

const input = {
  type: 'text',
  placeholder: 'ユーザー名を入力してください。',
  required: true
};

storiesOf('Field1_0_0', module)
.add('ラベル付き', () => <Field name="name" label="ユーザー名" input={input} modifier="size-m" />)
.add('ラベル無し', () => <Field name="name" input={input} modifier="size-m" />)
.add('エラー', () => <Field name="name" label="ユーザー名" error="そのユーザー名は既に使われています。" input={input} modifier="size-m" />)
.add('large', () => <Field name="name" label="ユーザー名" input={input} modifier="size-l" />)
.add('small', () => <Field name="name" label="ユーザー名" input={input} modifier="size-s" />)
.add('primary', () => <Field name="name" label="ユーザー名" input={input} modifier="size-m theme-primary" />);
