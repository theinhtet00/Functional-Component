import React, { createRef, useState } from 'react';
import './App.css';

const Item = ( { name, price}) =>(
  <li>{name}, ${price}</li>
);

const App = props =>{
  let [ items, setItems] = useState([
    { id: 1, name: 'Apple', price: 0.04},
    { id: 2, name: 'Orange', price: 0.05}
  ]);

  let nameRef = createRef();
  let priceRef = createRef();

  let add = () =>{
    let id = items.length +1;
    let name = nameRef.current.value;
    let price = priceRef.current.value;

    setItems([
      ...items,
      { id, name, price}
    ]);
  }
  return(
    <div>
      <h1>Functional Component</h1>
      <ul>
        {items.map(i =>{
          return(
            <Item
              key = {i.id}
              name = {i.name}
              price = {i.price}
            />
          )
        })}
      </ul>
      <table>
        <tbody>
          <tr>
            <td><label>Name</label></td>
            <td><input type= "text" ref= { nameRef}></input></td>
          </tr>
          <tr>
            <td><label>Price</label></td>
            <td><input type= "text" ref= { priceRef}></input></td>
          </tr>
        </tbody>
      </table>
      <button onClick= {add}>Add</button>
    </div>
  )
}

export default App;