import React from 'react';

const FormGroup = props => (
  <div className="form-group">
    <label htmlFor={props.id} className="col-sm-4 control-label">{props.label}</label>
    <div className="col-sm-8">
      <input type="text" className="form-control" id={props.id} placeholder={props.placeholder} />
    </div>
  </div>
);

export default FormGroup;