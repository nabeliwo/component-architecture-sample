import React, { Component, PropTypes } from 'react';

/**
 * Component#Atom
 * エラー文言表示。
 */
export default class Error1_0_0 extends Component {

  /**
   * propTypes
   * @property {string|ReactElement} children 子要素
   * @property {string} modifier CSSの修飾子
   * @property {Object} styles その他追加のスタイル
   */
  static propTypes = {
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
      children,
      modifier = '',
      styles = {}
    } = this.props;

    return <p className={`error1_0_0 ${modifier}`} style={styles}>{children}</p>;
  }
}
