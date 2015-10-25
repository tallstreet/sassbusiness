import React, { PropTypes } from 'react';
import translate from 'counterpart';
import { connectReduxForm } from 'redux-form';
import { InputField } from '../../utils/Fields';

function validateSignup(data) {
  const errors = {};
  if (!data.username) {
    errors.username = translate('global.required');
  }
  if (!data.email) {
    errors.email = translate('global.required');
  }
  if (!data.password) {
    errors.password = translate('global.required');
  }
  if (data.password !== data.repeat) {
    errors.repeat = translate('signup.match');
  }
  return errors;
}

class SignupForm extends React.Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  }

  render() {
    const { fields: {username, email, password, repeat}, handleSubmit } = this.props;
    return (
      <form className="wrapper form-horizontal" role="form" method="post" onSubmit={handleSubmit}>

        <InputField type="text" name="username" {...username} label={translate('signup.username')} placeholder={translate('signup.username')} />
        <InputField type="email" name="email" {...email} label={translate('signup.email')} placeholder={translate('signup.example_email')} />
        <InputField type="password" name="password" {...password} label={translate('signup.password')} placeholder={translate('signup.password')} />
        <InputField type="password" name="repeat" {...repeat} label={translate('signup.repeat')} placeholder={translate('signup.repeat')} />

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

SignupForm = connectReduxForm({
  form: 'signup',
  fields: ['username', 'email', 'password', 'repeat'],
  validate: validateSignup,
})(SignupForm);

export default SignupForm;
