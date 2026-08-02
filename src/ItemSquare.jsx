import React from "react";
import Fatte from './assets/Fatte.jpeg'
import './ItemSquare.css'
import ImageNotFound from './assets/ImageNotFound.png'

function ItemSquare(props) {
    return (
        <div className="mainSquareItemDiv">
            <div>
                <img src={props.image==undefined||props.image==null?ImageNotFound:props.image} alt={Fatte} className="itemImgSquare" />
            </div>
            <div className="textItemsDiv">
                <div>
                    <p className="textStyleMainTitle">{props.firstText}</p>
                    <p className="textStyleSecondTitle">{props.secondText}</p>
                    <p className="textStylePrice">{props.price}</p>
                </div>

            </div>
        </div>
    )
}
export default ItemSquare;