import React from 'react';
import { Field } from 'redux-form';
import { formInput } from '../../templates/formInput';
import { stringToNum } from '../../utils/stringToNum';

const Sandwich = () => {
  return (
    <div>
      <Field
        label="Spiciness"
        name="spiciness_scale"
        component={formInput}
        type="range"
        min={1}
        max={10}
        parse={stringToNum}
        required
      />
    </div>
  );
};

export default Sandwich;
