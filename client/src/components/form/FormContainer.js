import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import Form from './Form';

const selector = formValueSelector('dishForm');

const mapStateToProps = (state) => ({
  name: selector(state, 'name'),
  prepTime: selector(state, 'preparation_time'),
  dishType: selector(state, 'type'),
  noOfSlices: selector(state, 'no_of_slices'),
  diameter: selector(state, 'diameter'),
  spicinessScale: selector(state, 'spicinessScale'),
  slicesOfBread: selector(state, 'slices_of_bread'),
});

export default connect(mapStateToProps)(Form);
