import React from "react";
import './Item.css'
import Fatte from './assets/Fatte.jpeg'
function Item() {
    return (
        <div className="itemDiv">
            <div>
                <img src={Fatte} alt="fatte" className="itemImg" />
            </div>
            <div className="text-title-item">
                <div className="menu-item-text">
                    <h3 className="menu-item-title">Hummus Karam</h3>
                    <p className="menu-item-description">Tahini, olive oil and sumac yay yay.</p>
                </div>
                <span className="menu-item-price">$6</span>
            </div>
        </div>
    )
}
export default Item;