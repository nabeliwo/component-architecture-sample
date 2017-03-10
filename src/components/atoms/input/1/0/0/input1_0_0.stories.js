import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Input from './input1_0_0';

storiesOf('Input1_0_0', module)
.add('large', () => <Input modifier="theme-primary size-l" name="name" type="text" placeholder="名前を入力してください" />)
.add('middle', () => <Input modifier="theme-primary size-m" name="name" type="text" placeholder="名前を入力してください" />)
.add('small', () => <Input modifier="theme-primary size-s" name="name" type="text" placeholder="名前を入力してください" />)
.add('wide', () => <Input modifier="theme-primary size-m size-wide" name="name" type="text" placeholder="名前を入力してください" />)
.add('onChange', () => <Input onChange={action('change!')} modifier="theme-primary size-m" name="name" type="text" placeholder="名前を入力してください" />)
.add('password', () => <Input modifier="theme-primary size-m" name="password" type="password" placeholder="パスワードを入力してください" />);
