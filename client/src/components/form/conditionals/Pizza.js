import React from 'react';
import { Field } from 'redux-form';
import { formInput } from '../../templates/formInput';

const Pizza = () => {
  return (
    <div>
      <label>Numbe of slices</label>
      <div>
        <Field
          name="no_of_slices"
          component={formInput}
          type="number"
          min="1"
          required
        />
      </div>
      <label>Size</label>
      <div>
        <Field
          name="diameter"
          component={formInput}
          type="number"
          min="1"
          step="0.1"
          required
        />
      </div>
    </div>
  );
};

export default Pizza;
