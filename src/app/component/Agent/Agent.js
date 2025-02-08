'use client'

import Image from 'next/image'
import {useState}  from 'react'
import "./agentStyle.scss"
import Overlay from "../ModalComponent/modal"

const Agent = () => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const handleAgentClick = () => {
        setIsOverlayOpen(true);
    };
    
    return (
        <div>
            <div className='agent'>
                <div className='agent_info_heading'>
                    <p className='agent_heading'>Our <span className='agent_color'>Agents</span></p>
                    <p>Explore the world-class agents.</p>
                </div>
                <div className='agents_card'>
                    <div className='our_agent' onClick={handleAgentClick}>
                        <div className='agent_img'>
                            <Image
                                src="/agent1.avif"
                                fill
                                sizes='100vw'
                                alt='alt'
                            />
                        </div>
                        <div className='agent_info'>
                            <div>
                                <p className='agent_name'>Ford Clinton</p>
                                <p>Listing Agent</p>
                            </div>
                            <div>
                                <p>3 listing</p>
                            </div>
                        </div>
                    </div>
                    <div className='our_agent' onClick={handleAgentClick}>
                        <div className='agent_img'>
                            <Image
                                src="/agent2.avif"
                                fill
                                sizes='100vw'
                                alt='alt'
                            />
                        </div>
                        <div className='agent_info'>
                            <div>
                                <p className='agent_name'>Hassan Patrick</p>
                                <p>Sales Person</p>
                            </div>
                            <div>
                                <p>2 listing</p>
                            </div>
                        </div>
                    </div>
                    <div className='our_agent' onClick={handleAgentClick}>
                        <div className='agent_img'>
                            <Image
                                src="/agent3.avif"
                                fill
                                sizes='100vw'
                                alt='alt'
                            />
                        </div>
                        <div className='agent_info'>
                            <div>
                                <p className='agent_name'>Mike Rutter</p>
                                <p>Commercial Broker</p>
                            </div>
                            <div>
                                <p>2 listing</p>
                            </div>
                        </div>
                    </div>
                    <div className='our_agent' onClick={handleAgentClick}>
                        <div className='agent_img'>
                            <Image
                                src="/agent4.avif"
                                fill
                                sizes='100vw'
                                alt='alt'
                            />
                        </div>
                        <div className='agent_info'>
                            <div>
                                <p className='agent_name'>Chloe Waterwood</p>
                                <p>Realtor</p>
                            </div>
                            <div>
                                <p>2 listing</p>
                            </div>
                        </div>
                    </div>
                    <div className='our_agent' onClick={handleAgentClick}>
                        <div className='agent_img'>
                            <Image
                                src="/agent5.avif"
                                fill
                                sizes='100vw'
                                alt='alt'
                            />
                        </div>
                        <div className='agent_info'>
                            <div>
                                <p className='agent_name'>jessy king</p>
                                <p>Commercial Broker</p>
                            </div>
                            <div>
                                <p>3 listing</p>
                            </div>
                        </div>
                    </div>
                    <div className='signup_card'>
                        <div className='dotted_boder'>
                            <div className='signup_info'>
                                <p>homfort</p>
                            </div>
                            <div className='signup_agent_info'>
                                <p>Our agent are available to help with your property search and give your enquiries on the best offers.</p>
                                <button className='btn_agent'>Sign up</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='get_through_info'>
                    <div className='get_through_para'>
                        <p>There is always something new! Don’t miss out.</p>
                        <p className='get_through_para_two'>Get property updates and the latest on pricing for your next property decision.</p>
                    </div>
                    <div className='get_through_input'>
                        <form className='get_through_input'>
                            <input type='email' placeholder='Enter your Email' />
                            <button className='btn_sub'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            {isOverlayOpen && <Overlay />}

        </div>
    )
}

export default Agent