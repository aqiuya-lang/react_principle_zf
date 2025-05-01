// import React from 'react'
import React from './handwrite/react';


const element = React.createElement('div', {
  style: {color: 'red'}
}, 'Hello, React!','oo')

const App = () => {
  
  console.log(element)
  
  return (
    element
  );
};

export default App;

