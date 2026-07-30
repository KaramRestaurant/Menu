import { useState } from 'react'
import Logo from './assets/Logo.png'
import './App.css'
import wallpaper from "./assets/wallpaper.jpeg";
import Divider from './Divider.jsx'
import Item from './item.jsx'
import ItemSquare from './ItemSquare.jsx';

function App() {
  const [count, setCount] = useState(0)

  const items = [
    "Pizza",
    "Burger",
    "Pasta",
    "Salad",
    "Dessert",
    "Drinks",
  ];

  return (
    <div className="hero" style={{ backgroundImage: `url(${wallpaper})`, backgroundRepeat: 'repeat' }}>
      <nav className="navbar">

        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Our Story</a>
          <a href="#">Menu</a>
          <a href="#">Reservations</a>
        </div>
      </nav>

      <div>
        <div> <p className="authenticMenuText">Our Authentic Menu</p></div>
        <div className="dividerClass">
          <Divider />
        </div>
        {/* <div className='itemDivMain'>
          <Item />
        </div> */}
      </div>
      <div className="menu-container-main">
      <div className="menu-container">
        {items.map((item, index) => (
          <div key={index} className="menu-item">
            <ItemSquare />
          </div>
        ))}
      </div>
      </div>

    </div>
  )
}

export default App
