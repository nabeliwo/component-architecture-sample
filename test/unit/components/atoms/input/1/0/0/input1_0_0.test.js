import assert from 'power-assert';
import sinon from 'sinon';
import React from 'react';
import { mount } from 'enzyme';
import Input from '../../../../../../../../src/components/atoms/input/1/0/0/input1_0_0';

/** @test {Input1_0_0} */
describe('Input1_0_0', () => {
  const onChange = sinon.spy();
  const wrapper = mount(<Input onChange={onChange} modifier="theme-primary size-m" name="name" type="text" placeholder="名前を入力してください" />);

  it('編集するとonChangeに渡した関数が呼ばれる', () => {
    wrapper.simulate('change');
    assert(onChange.calledOnce === true);
  });
});
