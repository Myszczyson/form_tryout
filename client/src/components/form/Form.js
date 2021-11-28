import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Paper, Container } from '@mui/material';
import { formInput } from '../templates/formInput';
import Pizza from './conditionals/Pizza';
import Soup from './conditionals/Soup';
import Sandwich from './conditionals/Sandwich';
import validate from '../utils/validations';
import sendData from './sendData';
import styles from './Form.module.scss';

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
      <Container className={styles.container} maxWidth="sm" fixed>
        <Paper elevation={24}>
          <form
            className={styles.formContainer}
            onSubmit={handleSubmit(this.submit)}
          >
            <Field
              label="Dish name"
              name="name"
              component={formInput}
              type="text"
              placeholder="Dish name"
            />
            <br />
            <Field
              label="Prep time"
              name="preparation_time"
              component={formInput}
              type="time"
              step="1"
              required
            />
            <br />
            <Field
              label="Dish type"
              name="type"
              component={formInput}
              type="select"
              required
              onChange={this.changedType}
            />
            <br />
            {dishType === 'pizza' && <Pizza />}
            <br />
            {dishType === 'soup' && <Soup />}
            <br />
            {dishType === 'sandwich' && <Sandwich />}
            <br />

            <Button type="submit" variant="contained">
              Submit your Dish
            </Button>
          </form>
        </Paper>
      </Container>
    );
  }
}

DishForm = reduxForm({
  form: 'dishForm',
  validate,
})(DishForm);

export default DishForm;
