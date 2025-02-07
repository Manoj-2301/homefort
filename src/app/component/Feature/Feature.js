import React from 'react'
import "./featureStyle.scss"
import Image from 'next/image'
import {  MdOutlineLocationOn } from "react-icons/md";
import { RiGalleryLine } from "react-icons/ri";

const Feature = () => {
    return (
        <div className='feature_bg'>
            <div className='Feature'>
                <div className='feature_sentence'>
                    <p className='feature_heading'>Featured Properties</p>
                    <p className='feature_sub_para'>Explore highlighted properties.</p>
                </div>
                <div className='feature_home'>
                    <div className='img_feature'>
                        <Image 
                        src="/building3.avif"
                        fill
                        sizes=''                        
                        alt='alt'/>
                        <div className='inner_sub_headings'>
                            <p className='inner_heading'>Suburb Home</p>
                            <div className='inner_place'>
                                <p  className='inner_icon'> <MdOutlineLocationOn />Pleasantville</p> .
                                <p  className='inner_icon'> <RiGalleryLine />04</p>
                            </div>
                        </div>
                    </div>
                    <div className='img_feature'>
                        <Image 
                        src="/building4.avif"
                        fill
                        sizes=''                        
                        alt='alt'/>
                        <div className='inner_sub_headings'>
                            <p className='inner_heading'>Suburb Home</p>
                            <div className='inner_place'>
                                <p  className='inner_icon'> <MdOutlineLocationOn />Pleasantville</p> .
                                <p  className='inner_icon'> <RiGalleryLine />04</p>
                            </div>
                        </div>
                    </div>
                    <div className='img_feature'>
                        <Image 
                        src="/building5.avif"
                        fill
                        sizes=''                        
                        alt='alt'/>
                        <div className='inner_sub_headings'>
                            <p className='inner_heading'>Luxury House</p>
                            <div className='inner_place'>
                                <p  className='inner_icon'><MdOutlineLocationOn />Catskills</p> .
                                <p  className='inner_icon'> <RiGalleryLine />04</p>
                            </div>
                        </div>
                    </div>
                    <div className='img_feature'>
                        <Image 
                        src="/building6.avif"
                        fill
                        sizes=''                        
                        alt='alt'/>
                        <div className='inner_sub_headings'>
                            <p className='inner_heading'>Gorgeous Villa for Rent</p>
                            <div className='inner_place'>
                                <p className='inner_icon'> <MdOutlineLocationOn />Jercey City</p> .
                                <p  className='inner_icon'> <RiGalleryLine />04</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature