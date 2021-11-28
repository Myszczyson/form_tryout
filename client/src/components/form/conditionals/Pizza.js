import React from 'react';
import { Field } from 'redux-form';
import { formInput } from '../../templates/formInput';

const Pizza = () => {
  return (
    <div>
      <Field
        label="Number of slices"
        name="no_of_slices"
        component={formInput}
        type="number"
        min={1}
        required
      />

      <Field
        label="Diameter"
        name="diameter"
        component={formInput}
        type="number"
        min={1}
        step={0.1}
        required
      />
    </div>
  );
};

export default Pizza;
