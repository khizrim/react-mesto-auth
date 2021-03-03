import { useState } from 'react';

function useForm() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [formValidity, setFormValidity] = useState(false);

  function handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setValues({
      ...values,
      [name]: value,
    });
  }

  function validateInput(e) {
    const target = e.target;
    const name = target.name;
    const value = target.validationMessage;

    setErrors({
      ...errors,
      [name]: value,
    });
  }

  function validateForm(e) {
    const form = e.target.form;
    setFormValidity(form.checkValidity());
  }

  function reset() {
    setValues({});
    setErrors({});
    setFormValidity({});
  }

  return {
    handleChange,
    validateInput,
    validateForm,
    setValues,
    reset,
    values,
    errors,
    formValidity,
    setFormValidity
  }
}

export default useForm;
