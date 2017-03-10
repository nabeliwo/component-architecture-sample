import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Label from './label1_0_0';

storiesOf('Label1_0_0', module)
.add('default', () => <Label modifier="size-m" name="name">ラベル</Label>)
.add('primary', () => <Label modifier="theme-primary size-m" name="name">ラベル</Label>)
.add('large', () => <Label modifier="size-l" name="name">ラベル</Label>)
.add('middle', () => <Label modifier="size-m" name="name">ラベル</Label>)
.add('small', () => <Label modifier="size-s" name="name">ラベル</Label>);
