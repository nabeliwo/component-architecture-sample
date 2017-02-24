import React, { Component, PropTypes } from 'react';
import tap from 'util/tap';

/**
 * Button1_0_1
 * 立体的なボタンです。
 * onClickを渡すとイベントハンドラ付きのbuttonタグになります。
 * hrefを渡すとaタグアンカーリンクになります。
 */
class Button1_0_1 extends Component {

  componentDidMount() {
    tap.on();
  }

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

Button1_0_1.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
  onClick: PropTypes.func,
  href: PropTypes.string,
  disabled: PropTypes.bool,
  modifier: PropTypes.string,
  styles: PropTypes.object
};

export default Button1_0_1;
