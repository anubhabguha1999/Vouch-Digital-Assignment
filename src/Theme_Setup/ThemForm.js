import Form from 'react-bootstrap/Form';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import AddClintNav from '../Component/AddClintNav'
import './style.css'

const ThemForm = () => {
    const [Color, SetColor] = useState('#153AC7')
    const [ContAct, SetContAct] = useState({
        add: false,
        pay: false,
        them: true,
        Modul: false,
    })
    const ColorChnage = (event) => {
        SetColor(event.target.value)
    }
    return (
        <div className="contect-view">
            <div className="veiw-container">
                <AddClintNav ContAct={ContAct} />
                <div className="create-form">
                    <div className="cr_heading">
                        Theme Setup
                    </div>
                    <div className="cr_para">
                        Add information about the client to give them a personalized experience.
                    </div>
                    <form className='profile_Add_from'>
                        <div className="form_input_container">
                            <fieldset className=" fieldset ful">
                                <legend><span>Personalia</span></legend>
                                <div className="checkColor" style={{ 'background': Color }}></div>
                                <input type="text" value={Color} placeholder='color : #153AC7' onChange={ColorChnage} />
                                <div className="check_icon">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.33301 4.66667H8.66634V6H7.33301V4.66667ZM7.33301 7.33334H8.66634V11.3333H7.33301V7.33334ZM7.99967 1.33334C4.31967 1.33334 1.33301 4.32 1.33301 8C1.33301 11.68 4.31967 14.6667 7.99967 14.6667C11.6797 14.6667 14.6663 11.68 14.6663 8C14.6663 4.32 11.6797 1.33334 7.99967 1.33334ZM7.99967 13.3333C5.05967 13.3333 2.66634 10.94 2.66634 8C2.66634 5.06 5.05967 2.66667 7.99967 2.66667C10.9397 2.66667 13.333 5.06 13.333 8C13.333 10.94 10.9397 13.3333 7.99967 13.3333Z" fill="#B8BABC" />
                                    </svg>
                                </div>
                            </fieldset>
                        </div>

                        <div className="color_title">
                            Add Hex Value.
                        </div>
                        <div className="form_input_container">
                            <div className="them_t">Login Theme</div>
                            <div className="them_d">Select the look and feel of the login page.</div>
                        </div>

                        <div className="form_input_container">
                            <div className="them_b">
                                <input type="checkbox" id='use_color' className='use_color' />
                                <label htmlFor="use_color">
                                    <div className="lbl_d"><span></span></div>
                                    <span> Use Color</span>
                                </label>
                            </div>
                            <div className="color_list">
                                <div className="input-contailer ful posi-rel">
                                    <div className="them_b-v">
                                        <input type="checkbox" id='use_color1' className='use_color' />
                                        <label htmlFor="use_color1">
                                            <div className="lbl_d"><span></span></div>
                                        </label>
                                    </div>
                                    <input type="text" value={Color} placeholder='#153AC7' disabled onChange={ColorChnage} />
                                    <div className="check_icon">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.33301 4.66667H8.66634V6H7.33301V4.66667ZM7.33301 7.33334H8.66634V11.3333H7.33301V7.33334ZM7.99967 1.33334C4.31967 1.33334 1.33301 4.32 1.33301 8C1.33301 11.68 4.31967 14.6667 7.99967 14.6667C11.6797 14.6667 14.6663 11.68 14.6663 8C14.6663 4.32 11.6797 1.33334 7.99967 1.33334ZM7.99967 13.3333C5.05967 13.3333 2.66634 10.94 2.66634 8C2.66634 5.06 5.05967 2.66667 7.99967 2.66667C10.9397 2.66667 13.333 5.06 13.333 8C13.333 10.94 10.9397 13.3333 7.99967 13.3333Z" fill="#B8BABC" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form_input_container">
                            <div className="them_layout">
                                <div className="them_heading">
                                    Where Should be the login modal?
                                </div>
                                <div className="div_layout">
                                    <div className="lay-cont">
                                        <div className="box-out lt">
                                            <span style={{ 'background': Color }}></span>
                                        </div>
                                        <div className="input-radio">
                                            <Form.Check type="radio" name='color' id='cl1' />
                                            <label htmlFor="cl1" >Left</label>
                                        </div>
                                    </div>

                                    <div className="lay-cont">
                                        <div className="box-out rt">
                                            <span style={{ 'background': Color }}></span>
                                        </div>
                                        <div className="input-radio">
                                            <Form.Check type="radio" name='color' id='cl2' />
                                            <label htmlFor="cl2">Center</label>
                                        </div>
                                    </div>

                                    <div className="lay-cont">
                                        <div className="box-out md">
                                            <span style={{ 'background': Color }}></span>
                                        </div>
                                        <div className="input-radio">
                                            <Form.Check type="radio" name='color' id='cl3' />
                                            <label htmlFor="cl3">Right</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="form_input_container">
                            <div className="form-btn-section">
                                <NavLink to='/Modules_Setup'>
                                    <button className='form-save-btn form-btn btn-flex' type='button'>
                                        <span className="text">Save & Continue</span>
                                        <span className="icon">
                                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.735818 11.765C1.04917 12.0783 1.55436 12.0783 1.86771 11.765L7.18186 6.45084C7.43126 6.20144 7.43126 5.79856 7.18186 5.54916L1.86771 0.235012C1.55436 -0.0783373 1.04917 -0.0783373 0.735818 0.235012C0.422468 0.548361 0.422468 1.05356 0.735818 1.36691L5.36571 6.0032L0.729423 10.6395C0.422468 10.9464 0.422468 11.458 0.735818 11.765Z" fill="white" />
                                            </svg>
                                        </span>
                                    </button>
                                </NavLink>
                                <button className='form-clear-btn form-btn' type='button'>
                                    <span className="icon">
                                        <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.93027 2.04675V0.311866C4.93027 0.0320453 4.59449 -0.104756 4.40172 0.0942276L2.0388 2.45094C1.91443 2.5753 1.91443 2.76807 2.0388 2.89243L4.3955 5.24914C4.59449 5.4419 4.93027 5.3051 4.93027 5.02528V3.2904C7.24967 3.2904 9.08405 5.41703 8.57415 7.82349C8.2819 9.23503 7.13774 10.373 5.73242 10.6652C3.51252 11.1316 1.53512 9.60812 1.23664 7.54988C1.19312 7.25141 0.93195 7.02134 0.627257 7.02134C0.254163 7.02134 -0.0443118 7.3509 0.00543407 7.724C0.390964 10.4538 2.99018 12.4747 5.93141 11.9026C7.87149 11.5233 9.43227 9.96256 9.81158 8.02247C10.4272 4.83252 8.00208 2.04675 4.93027 2.04675Z" fill="#686687" />
                                        </svg>
                                    </span>
                                    <span className="text">Reset</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ThemForm