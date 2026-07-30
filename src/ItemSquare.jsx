import React from "react";
import Fatte from './assets/Fatte.jpeg'
import './ItemSquare.css'

function ItemSquare() {
    return (
        <div className="mainSquareItemDiv">
            <div>
                <img src={Fatte} alt={Fatte} className="itemImgSquare" />
            </div>
            <div className="textItemsDiv">
                <div>
                    <p className="textStyleMainTitle">Hummus Karam</p>
                    <p className="textStyleSecondTitle">حمص كرم</p>
                    <p className="textStylePrice">450 000 LBP</p>
                </div>

            </div>
        </div>
    )
}
export default ItemSquare;