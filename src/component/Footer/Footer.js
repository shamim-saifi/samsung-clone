import React, { Fragment } from "react";
import "./Footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useState } from "react";


const Footer = () => {

    const [value1, setvalue1] = useState(true)
    const showFoot1 = (index) => {
        setvalue1(index);
    }

    const [value2, setvalue2] = useState(true)
    const showFoot2 = (index) => {
        setvalue2(index);
    }

    const [value3, setvalue3] = useState(true)
    const showFoot3 = (index) => {
        setvalue3(index);
    }

    const [value4, setvalue4] = useState(true)
    const showFoot4 = (index) => {
        setvalue4(index);
    }

    const [value5, setvalue5] = useState(true)
    const showFoot5 = (index) => {
        setvalue5(index);
    }
    return (
        <Fragment>
            <div id="foot">
                <div className="col1">
                    <p onClick={() => showFoot1(!value1)}>Product & Service {value1 ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}</p>

                    {
                        value1 ?
                            <>
                                <a href="#">SmartPhone</a>
                                <a href="#">Tablets</a>
                                <a href="#">Audio Sound</a>
                                <a href="#">Watches</a>
                                <a href="#">Smart Swithc</a>
                                <a href="#">Mobile Accessories</a>
                                <a href="#">TVs</a>
                                <a href="#">Sound Devices</a>
                                <a href="#">Refrigerators</a>
                                <a href="#">Laundry</a>
                                <a href="#">Air solutions</a>
                                <a href="#">Cooking Appliances</a>
                                <a href="#">Moniters</a>
                                <a href="#">Meory Storage</a>
                            </>
                            : null
                    }





                </div>
                <div className="col2">
                    <p onClick={() => showFoot2(!value2)} >Shop {value2 ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />} </p>
                    {
                        value2 ?
                            <>
                                <a href="#">Cancellation & Return Policy</a>
                                <a href="#">Track Order Status</a>
                                <a href="#">Welcome Voucher</a>
                                <a href="#">Samsung Referral Advantage</a>
                                <a href="#">Samsung Student Advantage</a>
                                <a href="#">Defence Purchase Program</a>
                                <a href="#">Corporate Employee Program</a>
                                <a href="#">Corporate Bulk Purchase</a>
                                <a href="#">Samsung Experience Store</a>
                                <a href="#">Store Locator</a>
                                <a href="#">Smart Club</a>
                                <a href="#">FAQs</a>
                                <a href="#">Terms of Use</a>
                                <a href="#">Grievance Redressal</a>
                                <a href="#">Explore</a>

                            </>
                            : null
                    }

                </div>
                <div className="col3">

                    <p onClick={() => showFoot3(!value3)} > Support {value3 ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}</p>
                    {
                        value3 ?
                            <>
                                <a href="#">WhatsApp Us हिंदी/ English </a>
                                <a href="#">Sign Language </a>
                                <a href="#">Email Us</a>
                                <a href="#">Call Us</a>
                                <a href="#">Email the CEO</a>
                                <a href="#">Community </a>
                                <a href="#">Product Registration</a>
                                <a href="#">Service Centre</a>
                                <a href="#">Share Your Opinion </a>
                            </>
                            : null
                    }


                </div>
                <div className="col4">
                    <p onClick={() => showFoot4(!value4)} >Account & Community {value4 ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}</p>
                    {
                        value4 ?
                            <>
                                <a href="#">My Page</a>
                                <a href="#">My Products</a>
                                <a href="#">Orders</a>
                                <a href="#">Wishlist</a>
                                <a href="#">Vouchers</a>
                                <a href="#">My Referrals</a>
                                <a href="#">Service</a>
                                <a href="#">Community</a>

                            </>
                            : null
                    }

                </div>
                <div className="col5">
                    <p onClick={() => showFoot5(!value5)}>  About Us {value5 ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}</p>
                    {
                        value5 ?
                            <>
                                <a href="#">Company Info</a>
                                <a href="#">Business Area</a>
                                <a href="#">Brand Identity</a>
                                <a href="#">Careers</a>
                                <a href="#">Investor Relations </a>
                                <a href="#">Newsroom </a>
                                <a href="#">Ethics</a>
                                <a href="#">Samsung Design</a>
                                <a href="#">Environment</a>
                                <a href="#">Security & Privacy</a>
                                <a href="#">Accessibility</a>
                                <a href="#">Diversity · Equity · Inclusion</a>
                                <a href="#">Corporate Citizenship</a>
                                <a href="#">Corporate Sustainability </a>
                            </>
                            : null
                    }

                </div>

            </div>

            <div id="foot-2">
                <p>Created By Shamim Saifi</p>
                <p>Copyright ⓒ 1995-2023 SAMSUNG All Rights reserved.</p>

                <p>Please dispose of e-waste and plastic waste responsibly.<br />
                    For more information or e-waste pick up, please call 1800 5 7267864 or click here for more details.</p>

                <p>Registered Office Address: 6th Floor, DLF Centre, Sansad Marg, New Delhi-110001 <br />
                    Corporate Identification Number (CIN): U31900DL1995PTC071387</p>
            </div>

            <div id="foot-3">
                <div className="left-foot-3">
                    <a href="#">India/English</a>
                    <a href="#">Privacy</a>
                    <a href="#">Legal</a>
                    <a href="#">CSR Policy</a>
                    <a href="#">Sitemap</a>
                </div>
                <div className="right-foot-3">
                    <span>Stay in the Loop?</span>
                    <div>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><IoLogoWhatsapp /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaYoutube /></a>
                        <a href="#"><FaLinkedin /></a>
                    </div>
                </div>
            </div>
            <script>


            </script>

        </Fragment>

    )
}

export default Footer;