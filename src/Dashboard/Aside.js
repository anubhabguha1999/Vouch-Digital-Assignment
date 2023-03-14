import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Aside = ({ Toggle, Ac_ids }) => {
    const [Ac_id, SetAc_id] = useState(Ac_ids)
    return (
        <div className={Toggle ? 'aside_container active' : 'aside_container'}>
            <div className="aside">
                <div className="container_aside">
                    <div className="Company">
                        Company name
                    </div>
                    <div className="menu-aside">
                        {/* search */}
                        <div className="search-feild">
                            <div className="search-icon">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.6575 13.7507L8.09315 9.20548C7.72237 9.51233 7.28128 9.75525 6.76986 9.93425C6.25845 10.1132 5.71507 10.2027 5.13973 10.2027C3.69498 10.2027 2.47717 9.70411 1.4863 8.70685C0.495434 7.70959 0 6.50776 0 5.10137C0 3.69498 0.49863 2.49315 1.49589 1.49589C2.49315 0.49863 3.69498 0 5.10137 0C6.52055 0 7.72237 0.49863 8.70685 1.49589C9.69132 2.49315 10.1836 3.69498 10.1836 5.10137C10.1836 5.66393 10.1005 6.19452 9.93425 6.69315C9.76804 7.19178 9.51872 7.66484 9.1863 8.11233L13.7699 12.6575C13.9233 12.811 14 12.9932 14 13.2041C14 13.4151 13.9169 13.5973 13.7507 13.7507C13.5973 13.9041 13.4119 13.9808 13.1945 13.9808C12.9772 13.9808 12.7982 13.9041 12.6575 13.7507ZM5.12055 8.66849C6.10502 8.66849 6.94247 8.32009 7.63288 7.62329C8.32329 6.92648 8.66849 6.08584 8.66849 5.10137C8.66849 4.1169 8.32329 3.27626 7.63288 2.57945C6.94247 1.88265 6.10502 1.53425 5.12055 1.53425C4.1105 1.53425 3.25708 1.88265 2.56027 2.57945C1.86347 3.27626 1.51507 4.1169 1.51507 5.10137C1.51507 6.08584 1.86347 6.92648 2.56027 7.62329C3.25708 8.32009 4.1105 8.66849 5.12055 8.66849Z" fill="#B8BABC" />
                                </svg>
                            </div>
                            <div className="search-input">
                                <input type="search" placeholder='Search Modules' />
                            </div>
                        </div>

                        {/* heading */}
                        <div className="aside-title">
                            Client Master
                        </div>
                        {/* view link */}
                        <div className="viewLink_container">
                            <div className={(Ac_id === 1) ? "ViewLink active" : "ViewLink"} onClick={() => SetAc_id(1)}><NavLink to='/View_Clients'>View Clients </NavLink></div>
                            <div className={(Ac_id === 2) ? "ViewLink active" : "ViewLink"} onClick={() => SetAc_id(2)}><NavLink to='/Create_Profile'>Add Client </NavLink></div>
                        </div>
                    </div>
                </div>
                <div className="sideLogout">
                    <div className="userInfo">
                        <div className="userPic">
                            <img src="./Assets/user.png" alt="" />
                        </div>
                        <div className="userfild">
                            <div className="UserName">James Burton</div>
                            <div className="UserID">james@thevouch.digital</div>
                        </div>
                    </div>
                    <NavLink to='/'>
                        <div className="userOut">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.77778 1.77778H7.11111C7.6 1.77778 8 1.37778 8 0.888889C8 0.4 7.6 0 7.11111 0H1.77778C0.8 0 0 0.8 0 1.77778V14.2222C0 15.2 0.8 16 1.77778 16H7.11111C7.6 16 8 15.6 8 15.1111C8 14.6222 7.6 14.2222 7.11111 14.2222H1.77778V1.77778Z" fill="#8E96A0" />
                                <path d="M15.6895 7.68892L13.2095 5.20892C12.9251 4.92447 12.4451 5.12003 12.4451 5.52003V7.11114H6.22287C5.73398 7.11114 5.33398 7.51114 5.33398 8.00003C5.33398 8.48892 5.73398 8.88892 6.22287 8.88892H12.4451V10.48C12.4451 10.88 12.9251 11.0756 13.2007 10.7911L15.6807 8.31114C15.8584 8.14225 15.8584 7.8578 15.6895 7.68892Z" fill="#8E96A0" />
                            </svg>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Aside