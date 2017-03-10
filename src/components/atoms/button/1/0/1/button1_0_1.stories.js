import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Button from './button1_0_1';

storiesOf('Button1_0_1', module)
.add('large', () => <Button modifier="theme-primary size-l">ボタン</Button>)
.add('middle', () => <Button modifier="theme-primary size-m">ボタン</Button>)
.add('small', () => <Button modifier="theme-primary size-s">ボタン</Button>)
.add('wide', () => <Button modifier="theme-primary size-m size-wide">ボタン</Button>)
.add('onClick', () => <Button onClick={action('click')} modifier="theme-primary size-m">ボタン</Button>)
.add('disabled', () => <Button modifier="theme-primary size-m" disabled={true}>ボタン</Button>);
