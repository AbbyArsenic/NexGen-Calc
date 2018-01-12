import React from 'react';

const FormGroup = ({ id, label, placeholder, value }) => (
  <div className="form-group">
    <label htmlFor={id} className="col-sm-5 control-label">{label}</label>
    <div className="col-sm-7">
      <input type="text" className="form-control" id={id} placeholder={placeholder}
        value={(value) ? (value) : ('')}
      />
    </div>
  </div>
);

export default FormGroup;
