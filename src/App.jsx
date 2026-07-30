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

  const coldMezza = [
    { firstName: 'Houmos', secondName: 'حمص', price: '450,000 LBP' },
    { firstName: 'Houmos + viande', secondName: 'حمص لحمة / سجق', price: '700,000 LBP' },
    { firstName: 'Moutabal', secondName: 'متبل', price: '450,000 LBP' },
    { firstName: 'Fromage', secondName: 'جبنة', price: '500,000 LBP' },
    { firstName: 'Fromage + pesto', secondName: 'جبنة مع بيستو', price: '600,000 LBP' },
    { firstName: 'Labneh', secondName: 'لبنة', price: '450,000 LBP' },
    { firstName: 'Labneh + ails', secondName: 'لبنة + ثوم', price: '500,000 LBP' },
    { firstName: 'Labneh + vegetables', secondName: 'لبنة + خضرة', price: '500,000 LBP' },
    { firstName: 'Chankliche', secondName: 'شنكليشة', price: '450,000 LBP' },
    { firstName: 'Feuille de vigne', secondName: 'ورق عنب', price: '400,000 LBP' },
    { firstName: 'Fatte Grape Leaves', secondName: 'قتة ورق عنب', price: '500,000 LBP' }
  ]

  const hotMezza = [
    { firstName: 'Frites', secondName: 'بطاطا', price: '300,000 LBP' },
    { firstName: 'Batata Kezbra', secondName: 'بطاطا بكزبرة', price: '400,000 LBP' },
    { firstName: 'Batata grille + pesto', secondName: 'بطاطا مشوية + بيستو', price: '450,000 LBP' },
    { firstName: 'Pates piece', secondName: 'معجنات (قطعة)', price: '50,000 LBP' },
    { firstName: 'Saucissions / Soujok', secondName: 'سجق/مقانق', price: '600,000 LBP' },
    { firstName: 'Foie de beuf', secondName: 'قصبة بقر', price: '600,000 LBP' },
    { firstName: 'Ailles du poulet', secondName: 'جوانح', price: '500,000 LBP' },
    { firstName: 'Viande hachee + pesto', secondName: 'لحمة راس عصفور', price: '700,000 LBP' },
    { firstName: 'Mohsassa', secondName: 'محمصة', price: '700,000 LBP' },
    { firstName: 'Kafta + cerise', secondName: 'كفتة + كرز', price: '700,000 LBP' },
    { firstName: 'Oeuf du Mouton', secondName: 'بيض غنم', price: '700,000 LBP' },
    { firstName: 'Snasel', secondName: 'سناسل', price: '700,000 LBP' },
    { firstName: 'Marrows', secondName: 'نخاعات', price: '700,000 LBP' },
    { firstName: 'Fweregh', secondName: 'فوارغ', price: '1,300,000 LBP' }
  ]

  const salads = [
    { firstName: 'Salade', secondName: 'سلطة', price: '450,000 LBP' },
    { firstName: 'Rocca', secondName: 'روكا', price: '400,000 LBP' },
    { firstName: 'Tabbouleh', secondName: 'تبولة', price: '450,000 LBP' },
    { firstName: 'Fattouch', secondName: 'فتوش', price: '450,000 LBP' },
    { firstName: 'Fattouch + Fromage', secondName: 'فتوش + جبنة', price: '550,000 LBP' },
    { firstName: 'Hendbe', secondName: 'هندبة', price: '400,000 LBP' },
  ]

  const mashewe = [
    { firstName: 'Viande 200g', secondName: 'لحمة ', price: '750,000 LBP' },
    { firstName: 'Kafta/Kabab 200g', secondName: 'كفتة/كباب', price: '750,000 LBP' },
    { firstName: 'Aarayes Kafta/Kabab 200g', secondName: ' عرايس كفتة/ كباب', price: '800,000 LBP' },
    { firstName: 'Tawouk 200g', secondName: 'طاووق', price: '700,000 LBP' },
    { firstName: 'Kebbe crue', secondName: 'كبة نية', price: '900,000 LBP' },
    { firstName: 'Mix Barbecue 1kg', secondName: 'مشاوي مشكل', price: '3,600,000 LBP' },
    { firstName: 'Poulet grille', secondName: 'دجاج مشوي', price: '1,700,000 LBP' },
    { firstName: 'Kebbe grille graise', secondName: 'قرص كبة شحمة', price: '350,000 LBP' },
    { firstName: 'Kebbe grille viande', secondName: 'قرص كبة لحمة', price: '400,000 LBP' },
  ]

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
        {/* <div className='itemDivMain'>
          <Item />
        </div> */}
      </div>
      <div>
        <p className="sectionText"><span className="redLetter">H</span>ot <span className="redLetter">M</span>ezza</p>
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
      <div>
        <p className="sectionText"><span className="redLetter">C</span>old <span className="redLetter">M</span>ezza</p>
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
      <div>        <p className="sectionText"><span className="redLetter">S</span>alads</p></div>
      <div className="menu-container-main">
        <div className="menu-container">
          {items.map((item, index) => (
            <div key={index} className="menu-item">
              <ItemSquare />
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="sectionText"><span className="redLetter">M</span>ain <span className="redLetter">D</span>ishes</p>

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
