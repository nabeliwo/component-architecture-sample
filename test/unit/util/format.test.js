import test from 'ava';
import { isOnlyNumber, number } from '../../../src/util/format';

test('isOnlyNumber#値が数字のみの場合trueを返す', (t) => {
  t.is(isOnlyNumber(123), true);
  t.is(isOnlyNumber(0), true);
});

test('isOnlyNumber#値に数字以外が含まれる場合falseを返す', (t) => {
  t.is(isOnlyNumber('edf123fe'), false);
  t.is(isOnlyNumber('aiu'), false);
});

test('number#数字3桁毎に「,(comma)」を挿入する', (t) => {
  t.is(number('1234567'), '1,234,567');
  t.is(number(9876543), '9,876,543');
});
