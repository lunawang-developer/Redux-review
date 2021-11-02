import React from 'react';
import FunctinContextComponent from './FunctionContextComponent';
import { ThemeProvider } from './ThemeContext';

export default function App() {
  return (
    <>
      <ThemeProvider>
        <FunctinContextComponent />
      </ThemeProvider>
    </>
  )
}


