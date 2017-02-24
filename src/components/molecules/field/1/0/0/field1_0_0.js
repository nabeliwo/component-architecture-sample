import React, { PropTypes } from 'react';
import Label from 'atom/label/1/0/0/label1_0_0';
import Input from 'atom/input/1/0/0/input1_0_0';
import Error from 'atom/error/1/0/0/error1_0_0';

const Field1_0_0 = ({
  name,
  label,
  input,
  error,
  modifier = '',
  styles = {}
}) => (
  <div className={`field1_0_0 ${modifier}`} style={styles}>
    {label &&
      <div className="field-label"><Label name={name} modifier={modifier}>{label}</Label></div>
    }

    <Input name={name} type={input.type} placeholder={input.placeholder} required={input.required} modifier={modifier} />

    {error &&
      <div className="field-error">
        <Error modifier={modifier}>{error}</Error>
      </div>
    }
  </div>
);

Field1_0_0.propTypes = {
  name: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  error: PropTypes.string,
  modifier: PropTypes.string,
  styles: PropTypes.object
};

export default Field1_0_0;
