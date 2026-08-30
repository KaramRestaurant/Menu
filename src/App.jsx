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
import OldPicture from './assets/Oldpicture.jpeg'
import Ambiance from './assets/Ambiance.jpeg'
import Ambiance2 from './assets/Ambiance2.jpeg'
import FoodMenu from './FoodMenu.jsx';

function App() {
  const [selected, setSelected] = useState('Menu')
  const [selection, setSelection] = useState('Cold Mezza')
  const items = [
    "Pizza",
    "Burger",
    "Pasta",
    "Salad",
    "Dessert",
    "Drinks",
  ];

  const coldMezza = [
    { firstName: 'Houmos', secondName: 'حمص', price: '450,000 LBP', image: Hummus },
    { firstName: 'Houmos + viande', secondName: 'حمص لحمة / سجق', price: '700,000 LBP', image: HommosRasAasfour },
    { firstName: 'Moutabal', secondName: 'متبل', price: '450,000 LBP', image: Moutabal },
    { firstName: 'Fromage', secondName: 'جبنة', price: '500,000 LBP', image: Jebneh },
    { firstName: 'Fromage + pesto', secondName: 'جبنة مع بيستو', price: '600,000 LBP', image: JebnehPesto },
    { firstName: 'Labneh', secondName: 'لبنة', price: '450,000 LBP', image: Labneh },
    { firstName: 'Labneh + ails', secondName: 'لبنة + ثوم', price: '500,000 LBP', image: LabneToum },
    { firstName: 'Labneh + vegetables', secondName: 'لبنة + خضرة', price: '500,000 LBP', image: Labneh },
    { firstName: 'Chankliche', secondName: 'شنكليشة', price: '450,000 LBP', image: Shanklish },
    { firstName: 'Feuille de vigne', secondName: 'ورق عنب', price: '400,000 LBP', image: Leaves },
    { firstName: 'Fatte Grape Leaves', secondName: 'فتة ورق عنب', price: '500,000 LBP', image: Fateteenab }
  ]

  const hotMezza = [
    { firstName: 'Frites', secondName: 'بطاطا', price: '300,000 LBP', image: Fries },
    { firstName: 'Batata Kezbra', secondName: 'بطاطا بكزبرة', price: '400,000 LBP', image: BatataKouzbara },
    { firstName: 'Batata + pesto', secondName: 'بطاطا + بيستو', price: '450,000 LBP' },
    { firstName: 'Pates piece', secondName: 'معجنات (قطعة)', price: '50,000 LBP', image: R2a2at },
    { firstName: 'Saucissions / Soujok', secondName: 'سجق/مقانق', price: '600,000 LBP', image: M2ane2 },
    { firstName: 'Foie de beuf', secondName: 'قصبة بقر', price: '600,000 LBP', image: Asbet },
    { firstName: 'Ailles du poulet', secondName: 'جوانح', price: '500,000 LBP', image: Jweneh },
    { firstName: 'Viande hachee + pesto', secondName: 'لحمة راس عصفور', price: '700,000 LBP' },
    { firstName: 'Mohsassa', secondName: 'محمصة', price: '700,000 LBP' },
    { firstName: 'Kafta + cerise', secondName: 'كفتة + كرز', price: '700,000 LBP', image: KaftaCerise },
    { firstName: 'Oeuf du Mouton', secondName: 'بيض غنم', price: '700,000 LBP' },
    { firstName: 'Snasel', secondName: 'سناسل', price: '700,000 LBP' },
    { firstName: 'Marrows', secondName: 'نخاعات', price: '700,000 LBP' },
    { firstName: 'Fweregh', secondName: 'فوارغ', price: '1,300,000 LBP', image: Fweregh }
  ]

  const salads = [
    { firstName: 'Salade', secondName: 'سلطة', price: '450,000 LBP' },
    { firstName: 'Rocca', secondName: 'روكا', price: '400,000 LBP' },
    { firstName: 'Tabbouleh', secondName: 'تبولة', price: '450,000 LBP', image: Tabbouleh },
    { firstName: 'Fattouch', secondName: 'فتوش', price: '450,000 LBP', image: Fattouch },
    { firstName: 'Fattouch + Fromage', secondName: 'فتوش + جبنة', price: '550,000 LBP' },
    { firstName: 'Hendbe', secondName: 'هندبة', price: '400,000 LBP', image: Hendbe },
  ]

  const mashewe = [
    { firstName: 'Viande 200g', secondName: 'لحمة ', price: '750,000 LBP', image: Mashewe },
    { firstName: 'Kafta/Kabab 200g', secondName: 'كفتة/كباب', price: '750,000 LBP', image: Mashewe },
    { firstName: 'Aarayes Kafta/Kabab', secondName: ' عرايس كفتة/ كباب', price: '800,000 LBP' },
    { firstName: 'Tawouk 200g', secondName: 'طاووق', price: '700,000 LBP', image: Mashewe },
    { firstName: 'Kebbe crue', secondName: 'كبة نية', price: '900,000 LBP' },
    { firstName: 'Mix Barbecue 1kg', secondName: 'مشاوي مشكل', price: '3,600,000 LBP', image: MixMashewe },
    { firstName: 'Poulet grille', secondName: 'دجاج مشوي', price: '1,700,000 LBP', image: Mashewe },
    { firstName: 'Kebbe grille graise', secondName: 'قرص كبة شحمة', price: '350,000 LBP', image: Kebbe },
    { firstName: 'Kebbe grille viande', secondName: 'قرص كبة لحمة', price: '400,000 LBP', image: Kebbe },
  ]

  const Tobacco = [
    { firstName: 'Arguile', secondName: 'نرجيلة', price: '900,000 LBP' }
  ]

  const Drinks = [
    { firstName: 'Boissons gazeuses', secondName: 'مشروبات غازية', price: '100,000 LBP' },

    { firstName: 'Almaza Beer', secondName: 'ألمازا', price: '300,000 LBP', },

    { firstName: 'Beirouth Beer', secondName: 'بيروت', price: '250,000 LBP', },

    { firstName: 'Mexican Beer', secondName: 'مكسيكان', price: '300,000 LBP', },

    {
      firstName: 'Arak 1 cup',
      secondName: 'عرق كاس',
      price: '300,000 LBP'
    },

    {
      firstName: 'Arak 1/4L',
      secondName: 'عرق ربعية', price: '700,000 LBP'
    },

    {
      firstName: 'Nescafe',
      secondName: 'نسكافيه', price: '200,000 LBP'
    },

    { firstName: 'Café', secondName: 'قهوة', price: '200,000 LBP' },

    {
      firstName: 'Café (S)',
      secondName: 'قهوة ركوة زغيرة', price: '450,000 LBP'
    },

    {
      firstName: 'Café (M)',
      secondName: 'قهوة ركوة وسط', price: '500,000 LBP'
    },

    {
      firstName: 'Café (L)',
      secondName: 'قهوة ركوة كبيرة', price: '600,000 LBP'
    },

    { firstName: 'Tea', secondName: 'شاي', price: '200,000 LBP' },
    { firstName: 'Eau', secondName: 'مياه كبيرة', price: '100,000 LBP' },

  ]
  const Dessert = [
    { firstName: 'Ftayer', secondName: 'فطاير', price: '100,000 LBP' }
  ]

  const kebbeoras= [
    { firstName: 'kores lahme', 
secondName: 'قرص لحمة ', 
price: '400,000 LBP',  },
    { firstName: 'kores shahme', 
secondName: 'قرص شحمة', 
price: '350,000 LBP',  },
    { firstName: 'kores jebne', 
secondName: 'قرص جبنة ', 
price: '400,000 LBP',
 },
    { firstName: 'kores halabe', 
secondName: 'قرص حلبي', 
price: '400,000 LBP',  },
    { firstName: 'kores Bone marroow', 
secondName: 'قرص نخاع', 
price: '500,000 LBP', },
    { firstName: 'kores samak', 
secondName: 'قرص سمك',
price: '500,000 LBP',  },
    { firstName: 'kores djej', 
secondName: 'قرص دجاج', 
price: '400,000 LBP',  },
  ]

  const Breakfast = [
    { firstName: 'Labneh', secondName: 'لبنة', price: '450,000 LBP', },
    { firstName: 'Beid', 
secondName: 'بيض', price: '100,000 LBP',  },
    { firstName: 'Shanklish', secondName: 'شنكليش', price: '450,000 LBP',  },
    { firstName: 'Zaatar/Zaytoun', 
secondName: 'زعتر/زيتون', 
price: '300,000 LBP',  },
    { firstName: 'Khodra', 
secondName: 'خضار', 
price: '300,000 LBP',  },
    { firstName: 'Omelette', 
secondName: 'أومليت', 
price: '350,000 LBP', },
    { firstName: 'Beid Awarma',
secondName: 'بيض قورنا', 
price: '500,000 LBP',  },
  ]

  const Sandwiches = [
    { firstName: 'Kafta', secondName: 'كفتة', price: '400,000 LBP', },
    { firstName: 'Lahme', 
secondName: 'لحمة', price: '400,000 LBP',  },
    { firstName: 'Tawouk', secondName: 'طاووق', price: '400,000 LBP',  },
    { firstName: 'Batata', secondName: 'بطاطا', price: '300,000 LBP', }
  ]

  function handleClick(e) {
    setSelected(e)
  }

  function activeSelectionFct(e) {
    console.log("inside function: " + e)
    setSelection(e)
  }

  return (
    <div className="hero" style={{ backgroundImage: `url(${wallpaper})`, backgroundRepeat: 'repeat', backgroundSize: 'auto' }}>

      <nav className="navbar">

        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="nav-links">
          <a href="#" onClick={() => handleClick('Menu')}>Menu</a>
          <a href="#" onClick={() => handleClick('Story')}>Our Story</a>
          <a href="#" onClick={() => handleClick('Reservations')}>Reservations</a>
        </div>
      </nav>

      <main className="page-content">
        {selected == 'Menu' ?
          <div>
            <FoodMenu activeSelection={(e) => activeSelectionFct(e)} />
            {selection == 'Cold Mezza' ?
              <div>
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
              </div> : selection == 'Hot Mezza' ?


                <div>
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
                </div> : selection == 'Salads' ?


                  <div>
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
                  </div> : selection == 'Mashewe' ?


                    <div>
                      <div>
                        <p className="sectionText"><span className="redLetter">M</span>ashewe</p>
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
                    </div> : selection == 'Kebab 2ras' ?
                      <div>
                        <p className="sectionText"><span className="redLetter">K</span>ebab<span className="redLetter"> 2</span>ras</p>
                        <div className="menu-container-main">
                        <div className="menu-container">
                          {kebbeoras.map((item, index) => (
                            <div key={index} className="menu-item">
                              <ItemSquare firstText={item.firstName} secondText={item.secondName} price={item.price} image={item.image} />
                            </div>
                          ))}
                        </div>
                      </div>
                      </div> : selection == 'Dessert' ?
                        <div> 
                          <p className="sectionText"><span className="redLetter">D</span>essert</p>
                          <div className="menu-container-main">
                        <div className="menu-container">
                          {Dessert.map((item, index) => (
                            <div key={index} className="menu-item">
                              <ItemSquare firstText={item.firstName} secondText={item.secondName} price={item.price} image={item.image} />
                            </div>
                          ))}
                        </div>
                      </div>
                          </div> :
                        selection == 'Drinks' ? <div>
                          <p className="sectionText"><span className="redLetter">D</span>rinks</p>
                            <div className="menu-container-main">
                           <div className="menu-container">
                                  {Drinks.map((item, index) => (
                                    <div key={index} className="menu-item">
                                      <ItemSquare firstText={item.firstName} secondText={item.secondName} price={item.price} image={item.image} />
                                    </div>
                                  ))}
                                </div>
                                </div>
                          </div> :
                          selection == 'Breakfast' ? <div>
                            <p className="sectionText"><span className="redLetter">B</span>reakfast</p>
                            
                                 <div className="menu-container-main">
                           <div className="menu-container">
                                  {Breakfast.map((item, index) => (
                                    <div key={index} className="menu-item">
                                      <ItemSquare firstText={item.firstName} secondText={item.secondName} price={item.price} image={item.image} />
                                    </div>
                                  ))}
                                </div>
                                </div>
                            </div> :
                            selection == 'Tobaco' ? <div>
                              <p className="sectionText"><span className="redLetter">T</span>obaco</p>
                              <div className="menu-container-main">
                                <div className="menu-container">
                                  {Tobacco.map((item, index) => (
                                    <div key={index} className="menu-item">
                                      <ItemSquare firstText={item.firstName} secondText={item.secondName} price={item.price} image={item.image} />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div> :
                              selection == 'Sandwiches' ? <div><p className="sectionText"><span className="redLetter">S</span>andwiches</p>
                              
                                                         <div className="menu-container-main">
                           <div className="menu-container">
                                  {Sandwiches.map((item, index) => (
                                    <div key={index} className="menu-item">
                                      <ItemSquare firstText={item.firstName} secondText={item.secondName} price={item.price} image={item.image} />
                                    </div>
                                  ))}
                                </div>
                                </div>
                              
                              </div> :
                                selection == 'Bel Makle' ? <div><p className="sectionText"><span className="redLetter">B</span>el <span className="redLetter">M</span>akle</p></div>

                                  : null
            }


          </div> :
          selected == 'Story' ?
            <div>
              <div>
                <p className="sectionText"><span className="redLetter">O</span>ur <span className="redLetter">S</span>tory</p>
              </div>
              <div className="mainStoryDiv">
                <div className='pictureStoryDiv'>
                  <img src={OldPicture} className="oldPictureImg" />
                </div>
                <div className="textStoryDiv">
                  <p className="innerParag">Since 1950, Karam has been more than a restaurant; it has been a sanctuary for traditional Lebanese cuisine, built on our family's vision to share our rich heritage with the world.</p>
                </div>
              </div>
              <div className="secondStoryDiv">
                <div className="miniDiv">
                  <img src={Ambiance} className="ambianceImageDiv" />
                  <p className="innerText">AUTHENTIC AMBIANCE</p>
                  <p className="innerParag">Immerse yourself in our beautifully restored dining spaces and the restaurant.</p>
                </div>
                <div className="miniDiv">
                  <img src={Ambiance2} className="ambianceImageDiv" />
                  <p className="innerText">GASTRONOMIC HERITAGE</p>
                  <p className="innerParag">Experience our delicious crafted dishes, authentically rooted in tradition and thoughtfully prepared with a modern touch. </p>
                </div>
              </div>
            </div>
            : selected == 'Reservations' ?
              <div>
                <p className="sectionText"><span className="redLetter">M</span>ake a reservation</p>
                <div className='reservationDiv'>

                  <div className="innerReservationDiv">
                    <div><p>Whatsapp Reservation</p></div>
                    <div className='innerLogoDiv'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" viewBox="0 0 175.216 175.552">
                        <defs>
                          <linearGradient id="b" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#57d163" />
                            <stop offset="1" stop-color="#23b33a" />
                          </linearGradient>
                          <filter id="a" width="1.115" height="1.114" x="-.057" y="-.057" color-interpolation-filters="sRGB">
                            <feGaussianBlur stdDeviation="3.531" />
                          </filter>
                        </defs>
                        <path fill="#b3b3b3" d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0" filter="url(#a)" />
                        <path fill="#fff" d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z" />
                        <path fill="url(#linearGradient1780)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z" />
                        <path fill="url(#b)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z" />
                        <path fill="#fff" fill-rule="evenodd" d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647" />
                      </svg>
                    </div>
                    <button className="buttonDiv" onClick={() =>
                      window.open(
                        `https://wa.me/96171960554`)}>Open Whatsapp Chat</button>
                  </div>
                  <div className='innerReservationDiv'>
                    <div><p>Phone Call Reservation</p></div>
                    <div className="innerLogoDiv">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        width="40"
                        height="40"
                        fill="#8B1E1E"
                      >
                        <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 131.5 204.7l60.6-49.6a24 24 0 0 0 6.9-28l-48-112A24 24 0 0 0 124.3 0H24A24 24 0 0 0 0 24C0 293.1 218.9 512 488 512a24 24 0 0 0 24-24V387.7a24 24 0 0 0-14.61-25.9z" />
                      </svg>
                    </div>
                    <button className="buttonDiv" onClick={() => window.location.href = `tel:${71960554}`}>Call Now</button>
                  </div>
                </div>
              </div>
              :
              null}
      </main>
      <div style={{ width: '100%', height: '20px' }}></div>
      <Footer />

    </div>
  )
}

export default App
