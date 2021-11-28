export const validate = (formData) => {
  const errors = {};
  const requiredFields = [
    'name',
    'preparation_time',
    'type',
    'no_of_slices',
    'diameter',
    'spiciness_scale',
    'slices_of_bread',
  ];

  // Empty field validation

  requiredFields.forEach((field) => {
    if (!formData[field]) {
      errors[field] = 'This is required field';
    }
  });

  // Number field validation
  if (formData.type === 'pizza' && formData.no_of_slices < 1) {
    errors.no_of_slices = 'Number need to be above 1';
  } else if (formData.type === 'pizza' && formData.diameter < 1) {
    errors.diameter = 'Number need to be above 1';
  } else if (
    formData.type === 'soup' &&
    (!formData.spiciness_scale ||
      formData.spiciness_scale < 1 ||
      formData.spiciness_scale > 10)
  ) {
    formData.spiciness_scale = '6';
    errors.no_of_slices = 'Number need to be between 1 and 10';
  } else if (formData.type === 'sandwich' && formData.slices_of_bread < 1) {
    errors.slices_of_bread = 'Number need to be above 1';
  }

  return errors;
};

export default validate;
