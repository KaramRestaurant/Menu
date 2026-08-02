import { useState } from 'react'
import Logo from './assets/Logo.png'
import './App.css'
import wallpaper from "./assets/wallpaper.jpeg";
import Divider from './Divider.jsx'
import Item from './item.jsx'
import ItemSquare from './ItemSquare.jsx';
import Fattouch from './assets/fattouch.jpeg'
import Tabbouleh from './assets/Tabbouleh.jpeg'
import Leaves from './assets/Leaves.jpeg'
import Kebbe from './assets/Kebbe.jpeg'
import KaftaCerise from './assets/KaftaCerise.jpeg'
import Fweregh from './assets/Fweregh.jpeg'
import R2a2at from './assets/R2a2at.jpeg'
import Hendbe from './assets/Hendbe.jpeg'
import Fries from './assets/Fries.jpeg'
import Hummus from './assets/Hummus.jpeg'
import Moutabal from './assets/Moutabal.jpeg'
import LabneToum from './assets/LabneToum.jpeg'
import Shanklish from './assets/Shanklish.jpeg'
import Asbet from './assets/asbet.jpeg'
import Footer from './Footer.jsx';
import Fateteenab from './assets/FatetEenab.jpeg';
import BatataKouzbara from './assets/batatakouzbara.jpeg'
import Labneh from './assets/Labneh.jpeg'
import MixMashewe from './assets/MixMashewe.jpeg'
import HommosRasAasfour from './assets/hommosrasaasfour.jpeg'
import Jebneh from './assets/jebneh.jpeg'
import JebnehPesto from './assets/jebnehpesto.jpeg'
import Jweneh from './assets/jweneh.jpeg'
import M2ane2 from './assets/m2ane2.jpeg'
import Mashewe from './assets/mashewe.jpeg'
import Nkha3at from './assets/nkha3at.jpeg'

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
    { firstName: 'Houmos', secondName: 'حمص', price: '450,000 LBP', image:Hummus },
    { firstName: 'Houmos + viande', secondName: 'حمص لحمة / سجق', price: '700,000 LBP', image: HommosRasAasfour },
    { firstName: 'Moutabal', secondName: 'متبل', price: '450,000 LBP',image:Moutabal },
    { firstName: 'Fromage', secondName: 'جبنة', price: '500,000 LBP', image: Jebneh },
    { firstName: 'Fromage + pesto', secondName: 'جبنة مع بيستو', price: '600,000 LBP', image: JebnehPesto },
    { firstName: 'Labneh', secondName: 'لبنة', price: '450,000 LBP',image:Labneh },
    { firstName: 'Labneh + ails', secondName: 'لبنة + ثوم', price: '500,000 LBP', image:LabneToum },
    { firstName: 'Labneh + vegetables', secondName: 'لبنة + خضرة', price: '500,000 LBP',image:Labneh },
    { firstName: 'Chankliche', secondName: 'شنكليشة', price: '450,000 LBP', image:Shanklish },
    { firstName: 'Feuille de vigne', secondName: 'ورق عنب', price: '400,000 LBP', image: Leaves },
    { firstName: 'Fatte Grape Leaves', secondName: 'قتة ورق عنب', price: '500,000 LBP',image:Fateteenab }
  ]

  const hotMezza = [
    { firstName: 'Frites', secondName: 'بطاطا', price: '300,000 LBP',image:Fries },
    { firstName: 'Batata Kezbra', secondName: 'بطاطا بكزبرة', price: '400,000 LBP',image:BatataKouzbara },
    { firstName: 'Batata grille + pesto', secondName: 'بطاطا مشوية + بيستو', price: '450,000 LBP' },
    { firstName: 'Pates piece', secondName: 'معجنات (قطعة)', price: '50,000 LBP', image:R2a2at },
    { firstName: 'Saucissions / Soujok', secondName: 'سجق/مقانق', price: '600,000 LBP', image: M2ane2 },
    { firstName: 'Foie de beuf', secondName: 'قصبة بقر', price: '600,000 LBP',image:Asbet },
    { firstName: 'Ailles du poulet', secondName: 'جوانح', price: '500,000 LBP', image:Jweneh },
    { firstName: 'Viande hachee + pesto', secondName: 'لحمة راس عصفور', price: '700,000 LBP' },
    { firstName: 'Mohsassa', secondName: 'محمصة', price: '700,000 LBP' },
    { firstName: 'Kafta + cerise', secondName: 'كفتة + كرز', price: '700,000 LBP',image:KaftaCerise },
    { firstName: 'Oeuf du Mouton', secondName: 'بيض غنم', price: '700,000 LBP' },
    { firstName: 'Snasel', secondName: 'سناسل', price: '700,000 LBP' },
    { firstName: 'Marrows', secondName: 'نخاعات', price: '700,000 LBP' },
    { firstName: 'Fweregh', secondName: 'فوارغ', price: '1,300,000 LBP',image:Fweregh }
  ]

  const salads = [
    { firstName: 'Salade', secondName: 'سلطة', price: '450,000 LBP' },
    { firstName: 'Rocca', secondName: 'روكا', price: '400,000 LBP' },
    { firstName: 'Tabbouleh', secondName: 'تبولة', price: '450,000 LBP', image: Tabbouleh },
    { firstName: 'Fattouch', secondName: 'فتوش', price: '450,000 LBP', image: Fattouch },
    { firstName: 'Fattouch + Fromage', secondName: 'فتوش + جبنة', price: '550,000 LBP' },
    { firstName: 'Hendbe', secondName: 'هندبة', price: '400,000 LBP', image:Hendbe },
  ]

  const mashewe = [
    { firstName: 'Viande 200g', secondName: 'لحمة ', price: '750,000 LBP', image:Mashewe },
    { firstName: 'Kafta/Kabab 200g', secondName: 'كفتة/كباب', price: '750,000 LBP',image:Mashewe },
    { firstName: 'Aarayes Kafta/Kabab 200g', secondName: ' عرايس كفتة/ كباب', price: '800,000 LBP' },
    { firstName: 'Tawouk 200g', secondName: 'طاووق', price: '700,000 LBP',image:Mashewe },
    { firstName: 'Kebbe crue', secondName: 'كبة نية', price: '900,000 LBP' },
    { firstName: 'Mix Barbecue 1kg', secondName: 'مشاوي مشكل', price: '3,600,000 LBP', image:MixMashewe },
    { firstName: 'Poulet grille', secondName: 'دجاج مشوي', price: '1,700,000 LBP',image:Mashewe },
    { firstName: 'Kebbe grille graise', secondName: 'قرص كبة شحمة', price: '350,000 LBP', image: Kebbe },
    { firstName: 'Kebbe grille viande', secondName: 'قرص كبة لحمة', price: '400,000 LBP', image: Kebbe },
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
        <p className="sectionText"><span className="redLetter">C</span>old <span className="redLetter">M</span>ezza</p>
      </div>
      <div className="menu-container-main">
        <div className="menu-container">
          {coldMezza.map((item, index) => (
            <div key={index} className="menu-item">
              <ItemSquare firstText={item.firstName} secondText={item.secondName} price={item.price} image={item.image} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="sectionText"><span className="redLetter">H</span>ot <span className="redLetter">M</span>ezza</p>
      </div>
      <div className="menu-container-main">
        <div className="menu-container">
          {hotMezza.map((item, index) => (
            <div key={index} className="menu-item">
              <ItemSquare firstText={item.firstName} secondText={item.secondName} price={item.price} image={item.image} />
            </div>
          ))}
        </div>
      </div>
      <div>        <p className="sectionText"><span className="redLetter">S</span>alads</p></div>
      <div className="menu-container-main">
        <div className="menu-container">
          {salads.map((item, index) => (
            <div key={index} className="menu-item">
              <ItemSquare firstText={item.firstName} secondText={item.secondName} price={item.price} image={item.image} />

            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="sectionText"><span className="redLetter">M</span>ain <span className="redLetter">D</span>ishes</p>
      </div>
      <div className="menu-container-main">
        <div className="menu-container">
          {mashewe.map((item, index) => (
            <div key={index} className="menu-item">
              <ItemSquare firstText={item.firstName} secondText={item.secondName} price={item.price} image={item.image} />
            </div>
          ))}
        </div>
      </div>
      <div className="footerName">
        <Footer />
      </div>
    </div>
  )
}

export default App
