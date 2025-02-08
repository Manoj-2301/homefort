import React from 'react'
import "./modalStyle.scss"

const modal = () => {
    return (
        <div className='modalbox'>
            <div className='modal_container'>
                <div className='modal_para'>
                    <p>Homfort</p>
                </div>
                <div className='modal_para_one'>
                    Select any option to Continue
                </div>
                <div className='sign_modal'>
                    <div className='modal_btn'>
                        <button className='btn_pri'>Sign up</button>
                        <button className='btn_sec'>Login up</button>
                    </div>
                    <hr />
                    <div>
                        <button className='guest'>Continue as guest</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default modal