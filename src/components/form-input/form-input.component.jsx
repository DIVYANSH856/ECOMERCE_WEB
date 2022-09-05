import "./form-input.styles.scss";
import React from 'react';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className='group'>
            <input className='form-input' {...otherProps} />
      {label && (/* eslint-disable */
      <label className={'${otherProps.value.length ? "shrink" : ""} form-input-label'} >{label}</label>
      /* eslint-disable */
      )}
    </div>
  );
};

export default FormInput;
