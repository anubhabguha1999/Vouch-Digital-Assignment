import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function Modalview({ showbtn, handleClose, token, Ton }) {
    window.addEventListener('click', (event) => {
        if (event.target.className === 'Modal') {
            handleClose(true)
        }
    })
    const storeData = () => {
        localStorage.setItem('token', token);
        handleClose(true)
    }
    if (token !== '') {

    }
    return (
        <>
            <div className="Modal">
                <div className="massege-box">
                    <div className="success-mgs">
                        {Ton}
                    </div>
                    {
                        showbtn ?
                            <div className="token-mgs">
                                <span>Token</span> : {token}
                            </div>
                            : ''
                    }
                    <div className="log_button">
                        {
                            showbtn ? <NavLink to='/View_Clients' className='ok-btn'>
                                <button className="btn btn-primary " onClick={storeData}>Ok</button></NavLink>
                                : <button className="btn btn-primary login_btn" onClick={() => handleClose(true)}>Ok</button>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

const LoginAct = () => {
    const [showbtn, setShowbtn] = useState(false)
    const [token, setToken] = useState()
    const [Ton, setTon] = useState()
    const [Data, SetData] = useState({
        username: '',
        password: ''
    })

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showPwd, setShowPwd] = useState(false)
    const onChnHand = (event) => {
        const { value, name } = event.target;
        SetData({
            ...Data,
            [name]: value
        })
    }

    const submitData = async () => {

        const DataList = await fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data)
        })
        let userData = await DataList.json();
        if (userData.token !== '' && DataList.status === 200) {
            setToken(userData.token);
            setTon("Login Success......");
            handleShow();
            setShowbtn(true);
        } else if (DataList.status === 400) {
            setTon("Page Not Found.....");
            handleShow();
            setShowbtn(false);
        } else if (!userData.token) {
            setTon("User Not Exist, please try Again");
            handleShow();
            setShowbtn(false)
        }
    }
    return (
        <>
            <div className='LoginAct'>
                <div className="LoginAct-form">
                    <form className='form-act'>
                        <div className="form-top">
                            <div className='form-head'>Welcome</div>
                            <div className='form-cap'>Enter your Username and Passoword.</div>
                        </div>
                        <div className="input-fild">
                            <div className="input-icon">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.88201 8.06296C6.74926 8.06296 5.82104 7.70111 5.09735 6.97742C4.37365 6.25372 4.0118 5.3255 4.0118 4.19276C4.0118 3.04428 4.37365 2.10819 5.09735 1.3845C5.82104 0.660799 6.74926 0.29895 7.88201 0.29895C9.01475 0.29895 9.9469 0.660799 10.6785 1.3845C11.41 2.10819 11.7758 3.04428 11.7758 4.19276C11.7758 5.3255 11.41 6.25372 10.6785 6.97742C9.9469 7.70111 9.01475 8.06296 7.88201 8.06296ZM0 16.299V13.7267C0 13.0816 0.165192 12.5192 0.495575 12.0394C0.825959 11.5595 1.2586 11.1937 1.79351 10.942C2.86332 10.4543 3.89381 10.0925 4.88496 9.85647C5.87611 9.62048 6.87512 9.50249 7.88201 9.50249C8.90462 9.50249 9.90757 9.62442 10.8909 9.86827C11.8741 10.1121 12.8928 10.47 13.9469 10.942C14.4975 11.178 14.942 11.5359 15.2802 12.0158C15.6185 12.4956 15.7876 13.0659 15.7876 13.7267V16.299H0ZM1.86431 14.4346H13.8997V13.7739C13.8997 13.5379 13.825 13.3058 13.6755 13.0777C13.5261 12.8496 13.3412 12.6883 13.1209 12.5939C12.1455 12.122 11.2527 11.7994 10.4425 11.6264C9.63225 11.4533 8.77876 11.3668 7.88201 11.3668C7.00098 11.3668 6.13963 11.4533 5.29794 11.6264C4.45624 11.7994 3.56342 12.122 2.61947 12.5939C2.39921 12.6883 2.21829 12.8496 2.0767 13.0777C1.9351 13.3058 1.86431 13.5379 1.86431 13.7739V14.4346ZM7.88201 6.17506C8.46411 6.17506 8.94395 5.98627 9.32153 5.60869C9.69912 5.2311 9.88791 4.75913 9.88791 4.19276C9.88791 3.59492 9.69912 3.11114 9.32153 2.74143C8.94395 2.37171 8.46411 2.18686 7.88201 2.18686C7.2999 2.18686 6.82006 2.37171 6.44248 2.74143C6.0649 3.11114 5.87611 3.58705 5.87611 4.16916C5.87611 4.75126 6.0649 5.2311 6.44248 5.60869C6.82006 5.98627 7.2999 6.17506 7.88201 6.17506Z" fill="#B8BABC" />
                                </svg>
                            </div>
                            <div className="input-control">
                                <input type="text" className='data-input' onChange={onChnHand} value={Data.user} name="username" placeholder='Username Or Email ID' />
                            </div>
                        </div>
                        <div className="input-fild">
                            <div className="input-icon">
                                <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.18519 0.298935C7.19753 0.298935 8.05556 0.653873 8.75926 1.36375C9.46296 2.07363 9.81482 2.94091 9.81482 3.9656V5.50264H10.9074C11.3148 5.50264 11.6636 5.6477 11.9537 5.93782C12.2438 6.22795 12.3889 6.57671 12.3889 6.98412V14.836C12.3889 15.231 12.2438 15.5736 11.9537 15.8637C11.6636 16.1539 11.3148 16.2989 10.9074 16.2989H1.46296C1.05556 16.2989 0.709876 16.1539 0.425926 15.8637C0.141975 15.5736 0 15.231 0 14.836V6.98412C0 6.57671 0.141975 6.22795 0.425926 5.93782C0.709876 5.6477 1.05556 5.50264 1.46296 5.50264H2.55556V3.9656C2.55556 2.94091 2.90741 2.07363 3.61111 1.36375C4.31481 0.653873 5.17284 0.298935 6.18519 0.298935ZM6.18519 1.7619C5.58025 1.7619 5.0679 1.97486 4.64815 2.40079C4.2284 2.82671 4.01852 3.34832 4.01852 3.9656V5.50264H8.35185V3.9656C8.35185 3.34832 8.14198 2.82671 7.72222 2.40079C7.30247 1.97486 6.79012 1.7619 6.18519 1.7619ZM1.46296 14.836H10.9074V6.98412H1.46296V14.836ZM6.18519 9.48412C5.79012 9.48412 5.4537 9.63535 5.17593 9.93782C4.89815 10.2403 4.75926 10.5767 4.75926 10.9471C4.75926 11.3298 4.89815 11.657 5.17593 11.9286C5.4537 12.2002 5.79012 12.336 6.18519 12.336C6.58025 12.336 6.91667 12.2002 7.19444 11.9286C7.47222 11.657 7.61111 11.3298 7.61111 10.9471C7.61111 10.5767 7.47222 10.2403 7.19444 9.93782C6.91667 9.63535 6.58025 9.48412 6.18519 9.48412ZM1.46296 6.98412V14.836V6.98412Z" fill="#B8BABC" />
                                </svg>
                            </div>
                            <div className="input-control">
                                <input type={showPwd ? 'text' : 'password'} className='data-input' onChange={onChnHand} value={Data.password} name="password" placeholder='Password' />
                                <div className="show-pwd" onClick={() => setShowPwd(showPwd ? false : true)}>
                                    <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 9.64877C8.85094 9.64877 9.57303 9.35214 10.1663 8.75888C10.7596 8.16562 11.0562 7.44352 11.0562 6.59259C11.0562 5.74165 10.7596 5.01955 10.1663 4.4263C9.57303 3.83304 8.85094 3.53641 8 3.53641C7.14906 3.53641 6.42697 3.83304 5.83371 4.4263C5.24045 5.01955 4.94382 5.74165 4.94382 6.59259C4.94382 7.44352 5.24045 8.16562 5.83371 8.75888C6.42697 9.35214 7.14906 9.64877 8 9.64877ZM8 8.44427C7.48464 8.44427 7.04719 8.2645 6.68764 7.90495C6.32809 7.5454 6.14831 7.10794 6.14831 6.59259C6.14831 6.07723 6.32809 5.63978 6.68764 5.28023C7.04719 4.92068 7.48464 4.7409 8 4.7409C8.51536 4.7409 8.95281 4.92068 9.31236 5.28023C9.67191 5.63978 9.85169 6.07723 9.85169 6.59259C9.85169 7.10794 9.67191 7.5454 9.31236 7.90495C8.95281 8.2645 8.51536 8.44427 8 8.44427ZM8 12.2196C6.31011 12.2196 4.77004 11.7551 3.37978 10.8263C1.98951 9.89746 0.904869 8.68397 0.125843 7.18585C0.0898876 7.10195 0.0599251 7.00907 0.0359551 6.9072C0.011985 6.80532 0 6.70045 0 6.59259C0 6.48472 0.011985 6.37686 0.0359551 6.26899C0.0599251 6.16113 0.0898876 6.07124 0.125843 5.99933C0.904869 4.5012 1.98951 3.28772 3.37978 2.35888C4.77004 1.43004 6.31011 0.965622 8 0.965622C9.68989 0.965622 11.23 1.43004 12.6202 2.35888C14.0105 3.28772 15.0951 4.5012 15.8742 5.99933C15.9101 6.07124 15.9401 6.16113 15.964 6.26899C15.988 6.37686 16 6.48472 16 6.59259C16 6.70045 15.988 6.80532 15.964 6.9072C15.9401 7.00907 15.9101 7.10195 15.8742 7.18585C15.0951 8.68397 14.0105 9.89746 12.6202 10.8263C11.23 11.7551 9.68989 12.2196 8 12.2196ZM8 10.9072C9.45019 10.9072 10.7805 10.5147 11.991 9.72967C13.2015 8.94465 14.1243 7.89896 14.7596 6.59259C14.1243 5.28622 13.2015 4.24053 11.991 3.45551C10.7805 2.67049 9.45019 2.27798 8 2.27798C6.54981 2.27798 5.21948 2.67049 4.00899 3.45551C2.7985 4.24053 1.86966 5.28622 1.22247 6.59259C1.86966 7.89896 2.7985 8.94465 4.00899 9.72967C5.21948 10.5147 6.54981 10.9072 8 10.9072Z" fill="#B8BABC" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <button type='button' className='btn btn-primary login_btn' onClick={submitData}>Login</button>
                        <div className="forget-pwd-link">
                            Forgot Password?
                        </div>
                    </form>
                    <div className="condi">
                        <div className="term">
                            <div className="span">Terms of Use</div>
                            <div className="span">Privacy Policy</div>
                        </div>
                        <div className="copy">
                            © Punctualiti 2022. All rights reserved
                        </div>
                    </div>
                </div>
                <div className="from_info">
                    <div className="slid-show">
                        <div className="slid-show-one"></div>
                        <div className="slid-show-two"></div>
                    </div>
                    <div className="slid-text">
                        <div className="from-slide-header">
                            360° Solution for Asset Management
                        </div>
                        <div className="from-slide-about">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                </div>
            </div>
            {show ? <Modalview show={show} Ton={Ton} handleClose={handleClose} token={token} showbtn={showbtn} /> : ''}
        </>
    )
}

export default LoginAct
