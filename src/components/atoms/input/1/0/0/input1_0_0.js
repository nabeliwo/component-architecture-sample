import React, { PropTypes } from 'react';

/**
 * Input1_0_0
 * Fieldから使用される場合、同じnameを渡せばidがLabelのhtmlForと同じになります。
 */
const Input1_0_0 = ({
  name,
  placeholder,
  type = 'text',
  required = false,
  onChange,
  modifier = '',
  styles = {}
}) => (
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

Input1_0_0.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  modifier: PropTypes.string,
  styles: PropTypes.object
};

export default Input1_0_0;
