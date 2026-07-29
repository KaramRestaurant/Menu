import React from "react";
import './App.css'

function Divider() {
    return (
        <div className="divider">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 40"  width="100%">
                <line x1="0" y1="20" x2="410" y2="20" stroke="#8B1E1E" strokeWidth="1.5" />

                <g fill="none" stroke="#8B1E1E" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M 410 20 Q 430 20 435 10 Q 438 2 430 5 Q 424 8 428 14 Q 433 20 445 15 Q 455 10 450 2 Q 445 -2 440 5" />
                    <path d="M 425 20 Q 428 25 435 23" />
                </g>
                <circle cx="438" cy="23" r="2" fill="#8B1E1E" />
                <circle cx="448" cy="7" r="1.5" fill="#8B1E1E" />
            </svg>
        </div>
    )
}
export default Divider;