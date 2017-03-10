import assert from 'power-assert';
import React from 'react';
import { mount } from 'enzyme';
import Label from '../../../../../../../../src/components/atoms/label/1/0/0/label1_0_0';

/** @test {Label1_0_0} */
describe('Label1_0_0', () => {
  const wrapper = mount(<Label modifier="size-s" name="name">ラベル</Label>);

  it('テキストが描画される', () => {
    assert(wrapper.text() === 'ラベル');
  });
});


