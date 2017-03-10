/**
 * 値が数字だけかどうか(文字列などが含まれていないか)を判定します
 * @param {Number|String} num
 * @return {Boolean} 値が数字だけかどうか
 */
export function isNumber(num) {
  if (typeof num !== 'number' && typeof num !== 'string') {
    return false;
  }

  const str = num.toString();
  return !!str.match(/^(-?(?!00)\d*\.?\d)+$/g);
}

/**
 * 数字3桁毎に「,(comma)」を挿入
 * @param {Number|String} num
 * @return {String} Number added comma
 */
export function number(num) {
  // 数字以外の値が含まれていた場合はそのまま値を返します
  if (!isNumber(num)) {
    return num;
  }

  const parts = num.toString().split('.');
  parts[0] = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
  return parts.join('.');
}

export default {
  number
};
