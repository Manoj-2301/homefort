import React from 'react'
import Navbar from '../component/navbar'
import Image from 'next/image'
import "./homeStyle.scss"
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";


const page = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className='main_home'>
          <div className='home_heading'>
            <p className='home_img_para'>Find the <span className='home_color1'> perfect</span>
              <Image
                src="/Logomini.avif"
                width={100}
                height={60}
              /></p>
            <p > <span className='home_color'>property</span> with Homfort</p>
          </div>
          <div className='home_subpara'>
            <p>We believe there's a perfect home for everybody, no matter the budget. <br />That's why we always find the best homes for your budget.</p>
          </div>
          <div className='home_card'>
            <div className='home_img_card'>
              <Image
                src="/cardImg.avif"
                fill
                sizes='100vw'
                alt=''
              />
            </div>
            <div className='home_carsoule'>
              <div className='testinomial_card'>
                <div className='testi_person'>
                  <div className='image_person'>
                    <Image
                    src="/person.avif"
                    fill
                    sizes='100vw'
                     alt=''
                   />
                  </div>
                  <div>
                    <p>Charlie Puth</p>
                    <p>Houston, USA</p>
                  </div>
                </div>
                <div className='testi_para'>
                  <p>This agency transformed our home search into a stress-free journey. Their expertise and efficiency are unmatched. I highly recommend their services!</p>
                </div>
                <div className='social_icon'>
                  <FaInstagram />
                  <CiFacebook />
                </div>
              </div>
              {/* card 2 */}
              <div className='testinomial_card'>
                <div className='testi_person'>
                  <div className='image_person'>
                  <Image
                    src="/person2.avif"
                    fill
                    sizes='100vw'
                    alt=''
                   />
                  </div>
                  <div>
                    <p>Jeyon Kim</p>
                    <p>Seoul, Korea</p>
                  </div>
                </div>
                <div className='testi_para'>
                  <p>This agency transformed our home search into a stress-free journey. Their expertise and efficiency are unmatched. I highly recommend their services!</p>
                </div>
                <div className='social_icon'>
                  <FaInstagram />
                  <CiFacebook />
                </div>
              </div>
              {/* card 3 */}
              {/* <div className='testinomial_card'>
                <div className='testi_person'>
                  <div>
                    image
                  </div>
                  <div>
                    <p>Arjun Kumath</p>
                    <p>Hyderabad Telangana</p>
                  </div>
                </div>
                <div className='testi_para'>
                  <p>This agency transformed our home search into a stress-free journey. Their expertise and efficiency are unmatched. I highly recommend their services!</p>
                </div>
                <div className='social_icon'>
                  <FaInstagram />
                  <CiFacebook />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page