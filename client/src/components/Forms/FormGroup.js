import React from 'react';

const FormGroup = ({ label, inputClassName, id, placeholder, value, onChange }) => (
  <div className="form-group">
    <label htmlFor={id} className="col-sm-4 control-label">{label}</label>
    <div className="col-sm-8">
      <input
        type="text"
        className={(!inputClassName) ? ("form-control") : (inputClassName)}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  </div>
);

export default FormGroup;
