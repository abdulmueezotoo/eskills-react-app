import logo from './logo.svg';
import { useState } from 'react';
// import './App.css';

const user = {
  name: 'Benjamin',
  imageURL: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90
}

// Loops
const cars = [
  {brand: 'Toyota', id: 1},
  {brand: 'Honda', id: 2},
  {brand: 'Tesla', id: 3},
  {brand: 'BMW', id: 4},
  {brand: 'Mercedes', id: 5}
]

function BuyingCars (){
  const listCars = cars.map(
    car => <li key = {car.id}>
      {car.brand}
    </li>
  );
  return(
    <ul>{listCars}</ul>
  );
}


function MyButton() {
  const [count, setCount] = useState(0);
  function handleClick(){
    // alert('You clicked me!');
    setCount(count + 1);
  }
  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}


function App() {
  return (
    <div className="App">
      <h1>{user.name}</h1>
      <img className="avatar" src={user.imageURL} style={{ width: user.imageSize, height: user.imageSize }}/>
      <BuyingCars/>
      <MyButton/>
      <MyButton/>
      <MyButton/>

    </div>
  );
}

export default App;
