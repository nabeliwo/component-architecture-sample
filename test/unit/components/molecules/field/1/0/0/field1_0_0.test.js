import assert from 'power-assert';
import React from 'react';
import { mount } from 'enzyme';
import Field from '../../../../../../../../src/components/molecules/field/1/0/0/field1_0_0';

const input = {
  type: 'text',
  placeholder: 'ユーザー名を入力してください。',
  required: true
};

/** @test {Field1_0_0} */
describe('Field1_0_0', () => {
  const wrapper = mount(<Field name="name" label="ユーザー名" error="そのユーザー名は既に使われています。" input={input} modifier="size-m" />);

  it('ラベルが描画される', () => {
    assert(wrapper.find('label').text() === 'ユーザー名');
  });

  it('エラー文言が描画される', () => {
    assert(wrapper.find('p').text() === 'そのユーザー名は既に使われています。');
  });
});


