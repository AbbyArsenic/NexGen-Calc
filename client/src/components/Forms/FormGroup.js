import React from 'react';

const FormGroup = ({ id, label, placeholder, value } ={}) => (
  <div className="form-group">
    <label htmlFor={id} className="col-sm-4 control-label">{label}</label>
    <div className="col-sm-8">
      <input type="text" className="form-control" id={id} placeholder={placeholder} />
    </div>
  </div>
);

export default FormGroup;
