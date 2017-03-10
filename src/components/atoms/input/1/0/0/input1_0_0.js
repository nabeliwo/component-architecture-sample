import React, { Component, PropTypes } from 'react';

/**
 * Component#Atom
 * inputタグ。渡されるタイプによってinputのタイプを変える。
 * Fieldから使用される場合、同じnameを渡せばidがLabelのhtmlForと同じになります。
 */
export default class Input1_0_0 extends Component {

  /**
   * propTypes
   * @property {string} name name属性
   * @property {string} string placeholder属性
   * @property {string} type type属性
   * @property {boolean} required required属性
   * @property {function} onChange inputが編集された際呼ばれるコールバック
   * @property {string} modifier CSSの修飾子
   * @property {Object} styles その他追加のスタイル
   */
  static propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string,
    required: PropTypes.bool,
    onChange: PropTypes.func,
    modifier: PropTypes.string,
    styles: PropTypes.object
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    const {
      name,
      placeholder,
      type = 'text',
      required = false,
      onChange,
      modifier = '',
      styles = {}
    } = this.props;

    return (
      <input
        id={`form_${name}`}
        name={name}
        placeholder={placeholder}
        type={type}
        required={required}
        onChange={onChange}
        className={`input1_0_0 ${modifier}`}
        style={styles}
      />
    );
  }
}
