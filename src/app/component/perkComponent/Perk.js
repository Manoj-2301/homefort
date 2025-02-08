import React from 'react'
import "./perkStyle.scss"
import Image from 'next/image'

const Perk = () => {
  return (
    <div className='Perk'>
      <div className='perk_container'>
        <div className='perk_para'>
          <p className='perk_para_main'>Perks with <span className='para_color'>Homfort</span></p>
          <p className='perk_para_sub'>Your trusted real estate partner in every transaction.</p>
        </div>
        <div className='perk_ad'>
          <div className='perk1'>
            <div>
              <Image src="/perk1.avif"
              width={150}
              height={150}
              alt='jj'

              />
            </div>
            <div className='perk_ad_para'>
              <p className='perk_para_ad_one'>BUY PROPERTIES</p>
              <p>Explore homforts’s 2 million+ homes tailored and <br/>uncover your ideal living space.</p>
            </div>
          </div>
          <div className='perk1'>
            <div>
              <Image src="/perk2.avif"
              width={150}
              height={150}
              alt='jj'
              />
            </div>
            <div className='perk_ad_para'>
              <p className='perk_para_ad_one'>RENT PROPERTIES</p>
              <p>Discover a rental you'll love on Homfort, thanks to 35+ <br/>filters and tailored keywords.</p>
            </div>
          </div>
          <div  className='perk1'>
            <div>
              <Image src="/perk3.avif"
              width={150}
              height={150}
              alt='jj'

              />
            </div>
            <div className='perk_ad_para'>
              <p className='perk_para_ad_one'>LEASE PROPERTIES</p>
              <p>List, sell, thrive – with our rental top-notch real estate <br/>agency. It’s super easy & fun.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Perk