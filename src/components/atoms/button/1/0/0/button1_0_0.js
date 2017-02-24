import React, { Component, PropTypes } from 'react';
import tap from 'util/tap';

/**
 * Button1_0_0
 * onClickを渡すとイベントハンドラ付きのbuttonタグになります。
 * hrefを渡すとaタグアンカーリンクになります。
 */
class Button1_0_0 extends Component {

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
      return <button onClick={onClick} className={`button1_0_0 ${modifier}`} disabled={disabled} data-tap="btn" style={styles}>{children}</button>;
    }

    if (href) {
      return <a href={href} className={`button1_0_0 ${modifier}`} data-tap="btn" style={styles}>{children}</a>;
    }

    return <button className={`button1_0_0 ${modifier}`} disabled={disabled} data-tap="btn" style={styles}>{children}</button>;
  }
}

Button1_0_0.propTypes = {
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

export default Button1_0_0;
