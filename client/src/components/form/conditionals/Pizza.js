import React from 'react';
import { Field } from 'redux-form';
import { formInput } from '../../templates/formInput';
import { stringToNum } from '../../utils/stringToNum';

const Pizza = () => {
  return (
    <div>
      <Field
        label="Number of slices"
        name="no_of_slices"
        component={formInput}
        type="number"
        min={1}
        parse={stringToNum}
        required
      />

      <Field
        label="Diameter"
        name="diameter"
        component={formInput}
        type="number"
        min={1}
        step={0.1}
        parse={stringToNum}
        required
      />
    </div>
  );
};

export default Pizza;
