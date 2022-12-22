import React from 'react'
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const InputOne = () => {

  const [showPassword, setShowPassword] = React.useState(false);
  const [inputs, setInputs] = React.useState('')
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setInputs(event?.target.value)

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TextField
        sx={{ m: 1, width: '25ch' }}
        id="-basic"
        label="Outlined"
        variant="outlined" // standard - filled
        // value={inputs}
        onChange={handleChange}
      />
      <TextField
        sx={{ m: 1, width: '25ch' }}
        id="filled-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="outlined" // standard - filled
        // value={inputs}
        onChange={handleChange}
      />
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          label="Password"
          endAdornment={
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          }
          // value={inputs}
          onChange={handleChange}
        />
      </FormControl>
      <h2>{inputs}</h2>
    </div>

  )
}