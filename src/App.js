import logo from './logo.svg';
import './App.css';

import PolicyTable from "./components/PolicyTable"
import { useState } from 'react';
import {Box, Container, TextField, Menu, MenuItem, Button} from '@mui/material'
function App() {

  const[filters, setFilters]= useState({})

  return (
    <Container>
      <h2>Insurance Policies</h2>
      <Box style={{ display:'flex', gap: 2, mb:2 }}>
        <TextField
          label="Search"
          onChange={(e)=>setFilters({...filters, search:e.target.value})}
        />
        <Button variant="contained" onChange={()=>setFilters({})}>
          Reset
        </Button>
      </Box>
      <PolicyTable filters={filters} />
    </Container>


    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    //   <PolicyTable />
    // </div>
  );
}

export default App;
