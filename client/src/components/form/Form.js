import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from '@mui/material';
import styles from './Form.module.scss';
import sendData from './sendData';
import Pizza from './conditionals/Pizza';
import Soup from './conditionals/Soup';
import Sandwich from './conditionals/Sandwich';
import { formInput } from '../templates/formInput';
import validate from '../utils/validations';

class DishForm extends Component {
  constructor(props) {
    super(props);
    this.types = [
      'no_of_slices',
      'diameter',
      'spiciness_scale',
      'slices_of_bread',
    ];
    this.changedType = this.changedType.bind(this);
    this.submit = this.submit.bind(this);
  }

  changedType() {
    this.types.forEach((element) => this.props.change(element, undefined));
  }

  submit(formData) {
    sendData(formData);
    this.props.reset('dishForm');
  }

  render() {
    const { handleSubmit, dishType } = this.props;
    return (
      <form className={styles.container} onSubmit={handleSubmit(this.submit)}>
        <Field
          name="name"
          component={formInput}
          type="text"
          placeholder="Name"
          label="Dish name"
        />

        <Field
          name="preparation_time"
          component={formInput}
          type="time"
          step="1"
          placeholder="Prep time"
          required
        />

        <Field
          name="type"
          component={formInput}
          type="select"
          required
          onChange={this.changedType}
        />

        {dishType === 'pizza' && <Pizza />}
        {dishType === 'soup' && <Soup />}
        {dishType === 'sandwich' && <Sandwich />}

        <Button type="submit" variant="contained">
          Submit your Dish
        </Button>
      </form>
    );
  }
}

DishForm = reduxForm({
  form: 'dishForm',
  validate,
})(DishForm);

export default DishForm;
