import React from 'react';
import { Field } from 'redux-form';
import { formInput } from '../../templates/formInput';

const Sandwich = () => {
  return (
    <div>
      <label>Slices of bread</label>
      <div>
        <Field
          name="slices_of_bread"
          component={formInput}
          type="number"
          min="1"
          required
        />
      </div>
    </div>
  );
};

export default Sandwich;
