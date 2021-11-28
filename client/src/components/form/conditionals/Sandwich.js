import React from 'react';
import { Field } from 'redux-form';
import { formInput } from '../../templates/formInput';

const Sandwich = () => {
  return (
    <div>
      <Field
        label="Slices of bread"
        name="slices_of_bread"
        component={formInput}
        type="number"
        min={1}
        required
      />
    </div>
  );
};

export default Sandwich;
