import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';

export default function CountrySelect(props) {
    const setDisplay = props.setDisplay
    const [value, setValue] = useState({name: "blank", id: "0"})

    return (
        <Autocomplete
        onChange={(event, newValue) => {
            // console.log(newValue.attributes)
            setValue({...value, name: newValue.attributes.name, id: newValue.id });
            setDisplay({...value, name: newValue.attributes.name, id: newValue.id })
            // console.log("this is my selected", value)
        }}
      id="country-select-demo"
      sx={{ width: 300 }}
      options={props.data}
      autoHighlight
      getOptionLabel={(option) => option.attributes.name}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
         {option.attributes.name}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a Pet Rescue Centre!"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password',
          }}
        />
      )}
    />
  );
}
