import React from 'react';
import classNames from 'classnames';

export default function PasswordField(props) {
  const groupClasses = classNames({
    'form-group': true,
    'has-success': !props.error && props.touched,
    'has-error': props.error && props.touched,
    'has-warning': false,
  });
  return (
    <div className={groupClasses}>
        <label htmlFor={props.name} className="col-sm-2 control-label">{props.label}</label>
        <div className="col-sm-10">
            <input {...props} type={props.type} className="form-control" id={props.name} name={props.name} placeholder={props.placeholder} />
        </div>
        {props.error && props.touched && <div className="help-block">{props.error}</div>}
    </div>
  );
}
