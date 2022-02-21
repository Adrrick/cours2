import { Box, Button, TextField } from '@mui/material'
import React from 'react'

export default function Inscription() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      display = "flex"
      flexDirection= "column"
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="contained">Enregistrer</Button>
    </Box>
  )
}