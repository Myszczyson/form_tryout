import { Select, TextField, MenuItem, InputLabel } from '@mui/material';
import styles from './formInput.module.scss';

export const formInput = ({
  type,
  label,
  input,
  min,
  max,
  step,
  pattern,
  meta: { touched, error },
}) => {
  switch (type) {
    case 'range':
      return (
        <div className={styles.inputContainer}>
          <InputLabel id={`${label}-id`}>{label}</InputLabel>
          <input
            {...input}
            labelid={`${label}-id`}
            type={type}
            min={min}
            max={max}
            required
          />
          {touched && error && <span className={styles.errorMsg}>{error}</span>}
        </div>
      );
    case 'select':
      return (
        <div className={styles.inputContainer}>
          <InputLabel id={`${label}-id`}>{label}</InputLabel>
          <Select {...input} labelid={`${label}-id`} displayEmpty>
            <MenuItem value="pizza"> Pizza </MenuItem>
            <MenuItem value="soup"> Soup </MenuItem>
            <MenuItem value="sandwich"> Sandwich </MenuItem>
          </Select>
          {touched && error && <span className={styles.errorMsg}>{error}</span>}
        </div>
      );
    default:
      return (
        <div className={styles.inputContainer}>
          <InputLabel id={`${label}-id`}>{label}</InputLabel>
          <TextField
            {...input}
            labelid={`${label}-id`}
            variant="standard"
            type={type}
            pattern={pattern}
            inputProps={{ min: min, max: max, step: step }}
            required
          />
          {touched && error && <span className={styles.errorMsg}>{error}</span>}
        </div>
      );
  }
};
