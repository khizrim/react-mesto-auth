import useForm from '../hooks/useForm';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
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
    props.onAddPlace(values, reset);
  }

  return (
    <PopupWithForm
      name='add-card'
      title='Новое место'
      submitBtn={props.submitBtn || 'Создать'}
      isOpen={props.isOpen}
      isValid={formValidity}
      onChange={validateForm}
      onSubmit={handleSubmit}
      onClose={props.onClose}
    >
      <>
        <input
          id='card-title'
          type='text'
          name='name'
          placeholder='Название'
          value={values.name || ''}
          onInput={validateInput}
          onChange={handleChange}
          className={`popup__input ${errors.name ? 'popup__input_type_error' : ''}`}
          minLength='2'
          maxLength='30'
          required
        />
        {errors.name && (
          <span className='popup__input-error popup__input-error_active'>
            {errors.name}
          </span>
        )}
        <input
          id='card-url'
          type='url'
          name='link'
          placeholder='Ссылка на картинку'
          value={values.link || ''}
          onInput={validateInput}
          onChange={handleChange}
          className={`popup__input ${errors.link ? 'popup__input_type_error' : ''}`}
          required
        />
        {errors.link && (
          <span className='popup__input-error popup__input-error_active'>
            {errors.link}
          </span>
        )}
      </>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
