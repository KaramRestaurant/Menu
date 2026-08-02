import React from "react"
import './Footer.css'
import Instagram from './assets/Instagram.svg'
import Facebook from './assets/Facebook.svg'
import TikTok from './assets/TikTok.svg'
import Phone from './assets/Phone.svg'

function Footer() {
    return (
        <footer className="footer">
            <a className="footer-location" href="https://maps.app.goo.gl/JgK5P5vGBHCTbugk7?g_st=iw">
                <p>📍 Location</p>
                <p>Hotel_Restaurant Karam,<br/> Bazoun</p>
            </a>

            <div className="footer-left">
                <a className="instagram" href="https://www.instagram.com/karamrestaurant.lb?igsh=OHFyejVsOXpxeWlw">
                    <img src={Instagram} alt="Instagram" className="instagram-icon" />
                    <span>Instagram</span>
                </a>
                <a className="instagram" href="https://www.tiktok.com/@karamrestaurant.lb?_r=1&_t=ZS-98XyyNuJXMq">
                    <img src={TikTok} alt="tiktok" className="instagram-icon" />
                    <span>TikTok</span>
                </a>
                <a className="instagram" href="https://wa.me/96171123456">
                    <img src={Phone} alt="phone" className="instagram-icon" />
                    <span>71 960 554</span>
                </a>
            </div>
        </footer>
    )
}
export default Footer;