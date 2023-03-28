import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const RadioButtonsGroup = ({type, handleChange, label, buttons, disable=null}) => {
  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">{label}</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={type}
        onChange={handleChange}
      >
        {buttons.map((b) => {
          if (b === disable) {
            return (
              <FormControlLabel value={b} control={<Radio />} label={b} disabled/>
            )
          }
          return (
            <FormControlLabel value={b} control={<Radio />} label={b} />
          )
        })}
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButtonsGroup;