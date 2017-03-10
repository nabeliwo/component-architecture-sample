import assert from 'power-assert';
import { isNumber, number } from '../../../src/util/format';

/** @test {isNumber} */
describe('format#isNumber', () => {
  it('値が数字のみの場合trueを返す', () => {
    assert(isNumber(123) === true);
    assert(isNumber(0) === true);
  });

  it('値に数字以外が含まれる場合falseを返す', () => {
    assert(isNumber('edf123fe') === false);
    assert(isNumber('aiu') === false);
  });

  it('値が数字のみの場合trueを返す', () => {
    assert(isNumber(123) === true);
    assert(isNumber(0) === true);
  });
});

/** @test {number} */
describe('format#number', () => {
  it('数字3桁毎に「,(comma)」を挿入する', () => {
    assert(number('1234567') === '1,234,567');
    assert(number('9876543') === '9,876,543');
  });
});
