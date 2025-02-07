import Image from 'next/image'
import React from 'react'
import './dreamStyle.scss'
const dream = () => {
    return (
        <div className='dream_main'>
            <div className='first_grid_dream'>
                <div className='first_para'>
                    <p>Explore & Find <br />your <span className='dream_color'>Dream  home</span></p>
                </div>
                <div className='dream_img'>
                    <Image src="/Dream.avif"
                        fill
                        sizes='100vw'
                        alt="alt img" />
                    <div className='first_grid_client'>
                        <div>
                            image
                        </div>
                        <p>200 + Happy client</p>
                    </div>
                </div>
            </div>
            <div className='video'>
                <video src="/dreamvideo.mp4" autoPlay muted loop />
            </div>
            <div className='dream_third_grid'>
                <p className='third_para'>“We believe there's a perfect home for everybody, no matter the budget. That's why we always find the best homes for your budget.”</p>
                <hr />
                <div className='dream_grid'>
                    <div className='sold_dream_ad'>
                        <p className='number'>$200M+</p>
                        <p>Sold in Real Estate</p>
                    </div>
                    <div className='sold_dream_ad'>
                        <p className='number'>100++</p>
                        <p>Property Sold</p>
                    </div>
                </div>
                <hr />
                <div>
                    <ul className='dream_list'>
                        <li> Over 100k+ property & update regularly</li>
                        <li> Expert agent consultation</li>
                        <li> Loan & low Interest facility</li>
                    </ul>
                    <button className='btn'>Browse Listing</button>
                </div>
            </div>
        </div>
    )
}

export default dream