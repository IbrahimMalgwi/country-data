import React from 'react';
import './App.css';
import DataTable from './components/DataTable.tsx';
import EnhancedTable from "./components/EnhancedTable.tsx";


function App() {  
  return (
    <>
    
      <h1>Material-UI Table with Filter and Sort</h1>
      {/* <DataTable />      */}
      <EnhancedTable />
      
       
    </>
  )
}

export default App
