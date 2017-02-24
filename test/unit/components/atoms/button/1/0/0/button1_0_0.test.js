import test from 'ava';
import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Button from '../../../../../../../../src/components/atoms/button/1/0/0/button1_0_0';

const onClick = sinon.spy();
const wrapper = mount(<Button onClick={onClick}>ボタン</Button>);

test('Button1_0_0#テキストが描画される', (t) => {
  t.is(wrapper.text(), 'ボタン');
});

test('Button1_0_0#クリックするとonClickに渡した関数が呼ばれる', (t) => {
  wrapper.simulate('click');
  t.is(onClick.calledOnce, true);
});
