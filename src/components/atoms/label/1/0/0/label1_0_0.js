import React, { PropTypes } from 'react';

/**
 * Input1_0_0
 * Fieldから使用される場合、同じnameを渡せばhtmlForがInputのidと同じになります。
 */
const Label1_0_0 = ({
  name,
  children,
  modifier = '',
  styles = {}
}) => <label htmlFor={`form_${name}`} className={`label1_0_0 ${modifier}`} style={styles}>{children}</label>;

Label1_0_0.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
  modifier: PropTypes.string,
  styles: PropTypes.object
};

export default Label1_0_0;
