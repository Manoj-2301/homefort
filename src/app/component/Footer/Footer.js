import React from 'react'
import "./footerStyle.scss"
import { RiFacebookCircleLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import Image from 'next/image';


const Footer = () => {
    return (
        <div className='footer_main'>
            <div className='footer_body'>
                <div className='footer_left'>
                    <div className='footer_item'>
                        <div className='footer_icon'>
                            <FaInstagram />
                            <MdOutlineEmail />
                            <RiFacebookCircleLine />
                            <BsTelephone />
                        </div>
                        <p>HomFort</p>
                        <p>264 Brixton New Avenue.<br />
                            Kanas,KS 83902
                        </p>
                    </div>
                    <div className='footer_item'>
                        <p className='footerHeading'>CATEGORIES</p>
                        <p>Latest Properties</p>
                        <p>Featured Properties</p>
                        <p>Agent</p>
                    </div>
                    <div className='footer_item'>
                        <p className='footerHeading'>MORE</p>
                        <p>Search Properties</p>
                        <p>All Listing</p>
                    </div>
                    <div className='footer_item'>
                        <p className='footerHeading'>ACCOUNT</p>
                        <p>Log in</p>
                        <p>Sign up</p>
                    </div>
                </div>
                <div>
                    <button className='book_now'>Book A Call</button>
                </div>
            </div>
            <div className='last_footer'>
                <div className='privcy'>
                    <p>Privacy policy</p>
                    <p>Terms of Service</p>
                    <p>Template for task ❤️</p>
                </div>
                <div>
                    <p>Copyright © 2025 Homfort. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer