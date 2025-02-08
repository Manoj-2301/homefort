"use client"
import {useState} from 'react'
import './listingStyle.scss'
import Image from 'next/image'
import { MdOutlineBathtub, MdOutlineBed, MdOutlineLocationOn } from "react-icons/md";
import { RiGalleryLine } from "react-icons/ri";
import { BsBookmarkDash } from "react-icons/bs";
import Overlay from "../ModalComponent/modal"



const Listing = () => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    
        const handleAgentClick = () => {
            setIsOverlayOpen(true);
        };
    const listings = [
        {
            title: "Luxury Loft",
            location: "Jersey City",
            type: ["Sale", "Industrial"],
            rooms: 1,
            bathrooms: 2,
            area_sqft: 600,
            price: 950000,
            image: "/building.avif"
        },
        {
            title: "Cozy Condo",
            location: "Catskills",
            type: ["Rent", "Houses"],
            rooms: "4+",
            bathrooms: "4+",
            area_sqft: 600,
            price: 466000,
            image: "/building2.avif"
        },
        {
            title: "Suburb Home",
            location: "Pleasantville",
            type: ["Sales", "Duplex"],
            rooms: 3,
            bathrooms: 3,
            area_sqft: 600,
            price: 950000,
            image: "/building3.avif"
          },
          {
              title: "Suburb Home",
              location: "Pleasantville",
              type: ["Rent", "Industrial"],
              rooms: 3,
              bathrooms: 3,
              area_sqft: 600,
              price: 1500,
              image: "/building4.avif"
            }
            ,
        {
            title: "Suburb Home",
            location: "Pleasantville",
            type: ["Lease", "Office"],
            rooms: 3,
            bathrooms: 3,
            area_sqft: 600,
            price: 980000,
            image: "/building5.avif"
          }
          ,
        {
            title: "Suburb Home",
            location: "Pleasantville",
            type: ["Sales", "Appartment"],
            rooms: 3,
            bathrooms: 3,
            area_sqft: 600,
            price: 550000,
            image: "/building6.avif"
          }
    ];
    return (
        <div className='listing'>
            <div className='listing_heading' >
                <p className='listing_main'>New Listing</p>
                <p className='listing_sub'>Explore latest & featured properties for sale.</p>
            </div>            
            <div className='listing_container'>
                {listings.map((listing, index) => (
                    <div className='listing_card' key={index} onClick={handleAgentClick}>
                        {/* Image Section */}
                        <div className='img_card'>
                            <Image src={listing.image} fill sizes='100vw' alt={listing.title} />
                            <div className='listing_sub_item'>
                                <div className='lisiting_sub'>
                                    {listing.type.map((type, i) => (
                                        <p className='list_sub_option' key={i}>{type}</p>
                                    ))}
                                </div>
                                <div className='list_sub_option'><BsBookmarkDash /></div>
                            </div>
                        </div>

                        {/* Listing Details */}
                        <div className='lisitng_list'>
                            <p className='lisitng_head'>{listing.title}</p>
                            <div className='listing_place'>
                                <div className='lisiting_place_list'>
                                    <MdOutlineLocationOn />
                                    <p>{listing.location}</p>
                                </div>
                                .
                                <div className='lisiting_place_list'>
                                    <RiGalleryLine />
                                    <p>04</p>
                                </div>
                            </div>
                            <p className='lisiting_info'>
                                Nestled in a charming suburban area, this stunning home rests on a spacious lot, offering..
                            </p>
                            <div className='availability_option'>
                                <div className='lisiting_option'>
                                    <MdOutlineBed />
                                    <p>{listing.rooms} Room{listing.rooms > 1 ? 's' : ''}</p>
                                </div>
                                <div className='lisiting_option'>
                                    <MdOutlineBathtub />
                                    <p>{listing.bathrooms} Bathroom{listing.bathrooms > 1 ? 's' : ''}</p>
                                </div>
                                <div className='lisiting_option'>
                                    <p>{listing.area_sqft} ft²</p>
                                </div>
                            </div>
                            <div className='lisitng_price'>
                                <p>${listing.price.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {isOverlayOpen && <Overlay/>}
        </div>
    )
}

export default Listing