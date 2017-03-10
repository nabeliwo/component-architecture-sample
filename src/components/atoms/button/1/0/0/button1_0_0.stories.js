import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Button from './button1_0_0';

storiesOf('Button1_0_0', module)
.add('large', () => <Button modifier="theme-primary size-l">ボタン</Button>)
.add('middle', () => <Button modifier="theme-primary size-m">ボタン</Button>)
.add('small', () => <Button modifier="theme-primary size-s">ボタン</Button>)
.add('wide', () => <Button modifier="theme-primary size-m size-wide">ボタン</Button>)
.add('border', () => <Button modifier="theme-primary theme-border size-m">ボタン</Button>)
.add('onClick', () => <Button onClick={action('click')} modifier="theme-primary size-m">ボタン</Button>)
.add('link', () => <Button href="https://www.google.co.jp/" modifier="theme-primary size-m">ボタン</Button>)
.add('disabled', () => <Button modifier="theme-primary size-m" disabled={true}>ボタン</Button>);
