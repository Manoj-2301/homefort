import React from 'react'
import "./getStyle.scss"
import Image from 'next/image'

const Getmore = () => {
    return (
        <div className='bg'>
            <div className='get_info'>
                <div className='get_info_heading'>
                    <p className='get_info_head'>Get more out of homfort</p>
                    <p>Explore easier ways to search for properties.</p>
                    <div className='btn'>
                        <button className='btn_first'>Log-in</button>
                        <button className='btn_second'>Sign-up</button>
                    </div>
                </div>
                <div className='get_info_img'>
                    <div className='img_get'>
                        <Image
                            src="/info.avif"
                            fill
                            sizes=''
                            alt='alt'
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Getmore