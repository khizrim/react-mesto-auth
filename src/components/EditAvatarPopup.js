import useForm from '../hooks/useForm';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const {
    handleChange,
    validateInput,
    validateForm,
    reset,
    values,
    errors,
    formValidity,
  } = useForm();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar(values, reset);
  }

  return (
    <PopupWithForm
      name='user-pic-edit'
      title='Обновить аватар'
      submitBtn={props.submitBtn || 'Обновить'}
      isOpen={props.isOpen}
      isValid={formValidity}
      onChange={validateForm}
      onSubmit={handleSubmit}
      onClose={props.onClose}
    >
      <>
        <input
          id='user-pic-url'
          type='url'
          name='link'
          value={values.link || ''}
          onInput={validateInput}
          onChange={handleChange}
          placeholder='Ссылка на аватарку'
          className={`popup__input ${errors.link ? 'popup__input_type_error' : ''}`}
          required
        />
        {errors.link && (
          <span className='popup__input-error popup__input-error_active'>{errors.link}</span>
        )}
      </>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
