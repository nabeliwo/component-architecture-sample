import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Error1_0_0 from './error1_0_0';

storiesOf('Error1_0_0', module)
.add('large', () => <Error1_0_0 modifier="size-l">エラー文言</Error1_0_0>)
.add('middle', () => <Error1_0_0 modifier="size-m">エラー文言</Error1_0_0>)
.add('small', () => <Error1_0_0 modifier="size-s">エラー文言</Error1_0_0>);
