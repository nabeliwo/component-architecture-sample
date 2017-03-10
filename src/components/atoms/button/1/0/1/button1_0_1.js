import React, { Component, PropTypes } from 'react';
import tap from 'util/tap';

/**
 * Component#Atom
 * 立体的なボタン。
 * onClickを渡すとイベントハンドラ付きのbuttonタグになります。
 * hrefを渡すとaタグアンカーリンクになります。
 */
export default class Button1_0_1 extends Component {

  /**
   * propTypes
   * @property {string|ReactElement} children 子要素
   * @property {function} onClick クリックのコールバック(これを設定するとbuttonを返す)
   * @property {string} href 遷移先(これを設定するとaを返す)
   * @property {boolean} disabled ボタンを非活性にするかどうか
   * @property {string} modifier CSSの修飾子
   * @property {Object} styles その他追加のスタイル
   */
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]).isRequired,
    onClick: PropTypes.func,
    href: PropTypes.string,
    disabled: PropTypes.bool,
    modifier: PropTypes.string,
    styles: PropTypes.object
  }

  /**
   * mount後、最初に呼ばれます。
   */
  componentDidMount() {
    tap.on();
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    const {
      children,
      onClick,
      href,
      disabled = false,
      modifier = '',
      styles = {}
    } = this.props;

    if (onClick) {
      return <button onClick={onClick} className={`button1_0_1 ${modifier}`} disabled={disabled} data-tap="btn" style={styles}>{children}</button>;
    }

    if (href) {
      return <a href={href} className={`button1_0_1 ${modifier}`} data-tap="btn" style={styles}>{children}</a>;
    }

    return <button className={`button1_0_1 ${modifier}`} disabled={disabled} data-tap="btn" style={styles}>{children}</button>;
  }
}
