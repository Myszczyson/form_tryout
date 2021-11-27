import { Select, TextField, MenuItem } from '@mui/material';

export const formInput = ({
  type,
  label,
  input,
  min,
  max,
  step,
  meta: { touched, error },
}) => {
  switch (type) {
    case 'range':
      return (
        <div>
          <input
            {...input}
            label={label}
            type={type}
            min={min}
            max={max}
            required
          />
          {touched && error && <span>{error}</span>}
        </div>
      );
    case 'select':
      return (
        <div>
          <Select {...input} label={label} displayEmpty>
            <MenuItem value="pizza"> Pizza </MenuItem>
            <MenuItem value="soup"> Soup </MenuItem>
            <MenuItem value="sandwich"> Sandwich </MenuItem>
          </Select>
          {touched && error && <span>{error}</span>}
        </div>
      );
    case 'time':
      return (
        <div>
          <input
            {...input}
            label={label}
            type={type}
            min={min}
            max={max}
            step={step}
            required
          />
          {touched && error && <span>{error}</span>}
        </div>
      );
    default:
      return (
        <div>
          <TextField
            {...input}
            variant="standard"
            type={type}
            step={step}
            placeholder={label}
            required
          />
          {touched && error && <span>{error}</span>}
        </div>
      );
  }
};
