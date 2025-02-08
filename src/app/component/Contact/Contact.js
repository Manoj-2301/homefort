import Image from 'next/image'
import React from 'react'
import "./contactStyle.scss"

const Contact = () => {
    return (
        <div className='contact'>
            <div className='animation'>
                <div className='animation_width' >
                    <div className='animation_logo'>
                        <div>
                            <Image
                                src="/navLogo.png"
                                width={200}
                                height={200}
                                alt='h' />
                        </div>
                        <p className='animation_para'>Get In Touch</p>
                    </div>
                    <div className='animation_logo animi'>
                        <div>
                            <Image
                                src="/navLogo.png"
                                width={200}
                                height={200}
                                alt='h' />
                        </div>
                        <p className='animation_para'>Get In Touch</p>
                        
                    </div>
                    <div className='animation_logo animator'>
                        <div>
                            <Image
                                src="/navLogo.png"
                                width={200}
                                height={200}
                                alt='h' />
                        </div>
                        <p className='animation_para'>Get In Touch</p>
                    </div>
                </div>
            </div>
            <div className='contact_form'>
                <div className='contact_card'>
                    <p className='contact_para'>Contact us today if you’d like to know more about how we help buy, sell or rent your home</p>
                    <div>
                        <form className='form'>
                            <div className='form_info'>
                                <div className='form_info_name'>
                                    <input type='text' placeholder='Jane smith' />
                                    <input type='text' placeholder='email' />

                                </div>
                                <div>
                                    <textarea type="message" placeholder='Hello Jane' />
                                </div>
                            </div>
                            <div className='form_btn'>
                                <button className='form_btn_primary'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact