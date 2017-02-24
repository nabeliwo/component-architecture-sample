import React, { PropTypes } from 'react';

/**
 * Error1_0_0
 */
const Error1_0_0 = ({
  children,
  modifier = '',
  styles = {}
}) => <p className={`error1_0_0 ${modifier}`} style={styles}>{children}</p>;

Error1_0_0.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
  modifier: PropTypes.string,
  styles: PropTypes.object
};

export default Error1_0_0;
