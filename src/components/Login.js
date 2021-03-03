import { withRouter } from 'react-router-dom';
import useForm from "../hooks/useForm";

function Login(props) {
  const {
    handleChange,
    validateForm,
    validateInput,
    values,
    errors,
    formValidity,
  } = useForm();

  const { password, email } = values;

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(password, email);
  }

  return (
    <div className='auth-form'>
      <form
        action='#'
        method='POST'
        name='login-form'
        className='form'
        onChange={validateForm}
        onSubmit={handleSubmit}
        noValidate
      >
        <h2 className='form__title form__title_dark'>Вход</h2>
        <div className='form__inputs-container'>
          <input
            id='user-email'
            type='email'
            name='email'
            autoComplete='email'
            className={`form__input form__input_dark ${
              errors.email ? 'form__input_type_error' : ''
            }`}
            placeholder='Email'
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            minLength='2'
            onInput={validateInput}
            onChange={handleChange}
            required
          />
          {errors.email && (
            <span className="form__input-error form__input-error_active">
              {errors.email}
            </span>
          )}
          <input
            id='user-password'
            type='password'
            name='password'
            autoComplete='password'
            className={`form__input form__input_dark ${
              errors.password ? 'form__input_type_error' : ''
            }`}
            placeholder='Пароль'
            onInput={validateInput}
            onChange={handleChange}
            required
          />
          {errors.password && (
            <span className="form__input-error form__input-error_active">
              {errors.password}
            </span>
          )}
        </div>
        <button
          disabled={!formValidity}
          type="submit"
          className={`form__submit-btn form__submit-btn_dark ${
            !formValidity ? 'form__submit-btn_disabled' : ''
          }`}
        >
          Войти
        </button>
      </form>
    </div>
  );
}

export default withRouter(Login);
