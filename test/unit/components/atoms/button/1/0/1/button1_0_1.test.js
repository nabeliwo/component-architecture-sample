import assert from 'power-assert';
import sinon from 'sinon';
import React from 'react';
import { mount } from 'enzyme';
import Button from '../../../../../../../../src/components/atoms/button/1/0/1/button1_0_1';

/** @test {Button1_0_1} */
describe('Button1_0_1', () => {
  const onClick = sinon.spy();
  const wrapper = mount(<Button onClick={onClick}>ボタン</Button>);

  it('テキストが描画される', () => {
    assert(wrapper.text() === 'ボタン');
  });

  it('クリックするとonClickに渡した関数が呼ばれる', () => {
    wrapper.simulate('click');
    assert(onClick.calledOnce === true);
  });
});
