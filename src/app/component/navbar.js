"use client"
import "./navStyle.scss";
import {useState, useEffect} from "react";
import Image from 'next/image'
import Link from "next/link";
const Navbar = () => {
    const [Scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    return (
        <div className={`nav ${Scrolled ? "scrolled" : ""}`}>
            <div className="nav_brand">
                <Image
                    src="/navLogo.png"
                    width={45}
                    height={45}
                    alt="Picture of the author"
                />
                homfort
            </div>
            <div className="nav_list">
                <Link href="/"><p>Properties</p></Link>
                <Link href="/" ><p>Search</p></Link>
                <Link href="/" ><p>Agent</p></Link>
            </div>
            <div className="btn">
                <button className="signUp_btn">Sign-up</button>
                <button className="login_btn">Log in</button>
            </div>
        </div>
    )
}

export default Navbar