import React from 'react';
import './App.css';
import Inscription from './components/inscription/Inscription';
import ReactDOM from 'react-dom';
import { Box } from '@mui/material';

function App() {
  return (
    <Box className="App"
    display="flex"
    alignItems="center"
    justifyContent="center"
    height="100vh">
      <Inscription/>
    </Box>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));

export default App;
