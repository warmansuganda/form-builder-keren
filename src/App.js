import React from 'react';
import {FormBuilder} from './Builder';
import './App.css';

const items = [
{
  key: "Header",
  name: "Header Text",
  icon: "fa fa-header"
},
{
  key: "Paragraph",
  name: "Paragraph",
  icon: "fa fa-paragraph"
},
{
  key: "Dropdown",
  name: "Dropdown",
  icon: "fa fa-caret-square-o-down"
}
];


function App() {
  return (
    <div className="App">
        <FormBuilder
                 items={items}
                 onSubmit={() => {}}
               />
    </div>
  );
}

export default App;
