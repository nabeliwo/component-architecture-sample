import assert from 'power-assert';
import React from 'react';
import { mount } from 'enzyme';
import Error from '../../../../../../../../src/components/atoms/error/1/0/0/error1_0_0';

/** @test {Error1_0_0} */
describe('Error1_0_0', () => {
  const wrapper = mount(<Error>エラー</Error>);

  it('テキストが描画される', () => {
    assert(wrapper.text() === 'エラー');
  });
});
