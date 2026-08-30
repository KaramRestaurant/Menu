import { useRef, useState } from "react";
import "./FoodMenu.css";

const sections = [
  "Breakfast",
  "Sandwiches",
  "Cold Mezza",
  "Hot Mezza",
  "Salads",
  "Bel Makle",
  "Kebab 2ras",
  "Mashewe",
  "Dessert",
  "Drinks",
  "Tobaco",
];

export default function FoodMenu(props) {
  const [activeSection, setActiveSection] = useState("Cold Mezza");
  const menuRef = useRef(null);

  function selectSection(section, event) {
    setActiveSection(section);
    console.log("inside menu: "+section)
props.activeSelection(section)
    event.currentTarget.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <section className="food-menu">
      <div className="menu-heading">
        <p>Explore our flavors</p>
        <h2>Our Menu</h2>
      </div>

      <nav ref={menuRef} className="category-scroll" aria-label="Food categories">
        {sections.map((section) => (
          <button
            key={section}
            className={`category-button ${
              activeSection === section ? "is-active" : ""
            }`}
            onClick={(event) => selectSection(section, event)}
          >
            <span>{section}</span>
          </button>
        ))}
      </nav>
    </section>
  );
}