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
  if (formData.type === 'soup' && !formData.spiciness_scale) {
    formData.spiciness_scale = '6';
  } else {
    requiredFields.forEach((field) => {
      if (!formData[field]) {
        errors[field] = field + ' is required';
      }
    });
  }

  return errors;
};

export default validate;
