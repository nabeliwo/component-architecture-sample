import React, { Component, PropTypes } from 'react';

/**
 * Component#Atom
 * labelタグ。
 * Fieldから使用される場合、同じnameを渡せばhtmlForがInputのidと同じになります。
 */
export default class Label1_0_0 extends Component {

  /**
   * propTypes
   * @property {string} name name属性
   * @property {string|ReactElement} children 子要素
   * @property {string} modifier CSSの修飾子
   * @property {Object} styles その他追加のスタイル
   */
  static propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]).isRequired,
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
      children,
      modifier = '',
      styles = {}
    } = this.props;

    return <label htmlFor={`form_${name}`} className={`label1_0_0 ${modifier}`} style={styles}>{children}</label>;
  }
}
