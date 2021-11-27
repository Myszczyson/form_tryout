import React from 'react';
import { Field } from 'redux-form';
import { formInput } from '../../templates/formInput';

const Sandwich = () => {
  return (
    <div>
      <label>Spiciness</label>
      <div>
        1
        <Field
          name="spiciness_scale"
          component={formInput}
          type="range"
          min={1}
          max={10}
          required
        />
        10
      </div>
    </div>
  );
};

export default Sandwich;
