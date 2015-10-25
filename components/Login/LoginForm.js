import React, { PropTypes } from 'react';
import translate from 'counterpart';
import { connectReduxForm } from 'redux-form';
import { InputField } from '../../utils/Fields';

function validateLogin(data) {
  const errors = {};
  if (!data.username) {
    errors.username = translate('global.required');
  }
  if (!data.password) {
    errors.password = translate('global.required');
  }
  return errors;
}

class LoginForm extends React.Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  }

  render() {
    const { fields: {username, password}, handleSubmit } = this.props;
    return (
      <form className="wrapper form-horizontal" role="form" method="post" onSubmit={handleSubmit}>

        <InputField type="text" name="username" {...username} label={translate('login.username')} placeholder={translate('login.username')} />
        <InputField type="password" name="password" {...password} label={translate('login.password')} placeholder={translate('login.password')} />

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

LoginForm = connectReduxForm({
  form: 'login',
  fields: ['username', 'password'],
  validate: validateLogin,
})(LoginForm);

export default LoginForm;
