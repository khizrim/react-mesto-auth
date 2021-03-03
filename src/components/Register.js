import { Link, withRouter } from 'react-router-dom';
import useForm from "../hooks/useForm";

function Register(props) {
  const {
    handleChange,
    values,
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
        name='register-form'
        className='form'
        onSubmit={handleSubmit}
        noValidate
      >
        <h2 className='form__title form__title_dark'>Регистрация</h2>
        <div className='form__inputs-container'>
          <input
            id='user-email'
            type='email'
            name='email'
            autoComplete='email'
            className='form__input form__input_dark'
            placeholder='Email'
            minLength='2'
            onChange={handleChange}
            required
          />
          <input
            id='user-password'
            type='password'
            name='password'
            autoComplete='password'
            className='form__input form__input_dark'
            placeholder='Пароль'
            onChange={handleChange}
            required
          />
        </div>
        <button
          type='submit'
          className='form__submit-btn form__submit-btn_dark'
        >
          Зарегистрироваться
        </button>
        <Link to='/sign-in' className='form__caption'>Уже зарегистрированы? Войти</Link>
      </form>
    </div>
  );
}

export default withRouter(Register);
